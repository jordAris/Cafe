const Ingredient = require('./models/ingredients');
const Item = require('./models/items');
const Menu = require('./models/menu');
const uuid = require('uuid')
const mongoose = require('mongoose')

class MenuService {
  constructor() {
    this.ingredients = [];
    this.items = [];
    this.menus = [];
  }

  // Méthodes pour gérer les ingrédients

  

  getIngredients() {
    return this.ingredients;
  }

  // Méthodes pour gérer les plats

  createItem(name, price, description, menuType, ingredientBase, ...accompagnement) {
    if (menuType == petitDejeuner) {
      const item = new Item(uuid.v4(),name, price, description, menuType)
      item.addingredientBase(ingredientBase)
      item.save();
    } else {
      if(menuType == Dejeuner || menuType == Diner){
        item.addaccompagnemen(ingredientBase)
      item.save();
      }
    }
    
  }

  removeItem(Id, menuType) {
    
    
  }

  getItems() {
    return this.items;
  }

  // Méthodes pour gérer les menus

  addMenu(name, itemNames) {
    const items = itemNames.map(itemName => {
      const item = this.items.find(item => item.name === itemName);
      if (!item) {
        console.log(`Item ${itemName} not found`);
      }
      return item;
    });

    const menu = new Menu(name, items);
    this.menus.push(menu);
  }

  removeMenu(name) {
    const index = this.menus.findIndex(menu => menu.name === name);
    if (index !== -1) {
      this.menus.splice(index, 1);
    }
  }

  getMenus() {
    return this.menus;
  }

  getMenuByName(name) {
    return this.menus.find(menu => menu.name === name);
  }

  // Autres méthodes pour gérer les menus

}

module.exports = MenuService;