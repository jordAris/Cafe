const { ingredientBase, accompagnement } = require("./ingredients");

class Item {
    constructor(Id, name, price, description, menuType) {
      this.name = name;
      this.Id = Id;
      this.price = price;
      this.description = description;
      this.menuType = menuType;
      this.IngredientBase = []
      this.Accompagnement = []
      this.status = "present";
    }

    addingredientBase(...ingredientBase){
        ingredientBase.forEach(element => {
            this.IngredientBase.push(element)    
        });
      }
    
      addaccompagnement(...accompagnement){
        accompagnement.forEach(element => {
            this.Accompagnement.push(element)
        });
      }
  }

  
  
  module.exports = Item;