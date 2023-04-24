const express = require("express");
const mongoose = require("mongoose");

const userDetail = require("../model/user");
const playerDetail = require("../model/player");
const characterDetail = require("../model/character");
const houseDetail = require("../model/house");
const energyDetail = require("../model/energy");
const lfDetail = require("../model/lifeInsurance");
const {bankLoan, bankDeposit} = require("../model/bank");

const app = express();

//For registering the user in 'metamask_login_table' and 'player_detail_table' through website.
const registerUser = (req,res) => {
    const {userAccount} = req.body;
    userDetail.findOne({userAccount: userAccount}, (err, user) => {
        if(user)
        {
            res.send({message: "User already registered" + " " + userAccount});
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
                    res.send({message: "Successfully Registered!" + " " + userAccount});
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
    const characterName = req.body.characterName;

    playerDetail.updateOne(
        { userAccount: userAccount },
        { 
            $set: { playerName: playerName, characterID: selectedCharacter },
            $push: { ownedCharacters: characterName }
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
    // await characterDetail.upsert({ characterName: "Character1", cost: 10, unlockLevel: 1 });
    // await characterDetail.upsert({ characterName: "Character2", cost: 10, unlockLevel: 1 });
    await characterDetail.upsert({ characterName: "Character3", cost: 0, unlockLevel: 1 });
    await characterDetail.upsert({ characterName: "Character4", cost: 0, unlockLevel: 1 });
    await characterDetail.upsert({ characterName: "Character5", cost: 10, unlockLevel: 2 });
    await characterDetail.upsert({ characterName: "Character6", cost: 10, unlockLevel: 2 });
    await characterDetail.upsert({ characterName: "Character7", cost: 10, unlockLevel: 3 });
    await characterDetail.upsert({ characterName: "Character8", cost: 10, unlockLevel: 3 });
    await characterDetail.upsert({ characterName: "Character9", cost: 10, unlockLevel: 4 });
    await characterDetail.upsert({ characterName: "Character10", cost: 10, unlockLevel: 4 });
    await characterDetail.upsert({ characterName: "Character11", cost: 10, unlockLevel: 5 });
    await characterDetail.upsert({ characterName: "Character12", cost: 10, unlockLevel: 5 });
    await characterDetail.upsert({ characterName: "Character13", cost: 10, unlockLevel: 6 });
    await characterDetail.upsert({ characterName: "Character14", cost: 10, unlockLevel: 6 });
}
insertCharacters();

const getCharacterDetails = (req, res) => {
    characterDetail.find({}, (err, characters) => {
        if(err) 
        {
          console.error(err);
        }
        else
        {
          res.send(characters);
          console.log(characters);
        }
    });
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

const updateEnergyDetails = (req,res) => {
    const userAccount = req.body.userAccount;
    const gameCoins = req.body.gameCoins;

    playerDetail.updateOne(
        { userAccount: userAccount },
        {
            $set: { gameCoins: gameCoins },  
        },
        (err) => {
            if(err)
            {
                console.error(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
}

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
        { userAccount: userAccount },
        { 
            $set: { bankLoan: bankLoan, gameCoins: gameCoins, payLoanByLevel: payLoanByLevel },
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

module.exports = {registerUser, getPlayer, saveDetails, getCharacterDetails, getHouseList, updateHouseDetails, getEnergyList, updateEnergyDetails, getLFList, updateLFDetails, getLoanList, updateBankLoan, getDepositList, updateBankDeposit};