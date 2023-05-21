const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
    id: String,
    date: Date,
    montant: Number,
    type : String
})

const transactionModel = mongoose.model('transaction', transactionSchema);

module.exports = transactionModel;