import express from "express";

class waiter {
    constructor(id, name, hire_date){
        this.id = id;
        this.name = name;
        this.hire_date= hire_date
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

    validate() {
        let check = true;
        return check;
    }
    
    
}
