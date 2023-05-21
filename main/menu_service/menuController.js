const express = require('express');
const router = express.Router();
const microService = require('./menuService');


// Endpoint for get all ingredients

router.get('/getAllIngredients', async (req, res) => {
  
    try {
      const result = await microService.getIngredients();
      res.json(result);
    } catch (error) {
      console.error('Error ', error);
      res.status(500).json({ error: 'Failed to get ingredients' });
    }
  });

  // Endpoint for get Ingredient by type
router.get('/getIngredientByType', async (req, res) => {
    const {Type} = req.body;
  
    try {
      await microService.getIngredientByType(Type);
      res.json({ message: 'Ingredient added' });
    } catch (error) {
      console.error('Error ', error);
      res.status(500).json({ error: 'Failed to add ingredient' });
    }
  });


  // Endpoint for get Ingredient by ID
router.get('/getIngredientById', async (req, res) => {
  const {Id} = req.body;

  try {
    await microService.getIngredientById(Id);
    res.json({ message: 'Ingredient added' });
  } catch (error) {
    console.error('Error ', error);
    res.status(500).json({ error: 'Failed to add ingredient' });
  }
});



// Endpoint for removing an ingredient
router.post('/rmvIngredient', async (req, res) => {
  const { IngredientID} = req.body;

  try {
    await microService.rmvIngredient(IngredientID);
    res.json({ message: 'Ingredient removed' });
  } catch (error) {
    console.error('Error removing ingredient:', error);
    res.status(500).json({ error: 'Failed to remove ingredient' });
  }
});

// Endpoint for adding a base ingredient
router.post('/addingredientBase', async (req, res) => {
  const { price, description, status, quantity } = req.body;

  try {
    const result = await microService.addingredientBase(price, description, status, quantity);
    res.json(result);
  } catch (error) {
    console.error('Error adding basic ingredient:', error);
    res.status(500).json({ error: 'Failed to add basic ingredient' });
  }
});

// Endpoint for adding an accompagnement
router.post('/addaccompagnement', async (req, res) => {
  const { price, description, status, quantity } = req.body;

  try {
    const result = await microService.addaccompagnement(price, description, status, quantity);
    res.json(result);
  } catch (error) {
    console.error('Error adding an accompagnement:', error);
    res.status(500).json({ error: 'Failed to add accompagnement' });
  }
});


// Endpoint for create an Item
router.post('/createItem', async (req, res) => {
  const { name, price, description, menuType, ...ingredients } = req.body;

  try {
    await microService.createItem(name, price, description, menuType, ...ingredients);
    res.json({ message: 'Item created' });
  } catch (error) {
    console.error('Error for create item:', error);
    res.status(500).json({ error: 'Failed to create ite ' });
  }
});

// Endpoint for removing an item from a Menu
router.post('/removeItemFromCmd', async (req, res) => {
  const { itemID } = req.body;

  try {
    await microService.removeItemToMenu( itemID );
    res.json({ message: 'Item removed from menu' });
  } catch (error) {
    console.error('Error removing item from menu:', error);
    res.status(500).json({ error: 'Failed to remove item from menu' });
  }
});


// Endpoint for get all items

router.get('/getItems', async (req, res) => {
  const {} = req.body;
  
  try {
    const result = await microService.getItems();
    res.json(result);
  } catch (error) {
    console.error('Error ', error);
    res.status(500).json({ error: 'Failed to get items' });
  }
});

// Endpoint for get Item by ID
router.get('/getItemsByID', async (req, res) => {
  const {Id} = req.body;

  try {
    await microService.getItemsByID(Id);
    res.json({ message: 'Item obtained' });
  } catch (error) {
    console.error('Error ', error);
    res.status(500).json({ error: 'Failed to get item' });
  }
});


// Endpoint for get Item by menu
router.get('/getItemsByMenu', async (req, res) => {
const {Type} = req.body;

try {
  await microService.getItemsByMenu(Type);
  res.json({ message: 'Item obtained' });
} catch (error) {
  console.error('Error ', error);
  res.status(500).json({ error: 'Failed to get Item' });
}
});



// Endpoint for adding menu
router.post('/addMenu', async (req, res) => {
  const { name, ...items} = req.body;

  try {
    await microService.addMenu(name, ...items);
    res.json({ message: 'menu have been added' });
  } catch (error) {
    console.error('Error adding menu:', error);
    res.status(500).json({ error: 'Failed to add menu' });
  }
});

// Endpoint for removing menu
router.post('/removeMenu', async (req, res) => {
  const { name} = req.body;

  try {
    await microService.removeMenu( name );
    res.json({ message: 'menu removed' });
  } catch (error) {
    console.error('Error removing menu:', error);
    res.status(500).json({ error: 'Failed to remove menu' });
  }
});


// Endpoint for get menu
router.get('/getMenus', async (req, res) => {
  const {} = req.body;

  try {
    await microService.getMenus();
    res.json({ message: 'menus successfully' });
  } catch (error) {
    console.error('Error ', error);
    res.status(500).json({ error: 'Failed to get menu' });
  }
});


// Endpoint for get menu by type
router.get('/getItemsByMenu', async (req, res) => {
const {name} = req.body;

try {
  await microService.getItemsByMenu(name);
  res.json({ message: 'menu obtained' });
} catch (error) {
  console.error('Error ', error);
  res.status(500).json({ error: 'Failed to get menu' });
}
});

