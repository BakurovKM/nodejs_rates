const express = require('express');
const router = express.Router({ mergeParams: true });
const asyncHandler = require('express-async-handler')

const controller = require('../controllers/rates.controller');

router.get('/', asyncHandler(async (req, res, next) => await controller.getAll(req, res)));
router.get('/download/csv', asyncHandler(async (req, res, next) => await controller.getAllInCSV(req, res)));
router.get('/:code', asyncHandler(async (req, res, next) => await controller.getByCurrencyCode(req, res)));

module.exports = router;