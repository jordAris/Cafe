const Command = require('./models/class/command');
const Commands = require('./models/schema/command');

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
        Commands
        .save()
        .then((doc) => {
            console.log(doc);
        })
        .catch((err) => {
            console.error(err);
        });
        return command
    }

    removeCommand(id) {
        const cmd = Commands.findByIdAndUpdate(id, { status: 'deleted' }, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Command : ", docs);
            }
        });
        return cmd
    };
        
        
    
    addCommand(id) {
        

    }

    getCommandById(id) {
        const filter = {id};
        const cmd = Commands.find(filter);

    }

    findAllCommand() {
        const filter = {};
        const all = Commands.find(filter);

    }
}

    

