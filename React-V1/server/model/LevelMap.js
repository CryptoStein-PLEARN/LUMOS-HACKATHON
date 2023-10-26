const mongoose = require("mongoose");

const LevelMapSchema = new mongoose.Schema({
    countries: [{
        countryID: { type: Number },
        countryName: { type: String },
        cities: [{
            cityID: { type: Number },
            cityName: { type: String },
            pillars: [{
                pillarID: { type: Number },
                pillarName: { type: String },
                missions: {
                    buy: 
                    [
                        {
                            missionID: { type: Number },
                            // missionStatus: { type: String }, //Accepted || Rejected
                            details: 
                            {
                                title: { type: String },
                                amount: { type: Number },    //Buying Cost
                            },
                        }
                    ],
                    sell: 
                    [
                        {
                            missionID: { type: Number },
                            // missionStatus: { type: String }, //Accepted || Rejected
                            details:
                            {
                                title: { type: String },
                                amount: { type: Number },   //Selling Price
                            },
                        }
                    ]
                },
                // pillarStatus: { type: String }  //Pending || Completed
            }],
            // cityStatus : { type: String }   //Pending || Completed
        }],
        // countryStatus : { type: String }    //Pending || Completed
    }]
});

const LevelMapDetail = new mongoose.model(
    "LevelMap_Table",
    LevelMapSchema,
    "LevelMap_Table"
)

const records = [
    {
        countries: [
            {
                countryID: 0,
                countryName: 'Sweden',
                cities: [
                    {
                        cityID: 0,
                        cityName: 'Stockholm',
                        pillars: [
                            {
                                pillarID: 0,
                                pillarName: 'RealEstate',
                                missions: {
                                    buy: [
                                        {
                                            missionID: 0,
                                            details: {
                                                title: 'Invest 50 gamecoins to buy your first house.',
                                                amount: 50
                                            }
                                        },
                                        {
                                            missionID: 1,
                                            details: {
                                                title: 'Invest 60 gamecoins to buy your first house.',
                                                amount: 60
                                            }
                                        },
                                        {
                                            missionID: 2,
                                            details: {
                                                title: 'Invest 70 gamecoins to buy your first house.',
                                                amount: 70
                                            }
                                        },
                                        {
                                            missionID: 3,
                                            details: {
                                                title: 'Invest 80 gamecoins to buy your first house.',
                                                amount: 80
                                            }
                                        },
                                        {
                                            missionID: 4,
                                            details: {
                                                title: 'Invest 90 gamecoins to buy your first house.',
                                                amount: 90
                                            }
                                        }
                                    ],
                                    sell: [
                                        {
                                            missionID: 0,
                                            details: {
                                                title: 'Sell your first house for at least 100 gamecoins.',
                                                amount: 100
                                            }
                                        },
                                        {
                                            missionID: 1,
                                            details: {
                                                title: 'Sell your first house for at least 110 gamecoins.',
                                                amount: 110
                                            }
                                        },
                                        {
                                            missionID: 2,
                                            details: {
                                                title: 'Sell your first house for at least 120 gamecoins.',
                                                amount: 120
                                            }
                                        },
                                        {
                                            missionID: 3,
                                            details: {
                                                title: 'Sell your first house for at least 130 gamecoins.',
                                                amount: 130
                                            }
                                        },
                                        {
                                            missionID: 4,
                                            details: {
                                                title: 'Sell your first house for at least 140 gamecoins.',
                                                amount: 140
                                            }
                                        }
                                    ]
                                },
                            },
                            {
                                pillarID: 1,
                                pillarName: 'Trading',
                                missions: {
                                    buy: [
                                        {
                                            missionID: 0,
                                            details: {
                                                title: 'Invest 50 gamecoins to buy virtual stocks.',
                                                amount: 50
                                            }
                                        },
                                        {
                                            missionID: 1,
                                            details: {
                                                title: 'Invest 60 gamecoins to buy virtual stocks.',
                                                amount: 60
                                            }
                                        },
                                        {
                                            missionID: 2,
                                            details: {
                                                title: 'Invest 70 gamecoins to buy virtual stocks.',
                                                amount: 70
                                            }
                                        },
                                        {
                                            missionID: 3,
                                            details: {
                                                title: 'Invest 80 gamecoins to buy virtual stocks.',
                                                amount: 80
                                            }
                                        },
                                        {
                                            missionID: 4,
                                            details: {
                                                title: 'Invest 90 gamecoins to buy virtual stocks.',
                                                amount: 90
                                            }
                                        }
                                    ],
                                    sell: [
                                        {
                                            missionID: 0,
                                            details: {
                                                title: 'Sell your virtual stocks for at least 100 gamecoins.',
                                                amount: 100
                                            }
                                        },
                                        {
                                            missionID: 1,
                                            details: {
                                                title: 'Sell your virtual stocks for at least 110 gamecoins.',
                                                amount: 110
                                            }
                                        },
                                        {
                                            missionID: 2,
                                            details: {
                                                title: 'Sell your virtual stocks for at least 120 gamecoins.',
                                                amount: 120
                                            }
                                        },
                                        {
                                            missionID: 3,
                                            details: {
                                                title: 'Sell your virtual stocks for at least 130 gamecoins.',
                                                amount: 130
                                            }
                                        },
                                        {
                                            missionID: 4,
                                            details: {
                                                title: 'Sell your virtual stock for at least 140 gamecoins.',
                                                amount: 140
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

async function upsertRecords(records) {
    try {
      for (const record of records) {
        // Check if a record with the same countryID exists
        const existingRecord = await LevelMapDetail.findOne({ "countries.countryID": record.countries[0].countryID });
  
        if (existingRecord) {
          // Update the existing record with the new data
          await LevelMapDetail.findOneAndUpdate(
            { "countries.countryID": record.countries[0].countryID },
            { $set: record },
          );
          console.log("Record updated successfully");
        } else {
          // Insert a new record
          await LevelMapDetail.create(record);
          console.log("Record inserted successfully");
        }
      }
    } catch (error) {
      console.error("Error inserting or updating records:", error);
    }
  }

upsertRecords(records);


module.exports = LevelMapDetail;