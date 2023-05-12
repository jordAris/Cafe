class command {
    constructor(id, date_hour, table_num, menuService, status){
        this.id=id;
        this.date_hour=date_hour;
        this.table_num=table_num;
        this.menuService = menuService;
        this.items = [];
        this.status = status;
    }

    get id(){
        return this.id;
    }

    get date_hour(){
        return this.date_hour;
    }

    get table_num(){
        return this.table_num;
    }

    get items(){
        return this.items;
    }

    get status() {
        return this.status;
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