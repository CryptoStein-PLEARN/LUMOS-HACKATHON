const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema({
    missionID: { type: Number },
    missionStatus: { type: String }, // Accepted || Rejected
    details: {
        title: { type: String },
        amount: { type: Number }, // Buying Cost or Selling Price
    },
});

const pillarSchema = new mongoose.Schema({
    pillarID: { type: Number },
    pillarName: { type: String },
    pillarStatus: { type: String }, // Pending || Completed
    missions: {
        buy: [missionSchema],
        sell: [missionSchema],
    },
});

const citySchema = new mongoose.Schema({
    cityID: { type: Number },
    cityName: { type: String },
    cityStatus: { type: String }, // Pending || Completed
    pillars: [pillarSchema],
});

const countrySchema = new mongoose.Schema({
    countryID: { type: Number },
    countryName: { type: String },
    countryStatus: { type: String }, // Pending || Completed
    cities: [citySchema],
});

// Table for saving Player game data
const playerDetailSchema = new mongoose.Schema({
    userAccount: {type: String},
    playerName: {type: String, default: ''},
    gameCoins: {type: Number, default: 300},
    characterID: {type: Number, default: -1},   //currently selected character
    ownedNFTs: {
        characters: { type: [Number], default: [] },
        //add here
        //add here
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
    houseID: {type: Number, default: -1},   //currently selected house

    level: 
    {
        type: [countrySchema],
        default: 
        [
            {
                countryID: 0,
                countryName: 'Sweden',
                countryStatus: 'Pending',
                cities: 
                [
                    {
                        cityID: 0,
                        cityName: 'Stockholm',
                        cityStatus: 'Pending',
                        pillars:
                        [
                            {
                                pillarID: 0,
                                pillarName: 'RealEstate',
                                pillarStatus: 'Pending',
                                missions:
                                {
                                    buy:
                                    [
                                        {
                                            missionID: 0,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Invest 50 gamecoins to buy your first house.',
                                                amount: 50
                                            }
                                        },
                                        {
                                            missionID: 1,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Invest 60 gamecoins to buy your first house.',
                                                amount: 60
                                            }
                                        },
                                        {
                                            missionID: 2,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Invest 70 gamecoins to buy your first house.',
                                                amount: 70
                                            }
                                        },
                                        {
                                            missionID: 3,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Invest 80 gamecoins to buy your first house.',
                                                amount: 80
                                            }
                                        },
                                        {
                                            missionID: 4,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Invest 90 gamecoins to buy your first house.',
                                                amount: 90
                                            }
                                        }
                                    ],
                                    sell: 
                                    [
                                        {
                                            missionID: 0,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Sell your first house for at least 100 gamecoins.',
                                                amount: 100
                                            }
                                        },
                                        {
                                            missionID: 1,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Sell your first house for at least 110 gamecoins.',
                                                amount: 110
                                            }
                                        },
                                        {
                                            missionID: 2,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Sell your first house for at least 120 gamecoins.',
                                                amount: 120
                                            }
                                        },
                                        {
                                            missionID: 3,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Sell your first house for at least 130 gamecoins.',
                                                amount: 130
                                            }
                                        },
                                        {
                                            missionID: 4,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Sell your first house for at least 140 gamecoins.',
                                                amount: 140
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                pillarID: 1,
                                pillarName: 'Trading',
                                pillarStatus: 'Pending',
                                missions:
                                {
                                    buy:
                                    [
                                        {
                                            missionID: 0,
                                            missionStatus: 'Pending',
                                            details: 
                                            {
                                                title: 'Invest 50 gamecoins to buy virtual stocks.',
                                                amount: 50,
                                            },
                                        },
                                        {
                                            missionID: 1,
                                            missionStatus: 'Pending',
                                            details: 
                                            {
                                                title: 'Invest 60 gamecoins to buy virtual stocks.',
                                                amount: 60,
                                            },
                                        },
                                        {
                                            missionID: 2,
                                            missionStatus: 'Pending',
                                            details: 
                                            {
                                                title: 'Invest 70 gamecoins to buy virtual stocks.',
                                                amount: 70,
                                            },
                                        },
                                        {
                                            missionID: 3,
                                            missionStatus: 'Pending',
                                            details: 
                                            {
                                                title: 'Invest 80 gamecoins to buy virtual stocks.',
                                                amount: 80,
                                            },
                                        },
                                        {
                                            missionID: 4,
                                            missionStatus: 'Pending',
                                            details: 
                                            {
                                                title: 'Invest 90 gamecoins to buy virtual stocks.',
                                                amount: 90,
                                            },
                                        },
                                    ],
                                    sell:
                                    [
                                        {
                                            missionID: 0,
                                            missionStatus: 'Pending',
                                            details: {
                                                title: 'Sell your virtual stocks for at least 100 gamecoins.',
                                                amount: 100,
                                            },
                                        },
                                        {
                                            missionID: 1,
                                            missionStatus: 'Pending',
                                            details: {
                                                title: 'Sell your virtual stocks for at least 110 gamecoins.',
                                                amount: 110,
                                            },
                                        },
                                        {
                                            missionID: 2,
                                            missionStatus: 'Pending',
                                            details: {
                                                title: 'Sell your virtual stocks for at least 120 gamecoins.',
                                                amount: 120,
                                            },
                                        },
                                        {
                                            missionID: 3,
                                            missionStatus: 'Pending',
                                            details: {
                                                title: 'Sell your virtual stocks for at least 130 gamecoins.',
                                                amount: 130,
                                            },
                                        },
                                        {
                                            missionID: 4,
                                            missionStatus: 'Pending',
                                            details: {
                                                title: 'Sell your virtual stocks for at least 140 gamecoins.',
                                                amount: 140,
                                            },
                                        },
                                    ]
                                }
                            },
                            {
                                pillarID: 2,
                                pillarName: "Entrepreneurship",
                                pillarStatus: 'Pending',
                                missions:
                                {
                                    buy:
                                    [
                                        {
                                            missionID: 0,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Upgrade your house by buying a mirror for 10 gamecoins.',
                                                amount: 10,
                                            }
                                        },
                                        {
                                            missionID: 1,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Upgrade your house by buying a carpet for 20 gamecoins.',
                                                amount: 20,
                                            }
                                        },
                                        {
                                            missionID: 2,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Upgrade your house by buying a table for 15 gamecoins.',
                                                amount: 15,
                                            }
                                        },
                                        {
                                            missionID: 3,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Upgrade your house by buying a chair for 10 gamecoins.',
                                                amount: 10,
                                            }
                                        },
                                        {
                                            missionID: 4,
                                            missionStatus: 'Pending',
                                            details:
                                            {
                                                title: 'Upgrade your house by buying an air conditioner for 30 gamecoins.',
                                                amount: 30,
                                            }
                                        },
                                    ],
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    // tileNumber: {type: Number, default: 0},
    // ownedHouseID: {type: [Number]},
    // energy: {type: Number, default: 100},
    // lfID: {type: Number, default: -1},  //currently selected LifeInsurance
    // lfBoughtAt: {type: Number, default: 1},  //LifeInsurance bought at which LEVEL; will be used to calculate 'sell insurance amt(2x)'
    // loanAgainstLF: {type: Number, default: 0},
    // level: {type: Number, default: 1},
})
const playerDetail = new mongoose.model("player_detail_table", playerDetailSchema, "player_detail_table");

module.exports = playerDetail;