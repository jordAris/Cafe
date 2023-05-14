const mongoose = require('mongoose');

const CommandSchema = new mongoose.Schema({
    commandId: String,
    tableId: String,
    Items: [{
        itemId: String,
        name: String,
        price: String,
    }] 
})

const Command = mongoose.model('Command', CommandSchema);
  
// Create collection of Model
Command.createCollection().then(function (collection) {
    console.log('Collection is created!');
});