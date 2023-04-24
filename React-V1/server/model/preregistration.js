const mongoose = require("mongoose");

const preRegistrationSchema = mongoose.Schema({
    email: {type: String},
});

const preRegistrationDetail = new mongoose.model("preregistration_table", preRegistrationSchema, "preregistration_table");

module.exports = preRegistrationDetail;