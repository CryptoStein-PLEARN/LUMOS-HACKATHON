const mongoose = require("mongoose");

// Table for saving Player game data
const playerDetailSchema = new mongoose.Schema({
    userAccount: {type: String},
    playerName: {type: String, default: ''},
    gameCoins: {type: Number, default: 300},
    characterID: {type: Number, default: -1},   //currently selected character
    level: {
        currentCountryID: { type: Number } ,
        currentCityID: { type: Number },
    },  //level of the player

    ownedNFTs: {
        characters: { type: [Number], default: [] },
        // add here
        // add here
    },

    realEstatePillar: 
    {
        assetBought: { type: Boolean, default: false },     //if 'false', then offer would be of type 'buy'. Else, type 'sell'.
    },

    tradingPillar:
    {
        stocksBought: { type: Boolean, default: false },    //if 'false', then offer would be of type 'buy'. Else, type 'sell'.
    },

    entrepreneurshipPillar:
    {
        accessoryBought: { type: Boolean, default: false }, //if 'false', then offer would be of type 'buy'. Else, type 'sell'.
    },

    bankLoan: {type: Number, default: 0},
    payLoanByLevel: {type: Number, default: -1},    //determined by 'timeToPay' in bank loan schema
    bankDeposit: {type: Number, default: 0},
    timeRemainingBeforeWithdrawal: {type: Number, default: 0},
    lastWheelSpinTime: { type: Date, default: null },
    // energyHouseID: {type: Number, default: -1},   //energy house ID
    // lfID: {type: Number, default: -1},  //currently selected LifeInsurance
    // lfBoughtAt: {type: Number, default: 1},  //LifeInsurance bought at which LEVEL; will be used to calculate 'sell insurance amt(2x)'
    // loanAgainstLF: {type: Number, default: 0},
    // energy: {type: Number, default: 100},
})
const playerDetail = new mongoose.model("player_detail_table", playerDetailSchema, "player_detail_table");

module.exports = playerDetail;