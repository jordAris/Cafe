const express = require('express');
const router = express.Router();
const microService = require('./authentif_Service');

// Endpoint for passing a command
router.post('/passerCommand', async (req, res) => {
  const { tabID } = req.body;

  try {
    const result = await microService.passerCommand(tabID);
    res.json(result);
  } catch (error) {
    console.error('Error passing command:', error);
    res.status(500).json({ error: 'Failed to pass command' });
  }
});

// Endpoint for adding an item to a command
router.post('/addItemToCmd', async (req, res) => {
  const { CmdID, itemID, TabID, quantity } = req.body;

  try {
    const result = await microService.addItemToCmd(CmdID, itemID, TabID, quantity);
    res.json(result);
  } catch (error) {
    console.error('Error adding item to command:', error);
    res.status(500).json({ error: 'Failed to add item to command' });
  }
});

// Endpoint for removing an item from a command
router.post('/removeItemFromCmd', async (req, res) => {
  const { CmdID, itemID, TabID } = req.body;

  try {
    await microService.remvItemToCMd(CmdID, itemID, TabID);
    res.json({ message: 'Item removed from command' });
  } catch (error) {
    console.error('Error removing item from command:', error);
    res.status(500).json({ error: 'Failed to remove item from command' });
  }
});

// Endpoint for consulting the menu
router.get('/consultMenu', async (req, res) => {
  const { menuType } = req.query;

  try {
    const menu = await microService.ConsultMenu(menuType);
    res.json(menu);
  } catch (error) {
    console.error('Error consulting menu:', error);
    res.status(500).json({ error: 'Failed to consult menu' });
  }
});

// Endpoint for consulting validated commands
router.get('/consultValidatedCommands', async (req, res) => {
  try {
    const validatedCommands = await microService.consultValComm();
    res.json(validatedCommands);
  } catch (error) {
    console.error('Error consulting validated commands:', error);
    res.status(500).json({ error: 'Failed to consult validated commands' });
  }
});

// Endpoint for preparing a command
router.post('/prepareCommand', async (req, res) => {
  const { CmdID, tableID } = req.body;

  try {
    const result = await microService.prepComm(CmdID, tableID);
    res.json(result);
  } catch (error) {
    console.error('Error preparing command:', error);
    res.status(500).json({ error: 'Failed to prepare command' });
  }
});

// Endpoint for validating a command
router.post('/validateCommand', async (req, res) => {
  const { CmdId, tableID } = req.body;

  try {
    const result = await microService.validCmd(CmdId, tableID);
    res.json(result);
  } catch (error) {
    console.error('Error validating command:', error);
    res.status(500).json({ error: 'Failed to validate command' });
  }
});

// Endpoint for serving a command
router.post('/serveCommand', async (req, res) => {
  const { CmdId, tableID } = req.body;

  try {
    const result = await microService.validCmdServ(CmdId, tableID);
    res.json(result);
  } catch (error) {
    console.error('Error serving command:', error);
    res.status(500).json({ error: 'Failed to serve command' });
  }
});

// Endpoint for consulting all commands
router.get('/consultAllCommands', async (req, res) => {
  try {
    const allCommands = await microService.consultGloby();
    res.json(allCommands);
  } catch (error) {
    console.error('Error consulting all commands:', error);
    res.status(500).json({ error: 'Failed to consult all commands' });
  }
});

// Endpoint for establishing the balance
router.get('/establishBalance', async (req, res) => {
  try {
    const balance = await microService.establishCompta();
    res.json(balance);
  } catch (error) {
    console.error('Error establishing balance:', error);
    res.status(500).json({ error: 'Failed to establish balance' });
  }
});

// Endpoint for adding an item to the menu
router.post('/addItemToMenu', async (req, res) => {
  const { ItemID, type } = req.body;

  try {
    await microService.addItemyoMenu(ItemID, type);
    res.json({ message: 'Item added to menu' });
  } catch (error) {
    console.error('Error adding item to menu:', error);
    res.status(500).json({ error: 'Failed to add item to menu' });
  }
});

// Endpoint for consulting employees
router.get('/consultEmployees', async (req, res) => {
  try {
    const employees = await microService.consultEmployee();
    res.json(employees);
  } catch (error) {
    console.error('Error consulting employees:', error);
    res.status(500).json({ error: 'Failed to consult employees' });
  }
});

// Endpoint for establishing the bill
router.post('/establishBill', async (req, res) => {
  const { cmdID, tabID } = req.body;

  try {
    const bill = await microService.establishBill(cmdID, tabID);
    res.json(bill);
  } catch (error) {
    console.error('Error establishing bill:', error);
    res.status(500).json({ error: 'Failed to establish bill' });
  }
});

// Endpoint for adding an ingredient
router.post('/addIngredient', async (req, res) => {
  const { Type, quantity, description } = req.body;

  try {
    await microService.addIngredient(Type, quantity, description);
    res.json({ message: 'Ingredient added' });
  } catch (error) {
    console.error('Error adding ingredient:', error);
    res.status(500).json({ error: 'Failed to add ingredient' });
  }
});

// Endpoint for removing an ingredient
router.post('/removeIngredient', async (req, res) => {
  const { IngredientID } = req.body;

  try {
    await microService.rmvIngredient(IngredientID);
    res.json({ message: 'Ingredient removed' });
  } catch (error) {
    console.error('Error removing ingredient:', error);
    res.status(500).json({ error: 'Failed to remove ingredient' });
  }
});

module.exports = router;

