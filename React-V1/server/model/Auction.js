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
        minBidAmount: {type: Number},
        bids:[{
            auctionID: {type: Number, default: 0},
            bid:[{
                bidderAddress: {type: String},
                bidAmount: {type: Number},
                timestamp: {type: Date, default: Date.now},
                currency: {type: String},
                USDValue: {type: Number},
            }]
        }]
    }]
})

const auctionDetail = new mongoose.model(
    "Auction_Table",
    auctionSchema,
    "Auction_Table"
)

module.exports = auctionDetail;