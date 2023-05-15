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

const Commands = mongoose.model('Commands', CommandSchema);
  
// Create collection of Model
Commands.createCollection().then(function (collection) {
    console.log('Collection is created!');
});



module.exports = mongoose.model('Commands', CommandSchema);
