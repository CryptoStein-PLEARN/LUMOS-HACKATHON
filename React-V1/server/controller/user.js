const express = require("express");
const mongoose = require("mongoose");

const userDetail = require("../model/user");
const playerDetail = require("../model/player");
const characterDetail = require("../model/character");
const houseDetail = require("../model/house");
const energyDetail = require("../model/energy");
const lfDetail = require("../model/lifeInsurance");
const {bankLoan, bankDeposit} = require("../model/bank");
const preRegistrationDetail = require("../model/preregistration");
const entrepreneurshipDetail = require("../model/entrepreneurship");
const marketplaceDetail = require("../model/marketplace");
const auctionDetail = require("../model/Auction")
const getInTouchDetails = require("../model/GetInTouch");
const LevelMapDetail = require("../model/LevelMap");

const app = express();

//For pre registration

const preRegisterUser = (req,res) => {
    const { email } = req.body;

    preRegistrationDetail.findOne({email: email}, async (err, user) => {
        if(user)
        {
            res.status(409).json({success: false, message: "User already registered" + " " + email});
        }
        else
        {
            const user = new preRegistrationDetail({
                email
            });
            await user.save(err => {
                if(err)
                {
                    res.status(500).json({ success: false, message: "An error occurred while pre-registering" });
                }
                else
                {
                    res.status(200).json({success: true, message: "Successfully Registered!"});
                }
            });
        }
    })
}

//For registering the user in 'metamask_login_table' and 'player_detail_table' through website.
const registerUser = (req,res) => {
    const {userAccount, category} = req.body;

    userDetail.findOne({userAccount: userAccount}, (err, user) => {
        if(user)
        {
            playerDetail.findOne({userAccount: userAccount}, (err, player) => {
                if(player)
                {
                    const level = player.level;
                    const gameCoins = player.gameCoins;
                    marketplaceDetail.findOne({category: category}, (err, category) => {
                        if(category)
                        {
                            const details = category.details;
                            res.send({message: "User already registered" + " " + userAccount, level, gameCoins, details});
                        }
                        else
                        {
                            res.send({message: "Category not found", level, gameCoins});
                        }
                    })
                }
                else
                {
                    res.send(err);
                }
            })
            
        }
        else
        {
            // Creating user in 'metamask_login_table' and 'player_detail_table'.
            const user = new userDetail({
                userAccount
            });
            const player = new playerDetail({
                userAccount
            })
            user.save(err => {
                if(err)
                {
                    res.send(err);
                }
                else
                {
                    const level = player.level;
                    const gameCoins = player.gameCoins;
                    res.send({message: "Successfully Registered!" + " " + userAccount, level, gameCoins});
                    player.save(); // Saving the user in 'player_detail_table' as well.
                }
            });
        }
    })
};

//For fetching details of player from 'player_detail_table'.
const getPlayer = (req,res) => {
    const { playerAccount } = req.params;
    playerDetail.findOne({userAccount: playerAccount}, (err, player) => {
        if(player)
        {
            res.send(player);
        }
        else
        {
            res.send(err);
        }
    })
};

//For saving details of player in 'player_detail_player'.
const saveDetails = (req,res) => {
    const userAccount = req.body.userAccount;
    const playerName = req.body.playerName;
    const selectedCharacter = req.body.selectedCharacter;
    // const characterName = req.body.characterName;
    const gameCoins = req.body.gameCoins;

    playerDetail.updateOne(
        { userAccount: userAccount },
        { 
            $set: { playerName: playerName, characterID: selectedCharacter, gameCoins: gameCoins },
            // $push: { ownedCharacters: characterName }
        },
        (err) => {
            if(err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    );
};

const getMarketplaceDetails = (req, res) => {
    marketplaceDetail.find({}, (err, category) => {
        if(err) 
        {
          console.error(err);
        }
        else
        {
          res.send(category);
        //   console.log(category);
        }
    });
}

const buyFromMarketplace = async (req, res) => {
    try {
        var { userAccount, userLevel, userGameCoins, category, itemID } = req.body.userDetails;

        const categoryData = await marketplaceDetail.findOne({ category: category });
        if (categoryData) {
            var item = categoryData.details.find(item => item.id === itemID);

            if (item) {
                if (userLevel >= item.unlockLevel) {
                    if (userGameCoins >= item.cost) {
                        userGameCoins = userGameCoins - item.cost;
                        
                        const updateResult = await marketplaceDetail.updateOne(
                            { category: req.body.userDetails.category },
                            {
                                $set: {
                                    [`details.${item.id - 2}.itemAvailable`]: false,
                                    [`details.${item.id - 2}.currentOwner`]: userAccount
                                },
                                $push: {
                                    [`details.${item.id - 2}.transactions`]: req.body.transactionDetails
                                },
                            },
                            { new: true }
                        );

                        if (updateResult.nModified === 0) {
                            throw new Error('Update operation failed');
                        }
                        const updatedCategoryData = await marketplaceDetail.findOne({ category: category });

                        const playerUpdateResult1 = await playerDetail.updateOne(   //addding NFT to buyer's account
                            { userAccount: userAccount },
                            {
                                $set: { gameCoins: userGameCoins },
                                $push: { [`ownedNFTs.${req.body.userDetails.category}`]: itemID }
                            },
                        );

                        if(item.currentOwner === null)
                        {

                        }
                        else
                        {
                            var prevOwner =  await playerDetail.findOne({ userAccount: item.currentOwner });
                            prevOwnerGameCoins = prevOwner.gameCoins + item.cost

                            const playerUpdateResult2 = await playerDetail.updateOne(   //removing NFT from prev owner's account
                                { userAccount: item.currentOwner },
                                {
                                    $set: { gameCoins: prevOwnerGameCoins},
                                    $pull: {[`ownedNFTs.${req.body.userDetails.category}`]: itemID}
                                }   
                            )
                        }

                        if (playerUpdateResult1.nModified === 0) {
                            throw new Error('Player update operation failed');
                        }
                        
                        
                        res.send({ message: "Transaction Successful", userGameCoins, transactions: updatedCategoryData.details[item.id - 2].transactions, itemAvailable: updatedCategoryData.details[item.id - 2].itemAvailable });
                    } else {
                        res.send({ message: "You need more game coins to unlock this character." });
                    }
                } else {
                    res.send({ message: "You can buy this character at level " + item.unlockLevel });
                }
            } else {
                res.send({ message: "Item Not found" });
            }
        } else {
            res.send({ message: "Category not found" });
        }
    } catch (err) {
        console.error(err);
        res.send(err);
    }
};

const getAuctionDetails = async (req,res) => {
    try
    {
        const {category, id} = req.params;

        const categoryData = await auctionDetail.findOne({ category: category });

        if(categoryData)
        {
            var item = categoryData.auction.find(item => item.id === parseInt(id));
            
            if(item)
            {
                // console.log(item);
                res.send({item, category: category});
            }
            else
            {
                console.log("Item not found. Something is wrong.");
                res.send("Item not found. Something is wrong.");
            }
        }
        else
        {
            console.log("Category not found. Something is wrong.")
            res.send("Category not found. Something is wrong.")
        }
    }
    catch(err)
    {
        console.log(err);
        res.send(err);
    }
}

const startAuction = async (req,res) => {
    try{
        const {category, id, duration, basePrice, currentOwner, minBidAmount} = req.body;
        const categoryData = await auctionDetail.findOne({ category: category });

        if(categoryData)
        {
            var item = categoryData.auction.find(item => item.id === parseInt(id));

            if(item)    //startAuctionAgainForItem
            {
                const endTime = new Date(Date.now() + duration);

                const updateResult = await auctionDetail.updateOne(
                    {category: req.body.category},
                    {
                        $set: 
                        {
                            [`auction.${categoryData.auction.indexOf(item)}.started`]: true,
                            [`auction.${categoryData.auction.indexOf(item)}.ended`]: false,
                            [`auction.${categoryData.auction.indexOf(item)}.endTime`]: endTime,
                            [`auction.${categoryData.auction.indexOf(item)}.basePrice`]: basePrice,
                            [`auction.${categoryData.auction.indexOf(item)}.currentOwner`]: currentOwner,
                            [`auction.${categoryData.auction.indexOf(item)}.minBidAmount`]: minBidAmount,
                        },
                        $push:
                        {
                            [`auction.${categoryData.auction.indexOf(item)}.bids`]: [{
                                auctionID: item.bids.length,
                                bid: []
                            }]
                        }
                    },
                )

                const updateMarketplace = await marketplaceDetail.updateOne(
                    {category: req.body.category},
                    {
                        $set:
                        {
                            [`details.${item.id - 2}.inAuction`]: true,
                            [`details.${item.id - 2}.auctionEndTime`]: endTime
                        }
                    }
                )

                const updatedItem = await auctionDetail.findOne({ category: category });

                res.send({message: "Auction Started.", item: updatedItem.auction.find((i) => i.id === parseInt(id)), category: category});
            }
            else    //AddItemInAuction
            {
                const endTime = new Date(Date.now() + duration);

                const updateResult = await auctionDetail.updateOne(
                    {category: req.body.category},
                    {
                        $push:
                        {
                            [`auction`]: {
                                id: id,
                                started: true,
                                ended: false,
                                endTime: endTime,
                                basePrice: basePrice,
                                currentOwner: currentOwner,
                                minBidAmount: minBidAmount,
                                bids:[
                                    {
                                        auctionID: 0,
                                        bid:[]
                                    }
                                ]
                            }
                        }
                    },
                )
                if (updateResult.nModified === 0) {
                    throw new Error('Update operation failed');
                }

                const updateMarketplace = await marketplaceDetail.updateOne(
                    {category: req.body.category},
                    {
                        $set:
                        {
                            [`details.${id - 2}.inAuction`]: true,
                            [`details.${id - 2}.auctionEndTime`]: endTime
                        }
                    }
                )

                const updatedItem = await auctionDetail.findOne({ category: category });

                res.send({message: "Auction Started.", item: updatedItem.auction.find((i) => i.id === parseInt(id)), category: category})
            }
        }
        else    //Create Auction for the category and item - first time.
        {
            const endTime = new Date(Date.now() + duration);

            const newCategoryData = new auctionDetail({
                category: category,
                auction: [{
                    id: id,
                    started: true,
                    ended: false,
                    endTime: endTime,
                    basePrice: basePrice,
                    currentOwner: currentOwner,
                    minBidAmount: minBidAmount,
                    bids: [
                        {
                            auctionID: 0,
                            bid:[]
                        }
                    ]
                }]
            });

            const updateMarketplace = await marketplaceDetail.updateOne(
                {category: req.body.category},
                {
                    $set:
                    {
                        [`details.${id - 2}.inAuction`]: true,
                        [`details.${id - 2}.auctionEndTime`]: endTime
                    }
                }
            )

            await newCategoryData.save();

            const updatedItem = await auctionDetail.findOne({ category: category });

            res.send({message: "New auction record created successfully", item: updatedItem.auction.find((i) => i.id === parseInt(id)), category: category});
        }
    }
    catch(err)
    {
        console.log(err)
        res.send(err)
    }
}

const endAuction = async (req,res) => {
    try
    {
        const {category, id} = req.body;
        const categoryData = await auctionDetail.findOne({ category: category });

        if(categoryData)
        {
            var item = categoryData.auction.find(item => item.id === parseInt(id));
            
            if(item)
            {
                if(item.bids[item.bids.length - 1].bid.length > 0)
                {
                    const endTime = new Date();

                    const highestBid = item.bids[item.bids.length - 1].bid.reduce((maxBid, currentBid) => {
                        if (currentBid.bidAmount > maxBid.bidAmount) {
                            return currentBid;
                        } else {
                            return maxBid;
                        }
                    });

                    const updateResult = await auctionDetail.updateOne(
                        {category: req.body.category},
                        {
                            $set: 
                            {
                                [`auction.${categoryData.auction.indexOf(item)}.started`]: false,
                                [`auction.${categoryData.auction.indexOf(item)}.ended`]: true,
                                [`auction.${categoryData.auction.indexOf(item)}.endTime`]: endTime,
                                [`auction.${categoryData.auction.indexOf(item)}.basePrice`]: 0,
                                [`auction.${categoryData.auction.indexOf(item)}.currentOwner`]: highestBid.bidderAddress,
                                [`auction.${categoryData.auction.indexOf(item)}.minBidAmount`]: 0,
                            },
                        },
                        {
                            arrayFilters: [{ 'item.id': id }],
                        }
                    )

                    const updateMarketplace = await marketplaceDetail.updateOne(
                        {
                            category: req.body.category
                        },
                        {
                            $set: 
                            {
                                [`details.${id - 2}.inAuction`]: false,
                                [`details.${id - 2}.auctionEndTime`]: endTime,
                                [`details.${id - 2}.currentOwner`]: highestBid.bidderAddress,
                            },
                            $push:
                            {
                                [`details.${id - 2}.transactions`]: {
                                    buyerAddress: highestBid.bidderAddress,
                                    sellerAddress: item.currentOwner,
                                    cost: highestBid.bidAmount,
                                    timestamp: new Date(),
                                    event: "AuctionSale"
                                }
                            }
                        }
                    )
                    //Removing NFT from the account of prev owner
                    const playerUpdateResult2 = await playerDetail.updateOne(
                        { userAccount: item.currentOwner },
                        {
                            $pull:
                            {
                                [`ownedNFTs.${req.body.category}`]: id 
                            }
                        }
                    )
                    
                    //Adding NFT to the account of new owner
                    const playerUpdateResult1 = await playerDetail.updateOne(
                        { userAccount: highestBid.bidderAddress },
                        {
                            $push: { [`ownedNFTs.${req.body.category}`]: id }
                        },
                    );

                    res.send({
                        message: `Auction ended for ItemID ${id}`,
                        AuctionWinner: highestBid,
                    });
                }
                else
                {
                    const updateResult = await auctionDetail.updateOne(
                        {category: req.body.category},
                        {
                            $set: 
                            {
                                [`auction.${categoryData.auction.indexOf(item)}.started`]: false,
                                [`auction.${categoryData.auction.indexOf(item)}.ended`]: true,
                                [`auction.${categoryData.auction.indexOf(item)}.endTime`]: new Date(),
                                [`auction.${categoryData.auction.indexOf(item)}.basePrice`]: 0,
                                [`auction.${categoryData.auction.indexOf(item)}.minBidAmount`]: 0,
                            },
                        },
                        {
                            arrayFilters: [{ 'item.id': id }],
                        }
                    )

                    const updateMarketplace = await marketplaceDetail.updateOne(
                        {
                            category: req.body.category
                        },
                        {
                            $set: 
                            {
                                [`details.${id - 2}.inAuction`]: false,
                                [`details.${id - 2}.auctionEndTime`]: new Date(),
                            },
                        }
                    )

                    res.send({message: `Auction ended. No bids for item ${id}.`})
                }
            }
            else    //Something is wrong
            {
                console.log("Item not found, Something is wrong.");
                res.send("Item not found, Something is wrong.");
            }
        }
        else    //Something is wrong
        {
            console.log("Category not found, Something is wrong.")
            res.send("Category not found, Something is wrong.")
        }
    }
    catch(err)
    {
        console.log(err);
        res.send(err);
    }
}

const placeBid = async (req,res) => {
    try
    {
        const {category, id, bid} = req.body;
        const categoryData = await auctionDetail.findOne({ category: category });

        if(categoryData)
        {
            var item = categoryData.auction.find(item => item.id === id);

            if(item)
            {
                if(bid.bidAmount <= item.minBidAmount)
                {
                    res.send({message: `Bid Amount should be greater than the Minimum Bid Amount ${item.minBidAmount}${bid.currency}`})
                }
                else
                {
                    const updateResult = await auctionDetail.updateOne(
                        {category: req.body.category},
                        {
                            $push: 
                            {
                                [`auction.${categoryData.auction.indexOf(item)}.bids.${item.bids.length - 1}.bid`]: bid,
                            },
                        }
                    )

                    res.send({message: "Bid placed Successfully.", bid});
                }   
            }
            else    //Something is wrong
            {
                console.log("Item not found, Something is wrong.");
                res.send("Item not found, Something is wrong.");
            }
        }
        else    //Something is wrong
        {
            console.log("Category not found, Something is wrong.")
            res.send("Category not found, Something is wrong.")
        }
    }
    catch(err)
    {
        console.log(err);
        res.send(err);
    }
}

const startSale = async (req, res) => {
    try
    {
        const {category, id, cost} = req.body;
        const categoryData = await marketplaceDetail.findOne({ category: category });

        if(categoryData)
        {
            var item = categoryData.details.find(item => item.id === id);

            if(item)
            {
                const updateResult = await marketplaceDetail.updateOne(
                    {category: category},
                    {
                        $set: 
                        {
                            [`details.${categoryData.details.indexOf(item)}.cost`]: cost,
                            [`details.${categoryData.details.indexOf(item)}.itemAvailable`]: true
                        }
                    }
                )
            }
            else    //Soemthing is wrong.
            {
                console.log("Item not found. Something is wrong.");
                res.send("Item not found. Soemthing is wrong.");    
            }
        }
        else    //Something is wrong.
        {
            console.log("Category not found. Something is wrong.");
            res.send("Category not found. Soemthing is wrong.");
        }

    }
    catch(err)
    {
        console.log(err);
        res.send(err);
    }
}

const cancelSale = async (req,res) => {
    try
    {
        const {category, id} = req.body;
        const categoryData = await marketplaceDetail.findOne({ category: category});

        if(categoryData)
        {
            var item = categoryData.details.find(item => item.id === id);
            
            if(item)
            {
                const updateResult = await marketplaceDetail.updateOne(
                    {category: req.body.category},
                    {
                        $set:
                        {
                            [`details.${categoryData.sell.indexOf(item)}.itemAvailable`]: false,
                        }
                    }
                )

                res.send({message: "Sale cancelled successfully", item: categoryData.details.find((i) => i.id === parseInt(id))});
            }
            else    //Something is wrong
            {
                console.log("Item not found, Something is wrong.");
                res.send("Item not found, Something is wrong.");
            }
        }
        else    //Something is wrong
        {
            console.log("Category not found, Something is wrong.")
            res.send("Category not found, Something is wrong.")
        }

    }
    catch(err)
    {
        console.log(err);
        res.send(err);
    }
}

const postGetInTouchDetails = async (req, res) => {
    const {name, email, countryCode, phoneNumber, topic, subject, description, priority} = req.body;

    const newRequest = new getInTouchDetails({
        name : name,
        email : email,
        countryCode: countryCode,
        phoneNumber : phoneNumber,
        topic: topic,
        subject: subject,
        description: description,
        priority: priority
    })

    await newRequest.save();

    res.send({message: "Request submitted successfully"});
}

const getGetInTouchDetails = async (req, res) => {
    
    getInTouchDetails.find({}, (err, records) => {
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.send(records);
        }
    })
}

const handleStatus = async (req, res) => {
    const {_id, status} = req.body;

    try {
        const request = await getInTouchDetails.findOne({ _id: mongoose.Types.ObjectId(_id) });

        if(request)
        {
            const updateResult = await getInTouchDetails.updateOne(
                { _id: mongoose.Types.ObjectId(_id) },
                {
                    $set: 
                    {
                        status: status
                    }
                }
            )

            res.status(200).json({ success: true, message: "Query's status changed successfully." });
        }
        else
        {
            res.status(404).json({ message: "Query not found. Something is wrong." });
        }
    }
    catch(error)
    {
        res.status(500).json({ message: "Internal server error." });
    }
}

const handlePriority = async (req, res) => {
    const {_id, priority} = req.body;

    try {
        const request = await getInTouchDetails.findOne({ _id: mongoose.Types.ObjectId(_id) });
        if(request)
        {
            const updateResult = await getInTouchDetails.updateOne(
                { _id: mongoose.Types.ObjectId(_id) },
                {
                    $set: 
                    {
                        priority: priority
                    }
                }
            )

            res.status(200).json({ success: true, message: "Query's priority changed successfully." });
        }
        else
        {
            res.status(404).json({ message: "Query not found. Something is wrong." });
        }
    }
    catch(error)
    {
        res.status(500).json({ message: "Internal server error." });
    }
}

const deleteRequest = async (req, res) => {
    const { _id } = req.body;
  
    try {
      const request = await getInTouchDetails.findOne({ _id: mongoose.Types.ObjectId(_id) });
  
      if (request) {
        const updateResult = await getInTouchDetails.updateOne(
          { _id: mongoose.Types.ObjectId(_id) },
          {
            $set: 
            {
                subject: "",
                description: "",
                topic: "",
                status: "",
                priority: ""
            }
          }
        );
  
        res.status(200).json({ success: true, message: "Query deleted successfully." });
      } else {
        res.status(404).json({ message: "Query not found. Something is wrong." });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error." });
    }
  };
  

const getOwnedNFTs = (req,res) => {
    const {userAccount} = req.params;

    playerDetail.findOne({userAccount: userAccount}, async (err, player) => {
        if (player) {
            const ownedNFTs = player.ownedNFTs;
            const nftFields = Object.keys(ownedNFTs);
            const nftIds = nftFields.reduce((ids, field) => [...ids, ...ownedNFTs[field]], []);

            const nftDetails = await marketplaceDetail.aggregate([
                { $match: { category: { $in: nftFields } } },
                { $unwind: "$details" },
                { $match: { $expr: { $and: [
                    { $in: ["$details.id", nftIds] },
                ] } } },
                { $addFields: { "details.category": "$category" } }
            ]).exec();

            const extractedDetails = nftDetails.map((doc) => doc.details);
            res.send(extractedDetails);
        } 
        else 
        {
            res.send(err);
        }
    })
}

//For adding houses in the DB.
const insertHouses = async () => {
    await houseDetail.upsert({ houseID: 0, houseName: "House1", cost: 600, insurancePrice: 100, taxPrice: 100, energyGain: 20});
    await houseDetail.upsert({ houseID: 1, houseName: "House2", cost: 700, insurancePrice: 200, taxPrice: 200, energyGain: 40});
    await houseDetail.upsert({ houseID: 2, houseName: "House3", cost: 800, insurancePrice: 300, taxPrice: 300, energyGain: 60});
}
insertHouses();

const getHouseList = (req, res) => {
    houseDetail.find({}, (err, houseList) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(houseList);
            console.log(houseList);
        }
    })
}

//For updating house details
const updateHouseDetails = (req,res) => {
    const userAccount = req.body.userAccount;
    const selectedHouseID = req.body.selectedHouseID;
    const gameCoins = req.body.gameCoins;

    // Input validation
    if (!/^[a-zA-Z0-9_-]+$/.test(selectedHouseID)) {
        return res.sendStatus(400); // Bad Request
    }

    playerDetail.updateOne(
        { userAccount: userAccount },
        { 
            $set: { houseID: selectedHouseID, gameCoins: gameCoins },
            $push: { ownedHouseID: selectedHouseID }
        },
        (err) => {
            if(err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
}

//For adding buyingEnergy options in DB.
const insertEnergy = async () => {
    await energyDetail.upsert({ energyID: 0, cost: 100, energyGain: 20});
    await energyDetail.upsert({ energyID: 1, cost: 200, energyGain: 40});
    await energyDetail.upsert({ energyID: 2, cost: 300, energyGain: 60});
}
insertEnergy();

const getEnergyList = (req, res) => {
    energyDetail.find({}, (err, energyList) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(energyList);
            console.log(energyList);
        }
    })
}

const updateEnergyDetails = (req, res) => {
    const userAccount = req.body.userAccount;
    const gameCoins = req.body.gameCoins;

    playerDetail.updateOne(
        { userAccount: { $eq: userAccount } },
        {
            $set: { gameCoins: { $eq: gameCoins } },  
        },
        (err) => {
            if (err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    );
};

//For adding lifeInsurance options in DB.
const insertLF = async () => {
    await lfDetail.upsert({lfID: 0, cost: 100, loanAgainstLF: 50})
    await lfDetail.upsert({lfID: 1, cost: 200, loanAgainstLF: 60})
    await lfDetail.upsert({lfID: 2, cost: 300, loanAgainstLF: 70})
}
insertLF();

// To fetch all Life Insurances available.
const getLFList = (req,res) => {
    lfDetail.find({}, (err, lfList) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(lfList);
            console.log(lfList);
        }
    })
}

// To update gameCoins/loanAgainstLF after buying/using LF.
const updateLFDetails = (req,res) => {
    const userAccount = req.body.userAccount;
    const selectedLFID = req.body.selectedLFID;
    const lfBoughtAt = req.body.lfBoughtAt;
    const gameCoins = req.body.gameCoins;
    const loanAgainstLF = req.body.loanAgainstLF;
    const lastWheelSpinTime = req.body.lastWheelSpinTime;

    playerDetail.updateOne(
        { userAccount: userAccount },
        { 
            $set: { lfID: selectedLFID, lfBoughtAt: lfBoughtAt, gameCoins: gameCoins, loanAgainstLF: loanAgainstLF, lastWheelSpinTime: lastWheelSpinTime },
        },
        (err) => {
            if(err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
}

//For adding loans in DB.
const insertLoans = async () => {
    await bankLoan.upsert({loanID: 0, gameCoins: 50, interestRate: 2, timeToPay: 2})
    await bankLoan.upsert({loanID: 1, gameCoins: 75, interestRate: 4, timeToPay: 4})
    await bankLoan.upsert({loanID: 2, gameCoins: 100, interestRate: 6, timeToPay: 6})
}
insertLoans();

//To fetch all loans available.
const getLoanList = (req,res) => {
    bankLoan.find({}, (err, loanList) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(loanList);
            console.log(loanList);
        }
    })
}

//To update bankLoan and Gamecoins after taking loan from bank.
const updateBankLoan = (req,res) => {
    const userAccount = req.body.userAccount;
    const bankLoan = req.body.bankLoan;
    const gameCoins = req.body.gameCoins;
    const payLoanByLevel = req.body.payLoanByLevel;

    playerDetail.updateOne(
        { userAccount: { $eq: userAccount } },
        { 
            $set: { bankLoan: { $eq: bankLoan }, gameCoins: { $eq: gameCoins }, payLoanByLevel: { $eq: payLoanByLevel } },
        },
        (err) => {
            if(err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
}

//For adding deposit list in DB.
const insertDeposit = async () => {
    await bankDeposit.upsert({depositID: 0, time: 1440, interestRate: 10});
    await bankDeposit.upsert({depositID: 1, time: 2880, interestRate: 15});
    await bankDeposit.upsert({depositID: 2, time: 4320, interestRate: 20});
}
insertDeposit();

//To fetch deposit list
const getDepositList = (req,res) => {
    bankDeposit.find({}, (err, depositList) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(depositList);
            console.log(depositList);
        }
    })
}

const updateBankDeposit = (req,res) => {
    const userAccount = req.body.userAccount;
    const gameCoins = req.body.gameCoins;
    const timeRemainingBeforeWithdrawal = req.body.timeRemainingBeforeWithdrawal;
    const depositAmount = req.body.depositAmount;

    playerDetail.updateOne(
        { userAccount: { $eq: userAccount } },
        { 
            $set: { timeRemainingBeforeWithdrawal: { $eq: timeRemainingBeforeWithdrawal }, gameCoins: { $eq: gameCoins }, bankDeposit: { $eq: depositAmount } },
        },
        (err) => {
            if(err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
}

const getEntrepreneurshipBusiness = (req,res) => {
    const {level} = req.params;
    entrepreneurshipDetail.findOne({level: level}, (err, business) => {
        if(business)
        {
            res.send(business);
        }
        else
        {
            res.send(err);
        }
    })
}

const checkAnswer = (req,res) => {
    const {level, selectedAnswerIndex, playerAnswer} = req.params;

    entrepreneurshipDetail.findOne({level: level}, (err, business) => {
        if(business)
        {
            res.send(business.details[selectedAnswerIndex]);
        }
        else
        {
            res.send(err);
        }
    })

}

const getRealEstateMissionDetails = (req,res) => {
    const {userAccount, countryID, cityID, pillarID, randomMissionNumber} = req.params;

    playerDetail.findOne({userAccount: userAccount}, (err,userAccount) => {
        if(userAccount)
        {
            if(userAccount.level[countryID].cities[cityID].pillars[pillarID].pillarStatus == "Pending") //mission pending
            {
                if(userAccount.realEstatePillar.assetBought == false)   //buy mission
                {
                    var missionTitle = userAccount.level[countryID].cities[cityID].pillars[pillarID].missions.buy[randomMissionNumber].details.title;
                    var amount = userAccount.level[countryID].cities[cityID].pillars[pillarID].missions.buy[randomMissionNumber].details.amount;
                    var missionType = "buy";
                    
                    res.send({missionTitle, amount, missionType});
                }
                else    //sell mission
                {
                    var missionTitle = userAccount.level[countryID].cities[cityID].pillars[pillarID].missions.sell[randomMissionNumber].details.title;
                    var amount = userAccount.level[countryID].cities[cityID].pillars[pillarID].missions.sell[randomMissionNumber].details.amount;
                    var missionType = "sell";

                    res.send({missionTitle, amount, missionType});
                }
            }
            else    //mission completed
            {
                res.send({missionTitle: "You have already completed the Real Estate mission."});
            }
        }
        else
        {
            res.send(err);
        }
    })
}

const acceptRealEstateBuyOfferDetails = (req,res) => {
    const userAccount = req.body.userAccount;
    const countryID = req.body.countryID;
    const cityID = req.body.cityID;
    const pillarID = req.body.pillarID;
    const gameCoins = req.body.gameCoins;
    const offerType = req.body.offerType;

    playerDetail.updateOne(
        {userAccount: userAccount},
        {
            $set:
            {
                gameCoins: gameCoins,
                [`realEstatePillar.assetBought`]: true,
                [`level.${countryID}.cities.${cityID}.pillars.${pillarID}.missions.${offerType}.0.missionStatus`]: "Completed",
                [`level.${countryID}.cities.${cityID}.pillars.${pillarID}.missions.${offerType}.1.missionStatus`]: "Completed",
                [`level.${countryID}.cities.${cityID}.pillars.${pillarID}.missions.${offerType}.2.missionStatus`]: "Completed",
                [`level.${countryID}.cities.${cityID}.pillars.${pillarID}.missions.${offerType}.3.missionStatus`]: "Completed",
                [`level.${countryID}.cities.${cityID}.pillars.${pillarID}.missions.${offerType}.4.missionStatus`]: "Completed",
            }
        },
        (err) => {
            if (err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
}

const acceptRealEstateSellOfferDetails = (req,res) => {
    const userAccount = req.body.userAccount;
    const countryID = req.body.countryID;
    const cityID = req.body.cityID;
    const pillarID = req.body.pillarID;
    const gameCoins = req.body.gameCoins;
    const offerType = req.body.offerType;

    playerDetail.updateOne(
        {userAccount: userAccount},
        {
            $set:
            {
                gameCoins: gameCoins,
                [`realEstatePillar.assetBought`]: false,
                [`level.${countryID}.cities.${cityID}.pillars.${pillarID}.missions.${offerType}.0.missionStatus`]: "Completed",
                [`level.${countryID}.cities.${cityID}.pillars.${pillarID}.missions.${offerType}.1.missionStatus`]: "Completed",
                [`level.${countryID}.cities.${cityID}.pillars.${pillarID}.missions.${offerType}.2.missionStatus`]: "Completed",
                [`level.${countryID}.cities.${cityID}.pillars.${pillarID}.missions.${offerType}.3.missionStatus`]: "Completed",
                [`level.${countryID}.cities.${cityID}.pillars.${pillarID}.missions.${offerType}.4.missionStatus`]: "Completed",
                [`level.${countryID}.cities.${cityID}.pillars.${pillarID}.pillarStatus`]: "Completed",
            }
        },
        (err) => {
            if (err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
}

module.exports = {preRegisterUser,registerUser, getPlayer, saveDetails, getMarketplaceDetails, getOwnedNFTs, buyFromMarketplace, startAuction, endAuction, placeBid, startSale, cancelSale, getHouseList, getAuctionDetails, updateHouseDetails, getEnergyList, updateEnergyDetails, getLFList, updateLFDetails, getLoanList, updateBankLoan, getDepositList, updateBankDeposit, getEntrepreneurshipBusiness, checkAnswer, postGetInTouchDetails, getGetInTouchDetails, handleStatus, handlePriority, deleteRequest, getRealEstateMissionDetails, acceptRealEstateBuyOfferDetails, acceptRealEstateSellOfferDetails};