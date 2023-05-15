 class Ingredient {
    constructor(price, description, quantity, IsbasicIngredient ) {
      this.price = price;
      this.description = description;
      this.quantity = quantity;
      this.IsbasicIngredient = IsbasicIngredient;
      this.status = "present";
    }
  }


  class accompagnement extends Ingredient {
    constructor(price, description, quantity){
        super(price, description, quantity, false)
    }
  }

  class ingredientBase extends Ingredient {
    constructor(price, description, quantity){
      super(price, description, quantity, true)
    }
  }
  
  module.exports = {accompagnement, Ingredient, ingredientBase }
    