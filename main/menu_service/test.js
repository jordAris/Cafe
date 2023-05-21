const MenuService = require('./menuService');

const menuService = new MenuService();

// Ajouter des ingrédients
menuService.addIngredient('Lait', 5);
menuService.addIngredient('Sucre', 10);

// Ajouter des plats
menuService.addItem('Café', 1.5);
menuService.addItem('Thé', 1);

// Ajouter des menus
menuService.addMenu('Petit-déjeuner', ['Café', 'Croissant']);
menuService.addMenu('Déjeuner', ['Thé', 'Sandwich']);
menuService.addMenu('Dîner', ['Café', 'Plat du jour']);

// Obtenir la liste des ingrédients
console.log('Ingrédients :', menuService.getIngredients());

// Obtenir la liste des plats
console.log('Plats :', menuService.getItems());

// Obtenir la liste des menus
console.log('Menus :', menuService.getMenus());

// Obtenir un menu par son nom
console.log('Menu "Déjeuner" :', menuService.getMenuByName('Déjeuner'));

// Supprimer un plat
menuService.removeItem('Café');

// Obtenir la liste des plats mise à jour
console.log('Plats :', menuService.getItems());

// Supprimer un menu
menuService.removeMenu('Dîner');

// Obtenir la liste des menus mise à jour
console.log('Menus :', menuService.getMenus());