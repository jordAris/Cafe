const {connectToDatabase, disconnectFromDatabase} = require('./db/database')
const { v4: uuidv4 } = require('uuid');
const comptabiliteModel = require('./models/comptabilite');
const rapportMensuelModel = require('./models/rapportMensuel')
const transactionModel = require('./models/transaction')
const mongoose = require('mongoose')



async function creerTransaction(date, montant, type){
    await connectToDatabase;
    const IngrdID = uuidv4(); 
    const transaction = new transactionModel({IngrdID, date, montant, type})
    transaction.save();

    await disconnectFromDatabase; 
}
async function obtenirRapportMensuel(mois, annee) {
    await connectToDatabase;
    try {
      const comptabiliteService = new comptabiliteModel();
      const rapport = comptabiliteModel.obtenirRapportMensuel(mois, annee);
      return rapport;
    } catch (erreur) {
      throw new Error("Une erreur est survenue lors de la récupération du rapport mensuel");
    }
    await disconnectFromDatabase;
  }
