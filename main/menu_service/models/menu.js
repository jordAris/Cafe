const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
    id: String,
    Type: String,
    Status: String,
    items_concern: [{id: String,
        name: String,
        price: Number
        }],
    
})

const menuModel = mongoose.model('menu', menuSchema);

module.exports = menuModel;