class Table {
    constructor(id, tab_num, commandService, menuService){
        this.id = id;
        this.tab_num = tab_num;
        this.commandService= commandService;
        this.command = {items: [], Qté: 0};
        this.menuService = menuService;
    }
}
module.exports = Table;