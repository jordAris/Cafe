const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const QRCode = require('qrcode')
const moment = require('moment')
const {connectToDatabase, disconnectFromDatabase} = require('./db/database')
const { v4: uuidv4 } = require('uuid');
const TableModel = require('./models/Table');
const managerModel = require('./models/manager')
const WaiterModel = require('./models/waiter')
const CookModel = require('./models/cook')
const mongoose = require('mongoose')


const config = require('./config/Config')

//authentifService.js

async function managerSignup(name, email, password){

    await connectToDatabase;

    const managerID = uuidv4();
    const manager = new managerModel({
        managerID,
        name,
        email,
        password,
    })

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(manager.password, salt);
    manager.password = hash;

    await manager.save();

    return { message: 'Manager created successfully' };

    await disconnectFromDatabase;
}

async function WaiterSignup(name, email, password){

    await connectToDatabase;

    const WaiterID = uuidv4();
    const waiter = new WaiterModel({
        WaiterID,
        name,
        email,
        password,
    })

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(waiter.password, salt);
    waiter.password = hash;

    await waiter.save();

    return { message: 'Waiter created successfully' };

    await disconnectFromDatabase;
}

async function CookSignup(name, email, password){

    await connectToDatabase;

    const CookID = uuidv4();
    const Cook = new CookModel({
        CookID,
        name,
        email,
        password,
    })

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(Cook.password, salt);
    Cook.password = hash;

    await Cook.save();

    return { message: 'Cook created successfully' };

    await disconnectFromDatabase;
}

async function managerLogin(email, password) {
    const manager = await managerModel.findOne({email})
    if (!manager) {
        throw new Error('Invalid login credentials')
    }

    const isMatch = await bcrypt.compare(password, manager.password);
    if(!isMatch){
        throw new Error('Invalid login credentials')
    }

    const token = jwt.sign({id: manager.id}, config.jwt.secret, { expiresIn: config.jwt.expiresIn})
    return { token }
}

async function costumerLogin(tableID){
    const tabID = uuidv4();

    return {tableID: tabID};
}


async function waiterLogin(){
    const otp = Math.floor(100000+Math.random()*900000)

    return {otp}
}

async function CookLogin(){
    const otp = Math.floor(100000+Math.random()*900000)

    return {otp}
}

async function CustomerSignup(){
    try{
        const tableID = uuidv4();

        const qrCode = await generateQRCode(tableID);

        return { success: true, message: 'Signup success', qrCode};
    } catch(error) {
        console.error(error)
        return {success: false, message: 'an error occurred'}
    }
}

async function generateQRCode(data){
    try{
        const options = {
            type: 'image/png',
            quality: 0.9,
            margin: 1,
            width: 300,
            height: 300
        }
        const qrCode = await QRCode.toDataURL(data, options);
        return qrCode;

    } catch(error){
        console.error(error)
        throw error;
    }
}

// userService

async function passerCommand(tabID) {

    await connectToDatabase;

    const Command = new commandService.createCommeand(uuidv4());
    Command.status = 'active'

    const table = TableModel.findById(tabID);

    if (table) {
        table.command=Command;
        Command.status = 'intention'
        console.log('Your command has been taken in charge')
        await table.updateOne();
    } else {
        console.log("an error occurred with the identification of your table")
    }

    return [tabID, Command.id]

    await disconnectFromDatabase;
}

async function addItemToCmd(CmdID, itemID, TabID, quantity){
    
    await connectToDatabase;

    const Command = command.findById(CmdID);
    const table = TableModel.findById(TabID);

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
    const table = TableModel.findById(TabID);

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
    let table = TableModel.findById(tableID);
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
    let table = TableModel.findById(tableID);
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
    let table = TableModel.findById(tableID);
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
    let table = TableModel.findById(tabID)
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

module.exports = {
    passerCommand,
    addItemToCmd,
    remvItemToCMd,
    ConsultMenu,
    consultValComm,
    prepComm,
    validCmd,
    validCmdServ,
    consultGloby,
    establishCompta,
    addItemyoMenu,
    consultEmployee,
    establishBill,
    addIngredient,
    rmvIngredient
  };