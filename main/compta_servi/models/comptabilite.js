const mongoose = require('mongoose')

const comptabiliteSchema = mongoose.Schema({ transactions: [{type: mongoose.Schema.Types.ObjectId, ref: 'transaction'}]
})

const comptabiliteModel = mongoose.model('comptabilite', comptabiliteSchema);

module.exports = comptabiliteModel;