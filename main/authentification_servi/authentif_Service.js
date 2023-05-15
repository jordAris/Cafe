const command = require('../command_servi/models/class/command');
const {connectToDatabase, disconnectFromDatabase} = require('./db/database')
const uuid = require('uuid');
const mongoose = require('mongoose');
const TableModel = require('./models/schema/Table');

async function passerCommand(tabID) {

    await connectToDatabase;

    const Command = new command(uuid.v4());
    Command.status = 'active'

    const table = TableModel.findById(tabID);

    if (table) {
        table.command=Command;
        Command.status = 'intention'
        console.log('Your command has been taken in charge')
        table.updateOne();
    } else {
        console.log("an error occurred with the identification of your table")
    }

    await Command.save();


    return [tabID, Command.id]

    await disconnectFromDatabase;
}

async function addItemToCmd(CmdID, itemID, TabID, quantity){
    
    await connectToDatabase;

    const Command = command.findById(CmdID);
    const table = Table.findById(TabID);

    if (Command = table.command) {
        table.command.items.push({itemID, quantity});
        Command.items.push({itemID, quantity})
        console.log('Item added to command')
        return 1;
    } else {
        console.log('Error occurred during the process')
        return 0;
    }
    await disconnectFromDatabase;
}

async function remvItemToCMd(CmdID, itemID, TabID) {
    await connectToDatabase;

    const Command = command.findById(CmdID);
    const table = Table.findById(TabID);

    if (Command == table.command) {
        const item = command.items.getItemsByID(itemID);
        item.quantity=0;
    } else {
        console.log('error occurred')
    }

    await disconnectFromDatabase;
}

async function ConsultMenu(menuType){
    await connectToDatabase;
    let Menu = []

    MenuService.getItemsByMenu(menuType).forEach(menus => {
        Menu.push(menus)
    })
    
    return Menu;

    await disconnectFromDatabase;
}

async function consultValComm() {
    await connectToDatabase;

    const ValCmd = []

   CommandService.getCommandByState("validate").forEach(cmd => {
    ValCmd.push(cmd)
   })

    return ValCmd;

    await disconnectFromDatabase;
}

async function prepComm(CmdID, tableID) {
    await connectToDatabase;

    let Command = command.getCommandById(CmdID);
    let table = authentifService.getTableByID(tableID);
    if (Command == table.command && Command.status == "validate") {
        Command.status = "preparation";
        table.command.status = Command.status;
        return 1;
    } else {
        console.log('error occurred')
        return 0;
    }

    await disconnectFromDatabase;
}

async function validCmd(CmdId, tableID) {
    await connectToDatabase;

    let Command = command.getCommandById(CmdId);
    let table = authentifService.getTableByID(tableID);
    if (Command == table.command && Command.status == "Intention") {
        Command.status = "validate";
        table.command.status = Command.status;
        return 1;
    } else {
        console.log('error occurred')
        return 0;
    }

    await disconnectFromDatabase;
}


async function validCmdServ(CmdId, tableID) {
    await connectToDatabase;

    let Command = command.getCommandById(CmdId);
    let table = authentifService.getTableByID(tableID);
    if (Command == table.command && Command.status == "Prepared") {
        Command.status = "served";
        table.command.status = Command.status;
        return 1;
    } else {
        console.log('error occurred')
        return 0;
    }

    await disconnectFromDatabase;
}

async function consultGloby() {
    await connectToDatabase;

    const Cmd = []

    CommandService.getCommands().forEach(command => {
        Cmd.push(command)
    })

    return Cmd;

    await disconnectFromDatabase;
}

async function establishCompta() {
    let Income = 0;
    let Outcome = 0

    let Ingredients = []
    let Balance = []

    MenuService.getAllIngredient().forEach(ingredient => {
        Ingredients.push(ingredient)
        Income += ingredient.cost
    })

    Balance.push(Income)

    commandService.getAllCommand().forEach(Cmd => {
        if(Cmd.status == "paid") {
            Outcome += Cmd.getMontant()
        }
    })

    Balance.push(Outcome);

    return Balance;
}

async function addItemyoMenu(ItemID, type) {
    await connectToDatabase;

    let menuType = MenuService.getType(type);

    if(menuType) {
        let Item = MenuService.getItemById(ItemID);
        Item.menuType = null
    } else {
        console.log('error occurred')
    }

    await disconnectFromDatabase
}

async function consultEmployee() {

    await connectToDatabase;

    let employees = []
    AuthentifService.getUser().forEach(employee => {
        if ((employee.type == "serveur") || (employee.type == "cook")) {
            employees.push(employee);
        }
    })
    
    await disconnectFromDatabase;

    return employees;
}

async function establishBill (cmdID, tabID){
    await connectToDatabase;

    let cmd = commandService.getCommandById(cmdID)
    let table = AuthentifService.getTableById(tabID)
    let Items = []
    if (cmd && table.command) {
        cmd.Items.forEach(elements => {
            Items.push(MenuService.getItemById(elements))
        })
        let Bill = {
            Plate: Items,
            Total: cmd.getMontant()
        }

        return Bill
    } else {
    console.log('error occurred')
    }

    await disconnectFromDatabase;

}

async function addIngredient(Type, quantity, description){

    await connectToDatabase;
    if (Type == MenuService.getIngredientByTYpe(Type)){
        MenuService.addIngredient(Type, quantity, description);
        console.log('Ingredient update')
    } else {
        MenuService.createIngredient(Type, quantity, description);
        console.log('Ingredient saved')
    }

    await disconnectFromDatabase;
}

async function rmvIngredient(IngredientID){
    await connectToDatabase;

    let Ingredient = MenuService.getIngredientById(IngredientID);

    Ingredient.menuType = null;

    await disconnectFromDatabase;
}