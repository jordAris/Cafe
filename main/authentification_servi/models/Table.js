const mongoose = require('mongoose')

const TableSchema = new mongoose.Schema({
    id: String,
    tabNum: Number,
    command: {
        items: [{
            itemsId: String,
            name: String,
            price: Number,
        }],
        Qté: Number,
    }
});

const TableModel = mongoose.model('Table', TableSchema);

    // addItem(itemId, quantity) {
    //     if (this.command) {
    //         this.commandService.addItemToComm(this.command, itemId, quantity);
    //         console.log(`Item added to command: ${itemId}`)
    //     } else {
    //         console.log('error occurred during the creation of the command')
    //     }
    // }

    rmvItem(itemId) {
        if (this.command) {
            return this.commandService.getMontant(this.command)
        } else { 
            console.log("error occurred");
        }
    }

    consult_menuType() {
        let type = this.menuService.getType();
        
        return type;
    }

    consult_menu(type) {
        let menu = [];

        if (type == "petit dej"){
            menu = this.menuService.getMenusItem(type);
        } else {
            if (type == "dej") {
                menu = this.menuService.getMenusItem(type);
            } else {
                if (type == "diner") {
                    menu = this.menuService.getMenusItem(type);
                }
            }
        }
        return menu;
    }


module.exports = Table;

module.exports = TableModel;

