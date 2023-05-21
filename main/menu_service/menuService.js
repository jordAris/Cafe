const Ingredient = require('./models/ingredients');
const Item = require('./models/items');
const Menu = require('./models/menu');
const {connectToDatabase, disconnectFromDatabase} = require('./DB/database')
const {v4 : uuid } = require('uuid')
const ingredientsModel = require('./models/ingredients');
const itemsModel = require('./models/items');
const menuModel = require('./models/menu');
const mongoose = require('mongoose')



  // Méthodes pour gérer les ingrédients

  async function getIngredients() {
    await connectToDatabase;
    const ingredients = ingredientsModel.find() 
    return ingredients;

    await disconnectFromDatabase;
  }

  async function getIngredientByType(Type){
    await connectToDatabase;
    const ingredients = ingredientsModel.find({name:Type})
    if(!ingredients){
      throw new Error('Invalid ingredient name')
    }
    return ingredients;

    await disconnectFromDatabase;
    
  }

  async function getIngredientById(ID){
    await connectToDatabase;
    const ingredient = ingredientsModel.findById(ID);
    if(!ingredient){
      throw new Error('Invalid ingredient ID')
    } 
    return ingredient;

    await disconnectFromDatabase;
  }

  async function rmvIngredient(IngredientID){
     await connectToDatabase;

    let Ingredient = getIngredientById(IngredientID);

    Ingredient.status = "absent";
    console.log("ingredient have been deleted")

   await disconnectFromDatabase;
}

async function addingredientBase(price, description, status, quantity){
    await connectToDatabase;
    const IngrdID = uuidv4(); 
    const ingredient = new ingredientsModel({IngrdID, price, description, status, quantity, IsbasicIngredient: true})
    ingredient.save();
    console.log("ingredient de base has been added successfully");

    await disconnectFromDatabase;
    
}

async function addaccompagnement(price, description, status, quantity){
    await connectToDatabase;
    const IngrdID = uuidv4(); 
    const ingredient = new ingredientsModel({IngrdID, price, description, status, quantity, IsbasicIngredient: false})
    ingredient.save();
    console.log("accompagnement has been save successfully");

    await disconnectFromDatabase;
    
}

  // Méthodes pour gérer les plats

  async function createItem(name, price, description, menuType, ...ingredients) {
    await connectToDatabase;
    
    if (menuType == "petitDejeuner") {
      const count = 0;
      ingredients.forEach(ingredient => {
        if (ingredient.IsbasicIngredient == false){
          count++
        }
      })
      if (count !== 0) {
        throw new Error('un accompagnement a été détecté dans la liste prodiguée. On ne peut pas créer cet item')
      } else {
        const item = new itemsModel({id: uuidv4(), name, price, description, menuType, ingredients})
        item.save();
      }
    }
    else {
      if(menuType == "Dejeuner" || menuType == "Diner"){
        const count = 0;
      ingredients.forEach(ingredient => {
        if (ingredient.IsbasicIngredient == false){
          count++
        }
      })
        if ((count == 0) || (count == ingredient.length())) {
          throw new Error('not valid input')
        } else {
          const item = new itemsModel({id: uuidv4(), name, price, description, menuType, ingredients})
          item.save();
        }
    
      }
    }
    await disconnectFromDatabase;
    
  }

  async function removeItemToMenu(itemID) {
    await connectToDatabase
    const item = itemsModel.findById(itemID)
    item.menuType = null

    item.updateOne();
    console.log("item successfully remove");
    await disconnectFromDatabase;

  }

  async function getItems() {
    await connectToDatabase;
    const items = itemsModel.find() 
    return items;

    await disconnectFromDatabase;
  }

  async function getItemsByID(Id){
    await connectToDatabase;
    const item = itemsModel.findById(Id);
    if(!item){
      throw new Error('Invalid item ID')
    } 
    return item;

    await disconnectFromDatabase;

  }

  async function getItemsByMenu(Type){
    await connectToDatabase;
    const items = itemsModel.find({menuType:Type})
    if(!items){
      throw new Error('Invalid menu Type')
    }
    return items;

    await disconnectFromDatabase; 
  }

  // Méthodes pour gérer les menus

  async function addMenu(name, ...items) {
    await connectToDatabase;
    const menu = new menuModel({Id: uuidv4(), name, items })
    menu.save();
    await disconnectFromDatabase;
    };

    
    async function removeMenu(name) {
    await connectToDatabase;

    let Ingredient = getmenuByType(name);

    Ingredient.status = "absent";
    console.log("menu have been deleted")

   await disconnectFromDatabase;
  }

  async function getMenus() {
    await connectToDatabase;
    const menus = menuModel.find() 
    return menus;

    await disconnectFromDatabase;
  }

  async function getmenuByType(name) {
    await connectToDatabase;
    const menu = menuModel.find({Type:name})
    if(!menu){
      throw new Error('Invalid menu name')
    }
    return menu;

    await disconnectFromDatabase;   
  }

  // Autres méthodes pour gérer les menus

module.exports = {
  getIngredients,
  getIngredientByType,
  getIngredientById,
  rmvIngredient,
  createItem,
  removeItemToMenu,
  getItems,
  getItemsByID,
  getItemsByMenu,
  addMenu,
  removeMenu,
  getMenus,
  getmenuByType,  
};