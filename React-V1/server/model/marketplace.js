const mongoose = require("mongoose");

const marketplaceSchema = new mongoose.Schema({
    category: {type: String, unique: true},
    details: [{
        id: {type: Number},
        name: {type: String},
        description: {type: String},
        cost: {type: Number},
        imgUri: {type: String},
        unlockLevel: {type: Number},
        itemAvailable: {type: Boolean, default: true},  //  false - Not available(sold); true - Available
        currentOwner: {type: String, default: ""},
        transactions: [{
            buyerAddress: { type: String },
            sellerAddress: { type: String },
            cost: { type: Number },
            timestamp: { type: Date, default: Date.now }
        }]
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
            id: 2,
            name: "Steve",
            description: "Lorem Ipsum",
            cost: 20,
            imgUri: "https://ik.imagekit.io/temporary/Characters/Steve.jpeg?updatedAt=1685704483948",
            unlockLevel: 2,
        },

        {
            id: 3,
            name: "Bruce",
            description: "Lorem Ipsum",
            cost: 30,
            imgUri: "https://ik.imagekit.io/temporary/Characters/Bruce.jpeg?updatedAt=1685704484347",
            unlockLevel: 3,
        },

        {
            id: 4,
            name: "Thor",
            description: "Lorem Ipsum",
            cost: 40,
            imgUri: "https://ik.imagekit.io/temporary/Characters/Thor.jpeg?updatedAt=1685704484293",
            unlockLevel: 4,
        },

        {
            id: 5,
            name: "Rhodey",
            description: "Lorem Ipsum",
            cost: 50,
            imgUri: "https://ik.imagekit.io/temporary/Characters/Rhodey.jpeg?updatedAt=1685704484317",
            unlockLevel: 5,
        },

        {
            id: 6,
            name: "Natasha",
            description: "Lorem Ipsum",
            cost: 70,
            imgUri: "https://ik.imagekit.io/temporary/Characters/Natasha.jpeg?updatedAt=1685704484706",
            unlockLevel: 7,
        },

        {
            id: 7,
            name: "Wanda",
            description: "Lorem Ipsum",
            cost: 70,
            imgUri: "https://ik.imagekit.io/temporary/Characters/Wanda.jpeg?updatedAt=1685704483325",
            unlockLevel: 7,
        },

        {
            id: 8,
            name: "Jane",
            description: "Lorem Ipsum",
            cost: 70,
            imgUri: "https://ik.imagekit.io/temporary/Characters/Jane.jpeg?updatedAt=1685704483456",
            unlockLevel: 6,
        },

        {
            id: 9,
            name: "Peggy",
            description: "Lorem Ipsum",
            cost: 70,
            imgUri: "https://ik.imagekit.io/temporary/Characters/Peggy.jpeg?updatedAt=1685704484891",
            unlockLevel: 7,
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
            imgUri: "https://ik.imagekit.io/temporary/RnB.avif?updatedAt=1685704813304"
        }
    ]
}
marketplaceDetail.upsert(Record2);

module.exports = marketplaceDetail;