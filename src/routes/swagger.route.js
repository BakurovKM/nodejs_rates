const express = require('express');
const router = express.Router({ mergeParams: true });

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
 
router.use('/swagger', function(req, res, next){
  swaggerDocument.host = req.get('host');
  req.swaggerDoc = swaggerDocument;
  next();
}, swaggerUi.serve, swaggerUi.setup());

module.exports = router;