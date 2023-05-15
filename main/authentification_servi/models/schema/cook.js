const mongoose = require('mongoose') 

const CookSchema = new mongoose.Schema({
    id: String,
    name: String,
    hireDate: {
        type: Date,
        default: Date.now,
    },
})

const CookModel = mongoose.model('cook', CookSchema);

module.exports = CookModel;