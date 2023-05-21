const mongoose = require('mongoose')

const itemsSchema = mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    description: String,
    menuType: String,
    ingredients: [{
        id: String,
        price: Number,
        description: String,
        IsbasicIngredient: Boolean,
        }],
})

const itemsModel = mongoose.model('items', itemsSchema);

module.exports = itemsModel;