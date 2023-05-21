const mongoose = require('mongoose');

const commandSchema = new mongoose.Schema({
    commandId: String,
    tableId: String,
    Items: [{
        itemId: String,
        name: String,
        price: String,
        menuType: String,
        status: String,
    }] 
})

const commandModel = mongoose.model('commands', commandSchema);
  
// Create collection of Model
commandModel.createCollection().then(function (collection) {
    console.log('Collection is created!');
});



module.exports = commandModel;
