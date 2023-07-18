const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
    category: {type: String},
    sell: [{
        id: {type: Number},     //ItemID
        started: {type: Boolean, default: false},
        ended: {type: Boolean, default: true},
        basePrice: {type: Number},
        timestamp: {type: Date, default: Date.now},
        currentOwner: {type: String},
        sales: [{
            saleID: {type: Number, default: 0},
            sale: {
                customerAddress: {type: String},
                timestamp: {type: Date, default: Date.now},
                currency: {type: String},
                USDValue: {type: Number},
            }
        }]
    }]
})

const saleDetail = new mongoose.model(
    "Sale_Table",
    saleSchema,
    "Sale_Table"
)

module.exports = saleDetail;