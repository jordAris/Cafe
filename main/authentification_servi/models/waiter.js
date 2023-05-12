import express from "express";

class waiter {
    constructor(id, name, hire_date, authentifService){
        this.id = id;
        this.name = name;
        this.hire_date= hire_date
        this.authentifService = authentifService;
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

    validate(Id, tableID) {
       let Cmd = this.authentifService.getCmdByTable(tableID);
       if (Cmd.ID = Id) {
        Cmd.status = "validate";
        return 1;
       } else {
        console.log('an error occured');
        return 0;
       }
    }

    validateServ(Id, tableID) {
        let Cmd = this.authentifService.getCmdByTable(tableID);
        if (Cmd.ID = Id && Cmd.status) {
            Cmd.status = "served";
            return 1;
        } else {
            console.log('an error occured');
            return 0;
        }
    }
    
    
}
