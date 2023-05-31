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
    // res.send(req.body);

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


//For inserting characters in the DB
const insertCharacters = async () => {
    await characterDetail.upsert({ characterName: "Character3", description: "Lorem Ipsum", cost: 0, unlockLevel: 1, ImgUri: 'https://github.com/CryptoStein-PLEARN/PLEARN/blob/main/React-V1/plearn/src/assets/MarketPlace/Characters/Character3.png' });
    await characterDetail.upsert({ characterName: "Character4", description: "Lorem Ipsum", cost: 0, unlockLevel: 1, ImgUri: 'https://github.com/CryptoStein-PLEARN/PLEARN/blob/main/React-V1/plearn/src/assets/MarketPlace/Characters/Character4.png'});
    await characterDetail.upsert({ characterName: "Tony", description: "Lorem Ipsum", cost: 10, unlockLevel: 2, ImgUri: 'https://github.com/CryptoStein-PLEARN/PLEARN/blob/main/React-V1/plearn/src/assets/MarketPlace/Characters/Character5.jpeg' });
    await characterDetail.upsert({ characterName: "Steve", description: "Lorem Ipsum", cost: 10, unlockLevel: 2, ImgUri: 'https://github.com/CryptoStein-PLEARN/PLEARN/blob/main/React-V1/plearn/src/assets/MarketPlace/Characters/Character6.jpeg' });
    await characterDetail.upsert({ characterName: "Bruce", description: "Lorem Ipsum", cost: 10, unlockLevel: 3, ImgUri: 'https://github.com/CryptoStein-PLEARN/PLEARN/blob/main/React-V1/plearn/src/assets/MarketPlace/Characters/Character7.jpeg' });
    await characterDetail.upsert({ characterName: "Thor", description: "Lorem Ipsum", cost: 10, unlockLevel: 3, ImgUri: 'https://github.com/CryptoStein-PLEARN/PLEARN/blob/main/React-V1/plearn/src/assets/MarketPlace/Characters/Character8.jpeg' });
    await characterDetail.upsert({ characterName: "Rhodey", description: "Lorem Ipsum", cost: 10, unlockLevel: 4, ImgUri: 'https://github.com/CryptoStein-PLEARN/PLEARN/blob/main/React-V1/plearn/src/assets/MarketPlace/Characters/Character9.jpeg' });
    await characterDetail.upsert({ characterName: "Natasha", description: "Lorem Ipsum", cost: 10, unlockLevel: 4, ImgUri: 'https://github.com/CryptoStein-PLEARN/PLEARN/blob/main/React-V1/plearn/src/assets/MarketPlace/Characters/Character10.jpeg' });
    await characterDetail.upsert({ characterName: "Wanda", description: "Lorem Ipsum", cost: 10, unlockLevel: 5, ImgUri: 'https://github.com/CryptoStein-PLEARN/PLEARN/blob/main/React-V1/plearn/src/assets/MarketPlace/Characters/Character11.jpeg' });
    await characterDetail.upsert({ characterName: "Jane", description: "Lorem Ipsum", cost: 10, unlockLevel: 5, ImgUri: 'https://github.com/CryptoStein-PLEARN/PLEARN/blob/main/React-V1/plearn/src/assets/MarketPlace/Characters/Character12.jpeg' });
    await characterDetail.upsert({ characterName: "Pepper", description: "Lorem Ipsum", cost: 10, unlockLevel: 6, ImgUri: 'https://github.com/CryptoStein-PLEARN/PLEARN/blob/main/React-V1/plearn/src/assets/MarketPlace/Characters/Character13.jpeg' });
    await characterDetail.upsert({ characterName: "Peggy", description: "Lorem Ipsum", cost: 10, unlockLevel: 6, ImgUri: 'https://github.com/CryptoStein-PLEARN/PLEARN/blob/main/React-V1/plearn/src/assets/MarketPlace/Characters/Character14.jpeg' });
}
insertCharacters();

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

const buyFromMarketplace = (req, res) => {
    var {userAccount, userLevel, userGameCoins, category, name, itemID} = req.body;

    marketplaceDetail.findOne({category: category}, (err, category) => {
        if(category)
        {
            const item = category.details.find(item => item.name === name);
            if(item)
            {
                if(userLevel >= item.unlockLevel)
                {
                    if(userGameCoins >= item.cost)
                    {
                        userGameCoins = userGameCoins - item.cost;
                        // const categoryKey = `ownedNFTs.${req.body.category}`;
                        playerDetail.updateOne(
                            { userAccount: userAccount },
                            {
                                $set: {gameCoins: userGameCoins},
                                $push: { [`ownedNFTs.${req.body.category}`]: itemID }
                            },
                            (err) => 
                            {
                                if(err) 
                                {
                                    console.error(err);
                                    return res.send(err);
                                }
                                res.send({message: "Transaction Successful", item});          
                            }
                        );
                    }
                    else
                    {
                        res.send({message: "You need more game coins to unlock this character."})
                    }
                }
                else
                {
                    res.send({message: "You can buy this character at level " + item.unlockLevel})
                }
            }
            else
            {
                res.send({message: "Item Not found"});
            }
        }
        else
        {
            res.send({message: "Category not found"});
        }
    })
}

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

    playerDetail.updateOne(
        { userAccount: userAccount },
        { 
            $set: { lfID: selectedLFID, lfBoughtAt: lfBoughtAt, gameCoins: gameCoins, loanAgainstLF: loanAgainstLF },
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

module.exports = {preRegisterUser,registerUser, getPlayer, saveDetails, getMarketplaceDetails, getOwnedNFTs, buyFromMarketplace, getHouseList, updateHouseDetails, getEnergyList, updateEnergyDetails, getLFList, updateLFDetails, getLoanList, updateBankLoan, getDepositList, updateBankDeposit, getEntrepreneurshipBusiness, checkAnswer};