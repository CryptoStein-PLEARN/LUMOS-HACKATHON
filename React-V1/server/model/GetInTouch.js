const mongoose = require("mongoose");

const getInTouchSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    phoneNumber: {type: String},
    subject: {type: String},
    description: {type: String},
    datePosted: { type: Date, default: Date.now },
});

const getInTouchDetails = new mongoose.model("Get_In_Touch_Table", getInTouchSchema, "Get_In_Touch_Table");

module.exports = getInTouchDetails;