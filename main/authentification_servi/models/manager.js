class Manager{
    constructor(id, name, password, ...information_bill){
        this.id = id;
        this.name=name;
        this.password = password;
        this.information_bill = [...information_bill]
    }

    get id(){
        return this.id;
    }

    get name(){
        return this.name;
    }

    get password(){
        return this.password;
    }

    get information_bill(){
        return this.information_bill
    }

    
}