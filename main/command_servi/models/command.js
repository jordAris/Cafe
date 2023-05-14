class command {
    constructor(id, tableID, ...items){
        this.id=id;
        this.date_hour= new Date()
        this.tableID=tableID;
        this.items = [...items];
        this.status = 'inactive';
    }

    getMontant(){
        let sum=0;
        this.items.forEach(items => {
            sum+= items.price * items.quantity;
        });
        return sum;
    }

    print(){
        this.items.forEach(item => {
            console.log(this.items.name, this.items.price, this.items.description);
            
        });
    }
}

module.exports = command;