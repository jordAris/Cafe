const commandModel = require('./models/schema/Command')
const {connectToDatabase, disconnectFromDatabase} = require('./db/database')

const { v4: uuid} = require('uuid');
const mongoose = require ('mongoose');


//Méthodes pour gérer les commandes

async function createCommand(date_hour, ...items) {
    await connectToDatabase;

    const command = new commandModel({id: uuid.v4(), status: "active", date_hour, items});
    command.save()    
    await disconnectFromDatabase;
}

async function removeCommand(commandId) {
    await connectToDatabase;

    const cmd = commandModel.findByIdAndUpdate(commandId, { status: 'deleted' }, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log("Updated Command : ", docs);
        }
    });
    
    await disconnectFromDatabase;
};
    
    

async function getAllCommand() {
    await connectToDatabase;

    const all = commandModel.find({});
    return all;

    await disconnectFromDatabase;

}

async function getCommandById(id) {
    await connectToDatabase;

    const cmd = commandModel.findById(id);
    if(!cmd){
        throw new Error('Invalid command ID')
    } 
    return cmd;
  
    await disconnectFromDatabase;
  

}




async function getCommandByStatus(status) {
    await connectToDatabase;
    
    const cmd = commandModel.find({status: status});
    if(!cmd){
        throw new Error('No command found')
    } 
    return cmd;
  
    await disconnectFromDatabase;
  

}

async function getMontant(commandId){
    await connectToDatabase;

    let sum=0;
    const cmd = commandModel.findById(commandId);
    cmd.Items.forEach(item => {
        sum+=item.price;
    });
    return sum;
    await disconnectFromDatabase;
}

async function print(commandId){
    await connectToDatabase;
    
    const cmd = commandModel.findById(commandId);
    const command= [];
    cmd.Items.forEach(item => {
        command.push(item);
    });
    
    return command;

    await disconnectFromDatabase;
}

module.exports = {
    createCommand,
    removeCommand,
    getAllCommand,
    getCommandById,
    getCommandByStatus,
    getMontant,
    print,
      
  };




