const Command = require('./models/class/command');
const uuid = require('uuid');
const mongoose = require ('mongoose');
const { Db } = require('mongodb');

class commandService{
    constructor() {
        this.command = []; 
    }

    createCommand(id, date_hour, ...items) {
        const command = new Command(uuid.v4(), date_hour, ...items);
        command.status= "actif";
        Command.save();
        return command
    }
    removeCommand(id) {
        const index = Db.findById(id);
        if (index == id){
            command.status = "deleted";
            Command.update();
            return command
        }
    }
}
    

