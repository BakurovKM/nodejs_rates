const express = require('express');
const ratesRouter = require('./rates.route');
const swagger = require('./swagger.route');

const router = express.Router();

router.use('/rates', ratesRouter);
router.use('/', swagger);

router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;