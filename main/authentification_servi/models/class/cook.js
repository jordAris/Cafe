class cook {
    constructor(id, name, hire_date, commandService){
        this.id = id;
        this.name = name;
        this.hire_date= hire_date;
        this.commandService= commandService;
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

    consultValidComm(){
        let ValidCmd = [];

        this.commandService.findAll().forEach(element => {
            if (element.status == "validate") {
                ValidCmd.push(element);
            }
        });

        return ValidCmd;
    }

    validate(Id, tableID) {
        let Cmd = this.authentifService.getCmdByTable(tableID);
        if (Cmd.ID == Id && Cmd.status == "validate") {
         Cmd.status = "preparation";
         return 1;
        } else {
         console.log('an error occured');
         return 0;
        }
     }
    
    
}

module.exports = cook;