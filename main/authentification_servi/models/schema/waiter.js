const mongoose = require('mongoose') 

const WaiterSchema = new mongoose.Schema({
    id: String,
    name: String,
    hireDate: {
        type: Date,
        default: Date.now,
    },
})

const WaiterModel = mongoose.model('waiter', CookSchema);

module.exports = WaiterModel;