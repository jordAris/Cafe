const mongoose = require('mongoose')

const ingredientsSchema = mongoose.Schema({
    id: String,
    price: Number,
    description: String,
    status: String,
    quantity: String,
    IsbasicIngredient: Boolean,
})

const ingredientsModel = mongoose.model('ingredients', ingredientsSchema);

module.exports = ingredientsModel;