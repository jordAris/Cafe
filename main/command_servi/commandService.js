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
        const cmd = Command.findById(id, function (err, docs) {
            if (err){
                console.log(err);
            }
            else{
                cmd = docs;
                console.log("Result : ", cmd);
                cmd.update({status:"deleted"}, function (err, result) {
                    if (err){
                        console.log(err)
                    }else{
                        console.log("Result :", result) 
                    }
                });
                return cmd
            };
        });
        
        
    }
}

    

