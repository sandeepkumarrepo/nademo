module.exports = app => {
    const demo = require("../controllers/demo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", demo.create);
  
    // Retrieve all Tutorials
    router.get("/", demo.findAll);
  
    app.use('/api/demos', router);
  };