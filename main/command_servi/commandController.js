const express = require('express');
const router = express.Router();
const microService = require('./menuService');


// Endpoint for create command
router.post('/createCommand', async (req, res) => {
    const { date_hour, ...items } = req.body;
  
    try {
      await microService.createItem(date_hour, ...items);
      res.json({ message: 'Command created' });
    } catch (error) {
      console.error('Error for create command:', error);
      res.status(500).json({ error: 'Failed to create command ' });
    }
  });

// Endpoint for remove command
router.post('/removeCommand', async (req, res) => {
    const { commandId } = req.body;
  
    try {
      await microService.removeCommand( commandId );
      res.json({ message: 'Command removed' });
    } catch (error) {
      console.error('Error removing command', error);
      res.status(500).json({ error: 'Failed to remove command' });
    }
  });

// Endpoint for get all commands
router.get('/getAllCommand', async (req, res) => {
  
    try {
      const result = await microService.getAllCommand();
      res.json(result);
    } catch (error) {
      console.error('Error ', error);
      res.status(500).json({ error: 'Failed to get commands' });
    }
  });

// Endpoint for get command by id
router.get('/getCommandById', async (req, res) => {
    const {id} = req.body;
  
    try {
      await microService.getCommandById(Id);
      res.json({ message: 'Command obtained' });
    } catch (error) {
      console.error('Error ', error);
      res.status(500).json({ error: 'Failed to get Command' });
    }
  });

// Endpoint for get command by status
router.get('/getCommandByStatus', async (req, res) => {
  const {status} = req.body;

  try {
    await microService.getCommandByStatus(status);
    res.json({ message: 'Command obtained' });
  } catch (error) {
    console.error('Error ', error);
    res.status(500).json({ error: 'Failed to get command' });
  }
});

// Endpoint for get montant
router.get('/getMontant', async (req, res) => {
    const {commandId} = req.body;
  
    try {
      await microService.getMontant(commandId);
      res.json({ message: 'bill save',  });
    } catch (error) {
      console.error('Error ', error);
      res.status(500).json({ error: 'Failed to get bill' });
    }
  });

// Endpoint for print

router.get('/print', async (req, res) => {
    const { commandId} = req.body;
  
    try {
      await microService.print(commandId);
      res.json({ message: 'command printed' });
    } catch (error) {
      console.error('Error printing command:', error);
      res.status(500).json({ error: 'Failed to print command' });
    }
  });
  