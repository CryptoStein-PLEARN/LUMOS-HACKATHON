const mongoose = require("mongoose");

const bankLoanSchema = new mongoose.Schema({
    loanID: {type: Number, unique: true},
    gameCoins: {type: Number},
    interestRate: {type: Number},
    timeToPay: {type: Number}   //how many level window to repay the loan
});

bankLoanSchema.statics.upsert = async function (record){
    await this.findOneAndUpdate({ loanID: record.loanID }, record, {
        upsert: true,
        new: true,
    });
}

const bankLoan = new mongoose.model("bank_loan_table",bankLoanSchema,"bank_loan_table");


const bankDepositSchema = new mongoose.Schema({
    depositID: {type: Number},
    time: {type: Number},   //minutes
    interestRate: {type: Number},
});

bankDepositSchema.statics.upsert = async function (record){
    await this.findOneAndUpdate({ depositID: record.depositID }, record, {
        upsert: true,
        new: true,
    });
}

const bankDeposit = new mongoose.model("bank_deposit_table",bankDepositSchema,"bank_deposit_table")

module.exports = {bankLoan, bankDeposit};