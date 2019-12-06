const express = require('express');
const { PermissionMiddlewareCreator } = require('forest-express-sequelize');
const { treasure_hunts } = require('../models');

const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('treasure_hunts');

// This file contains the logic of every route in Forest Admin for the collection treasure_hunts:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/actions/create-and-manage-smart-actions

// Create a Treasure Hunt
router.post('/treasure_hunts', permissionMiddlewareCreator.create(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#create-a-record
  next();
});

// Update a Treasure Hunt
router.put('/treasure_hunts/:recordId', permissionMiddlewareCreator.update(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#update-a-record
  next();
});

// Delete a Treasure Hunt
router.delete('/treasure_hunts/:recordId', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#delete-a-record
  next();
});

// Get a list of Treasure Hunts
router.get('/treasure_hunts', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#get-a-list-of-records
  next();
});

// Get a number of Treasure Hunts
router.get('/treasure_hunts/count', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#get-a-number-of-records
  next();
});

// Get a Treasure Hunt
router.get('/treasure_hunts/:recordId', permissionMiddlewareCreator.details(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#get-a-record
  next();
});

// Export a list of Treasure Hunts
router.get('/treasure_hunts.csv', permissionMiddlewareCreator.export(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#export-a-list-of-records
  next();
});

router.post('/actions/validateHunt',
  (req, res) => {
    let hunt_id = req.body.data.attributes.ids[0];

    return treasure_hunts
      .update({
        status: 1
      }, {
        where: {
          id: hunt_id
        }
      })
      .then(() => {
        res.send({
          success: 'Treasure Hunt sent to be published !'
        });
      });
  });


module.exports = router;
