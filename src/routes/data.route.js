const express = require("express");
const router = express.Router();

const DataController = require('../controllers/data.controller');

//get all data banks
router.get('/', DataController.getAllData);

//get data bank by ID
router.get('/:id', DataController.getDataByID);

//create new data 
router.post('/', DataController.createNewData);

//detele data
router.delete('/:id', DataController.deleteData);

module.exports = router;