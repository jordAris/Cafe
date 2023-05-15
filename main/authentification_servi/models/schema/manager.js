const mongoose = require('mongoose')

const managerSchema = mongoose.Schema({
    id: String,
    name: String,
    password: String,
    informationBill: [{
        Info: String,
    }],
})

const managerModel = mongoose.model('manager', managerSchema);

module.exports = managerModel;