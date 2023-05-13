class Table {
    constructor(id, tab_num, commandService, menuService){
        this.id = id;
        this.tab_num = tab_num;
        this.commandService= commandService;
        this.command = null;
        this.menuService = menuService;
    }

    get id(){
        return this.id;
    }

    get tab_num(){
        return this.tab_num;
    }

    makeCommand() {
        this.command = this.commandService.createCommand();
        this.command.state = "intention";
    }

    addItem(itemId, quantity) {
        if (this.command) {
            this.commandService.addItemToComm(this.command, itemId, quantity);
            console.log(`Item added to command: ${itemId}`)
        } else {
            console.log('error occurred during the creation of the command')
        }
    }

    rmvItem(itemId) {
        if (this.command) {
            return this.commandService.getMontant(this.command)
        } else {
            console.log("error occurred")
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
}