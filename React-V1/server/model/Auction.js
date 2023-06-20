const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
    category: {type: String},
    auction: [{
        id: {type: Number}, //ItemID
        started: {type: Boolean, default: false},
        ended: {type: Boolean, default: true},
        duration: {type: Number, default: 0},
        timer: {type: Number},
        basePrice: {type: Number},
        timestamp: {type: Date, default: Date.now},
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