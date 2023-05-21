const mongoose = require('mongoose')

const managerSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    password: String,
    informationBill: [{
        Info: String,
    }],
})

const managerModel = mongoose.model('manager', managerSchema);

module.exports = managerModel;