import express from "express";

class cook {
    constructor(id, name, hire_date, commandService){
        this.id = id;
        this.name = name;
        this.hire_date= hire_date;
        this.commandService= commandService;
        this.validCmd = [];
    }

    get id() {
        return this.id;
    }

    get name(){
        return this.name;
    }

    get hire_date() {
        return this.hire_date;
    }

    consultVldComm(){
        
    }

    validate() {
        let check = true;
        return check;
    }
    
    
}
