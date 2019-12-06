const express = require('express');
const { PermissionMiddlewareCreator } = require('forest-express-sequelize');
const { point_of_interests } = require('../models');

const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('point_of_interests');

// This file contains the logic of every route in Forest Admin for the collection point_of_interests:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/actions/create-and-manage-smart-actions

// Create a Point Of Interest
router.post('/point_of_interests', permissionMiddlewareCreator.create(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#create-a-record
  next();
});

// Update a Point Of Interest
router.put('/point_of_interests/:recordId', permissionMiddlewareCreator.update(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#update-a-record
  next();
});

// Delete a Point Of Interest
router.delete('/point_of_interests/:recordId', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#delete-a-record
  next();
});

// Get a list of Point Of Interests
router.get('/point_of_interests', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#get-a-list-of-records
  next();
});

// Get a number of Point Of Interests
router.get('/point_of_interests/count', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#get-a-number-of-records
  next();
});

// Get a Point Of Interest
router.get('/point_of_interests/:recordId', permissionMiddlewareCreator.details(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#get-a-record
  next();
});

// Export a list of Point Of Interests
router.get('/point_of_interests.csv', permissionMiddlewareCreator.export(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#export-a-list-of-records
  next();
});

router.post('/actions/validatePOI',
(req, res) => {
    let poi_id = req.body.data.attributes.ids[0];

    return point_of_interests
      .update({
        status: 1
      }, {
        where: {
          id: poi_id
        }
      })
      .then(() => {
        res.send({
          success: 'POI sent to be published !'
        });
      });
  });

module.exports = router;
