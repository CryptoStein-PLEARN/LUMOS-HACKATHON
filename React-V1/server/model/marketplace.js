//Make Transaction Table
// for each item

// owner
// transfered to
// timestamp


const mongoose = require("mongoose");

const marketplaceSchema = new mongoose.Schema({
    category: {type: String, unique: true},
    details: [{
        id: {type: Number},
        name: {type: String},
        description: {type: String},
        cost: {type: Number},
        imgUri: {type: String},
        unlockLevel: {type: Number}
        // CurrentOwner:
    }]
});

marketplaceSchema.statics.upsert = async function(record){
    const filter = { category: record.category };
    const update = {
        details: record.details,
    }
    const options = { upsert: true, new: true };
    const doc = await this.findOneAndUpdate(filter, update, options);
    return doc;
}

const marketplaceDetail = new mongoose.model(
    "Marketplace_Table",
    marketplaceSchema,
    "Marketplace_Table"
)

const Record1 = {
    category: "characters",
    details: [
        {
            id: 0,
            name: "Tony",
            description: "Lorem Ipsum",
            cost: 10,
            imgUri: "https://i.imgur.com/wWzXpzE.png",
            unlockLevel: 1,
        },
        {
            id: 1,
            name: "Steve",
            description: "Lorem Ipsum",
            cost: 20,
            imgUri: "https://i.imgur.com/wWzXpzE.png",
            unlockLevel: 2,
        },
        {
            id: 2,
            name: "Bruce",
            description: "Lorem Ipsum",
            cost: 30,
            imgUri: "https://i.imgur.com/wWzXpzE.png",
            unlockLevel: 3,
        }
    ]
}
marketplaceDetail.upsert(Record1);

const Record2 = {
    category: "Dice",
    details: [
        {
            id: 0,
            name: "Dice 1",
            description: "Lorem Ipsum",
            cost: 10,
            imgUri: "https://i.imgur.com/wWzXpzE.png"
        }
    ]
}
marketplaceDetail.upsert(Record2);

module.exports = marketplaceDetail;