const command = require('../command_servi/models/command');
const {connectToDatabase, disconnectFromDatabase} = require('./db/database')
const uuid = require('uuid');
const Table = require('./models/Table');

async function passerCommand(tabID, ...itemsID) {

    await connectToDatabase;

    const Command = new command(uuid.v4(), tabID, itemsID);
    command.status = 'active'

    const table = Table.findById(tabID, () => {
        table.command = Command;
    })
    
    if (table) {
        command.status = 'intention'
        console.log('Your command has been taken in charge')
    } else {
        console.log("an error occurred with the identification of your table")
    }


    return [tabID, Command.id]

    await disconnectFromDatabase;
}

async function addItemToCmd(CmdID, itemID, TabID, quantity){
    
    await connectToDatabase;

    const Command = command.findById(CmdID);
    const table = Table.findById(TabID);

    if (Command = table.command) {
        table.command.items.push(itemID);
        table.command.items.quantity = quantity;
        console.log('Item added to command')
        return 1;
    } else {
        console.log('Error occurred during the process')
        return 0;
    }
    await disconnectFromDatabase;
}

async function remvItemToCMd()