const mongoose = require('mongoose');

// Définition du schéma de RapportMensuel
const rapportMensuelSchema = new mongoose.Schema({
  mois: Number,
  annee: Number,
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'transaction' }]
});

// Création du modèle RapportMensuel basé sur le schéma
const rapportMensuel = mongoose.model('rapportMensuel', rapportMensuelSchema);

module.exports = rapportMensuel;