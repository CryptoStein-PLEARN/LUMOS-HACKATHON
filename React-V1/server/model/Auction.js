const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
    category: {type: String},
    auction: [{
        id: {type: Number}, //ItemID
        started: {type: Boolean, default: false},
        ended: {type: Boolean, default: true},
        endTime: {type: Date},
        basePrice: {type: Number},
        timestamp: {type: Date, default: Date.now},
        currentOwner: {type: String},
        bids:[{
            bidderAddress: {type: String},
            bidAmount: {type: Number},
            timestamp: {type: Date, default: Date.now},
            currency: {type: String},
            USDValue: {type: Number},
        }]
    }]
})

const auctionDetail = new mongoose.model(
    "Auction_Table",
    auctionSchema,
    "Auction_Table"
)

module.exports = auctionDetail;