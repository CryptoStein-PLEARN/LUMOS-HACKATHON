const mongoose = require("mongoose");

//Table for saving energy details;
const lfDetailSchema = new mongoose.Schema({
    lfID: {type: Number, unique: true},
    cost: {type: Number},
    loanAgainstLF: {type: Number, default: 0},
});

lfDetailSchema.statics.upsert = async function (record) {
    await this.findOneAndUpdate({ lfID: record.lfID }, record, {
        upsert: true,
        new: true,
    });
};

const lfDetail = new mongoose.model("LifeInsurance_detail_table", lfDetailSchema, "LifeInsurance_detail_table");

module.exports = lfDetail;