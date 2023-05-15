const mongoose = require('mongoose')

const TableSchema = new mongoose.Schema({
    id: String,
    tabNum: Number,
    command: {
        items: [{
            itemsId: String,
            name: String,
            price: Number,
        }],
        Qté: Number,
    }
});

const TableModel = mongoose.model('Table', TableSchema);

module.exports = TableModel;