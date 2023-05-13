class Manager{
    constructor(id, name, password, commandService, comptaService, menuService, authentifService, paymentService, ...information_bill){
        this.id = id;
        this.name=name;
        this.password = password;
        this.information_bill = [...information_bill]
        this.commandService = commandService;
        this.comptaService = comptaService;
        this.menuService = menuService;
        this.authentifService = authentifService;
        this.paymentService = paymentService;
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

    consultGlobly(){
        let whComm = []
        this.commandService.findAll().forEach(command => {
            whComm.push(command);
        });

        return whComm;
    }

    establishCompta(){
        let Income = 0;
        let Outcome = 0;
        
        let Ingredients = []
        let Balance = [];
        this.menuService.getAllIngredientByType().forEach(Ingredient => {
            Ingredients.push(Ingredient);
            Income += Ingredient.cost
        })
        Balance.push(Income);
        
        this.commandService.findAll().forEach(command =>{
            if (command.status == "paid") {
                Outcome += command.getMontant();
            }
        })
        Balance.push(Outcome);

        return Balance;

    }

    addItemToMenu(ItemID, type){
        let menuType = this.menuService.getMenuByType(type);

        if(menuType) {
            menuType.Items.push(ItemID);
        } else {
            console.log('error occurred')
        }
    }

    rmvItemToMenu(ItemID) {
        let Item = this.menuService.getItemById(ItemID);

        if(Item){
            Item.menuType == "null"
        } else {
            console.log('error occurred')
        }
    }

    consultEmploye(){
        let employees = [];

        this.authentifService.getUser().forEach(employee => {
            if ((employee.type == "serveur") || (employee.type == "cook")) {
                employees.push(employee);
            }
        })

        return employees;
    }

    establishBill(CommandID, TabId){
        let command = this.commandService.getCommandByID(CommandID);
        let Items = []
        if(command && command.TabID == TabId) {
            command.Items.forEach(element => {
                Items.push(this.menuService.getItemByID(element))
            });
            let Bill = {
                Plate: Items,
                Total: this.commandService.getMontantByID(CommandID)
            };
        } else {
            console.log('error occurred while establishing the bill')
        }
    }
}