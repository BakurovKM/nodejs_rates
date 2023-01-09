const rateService = require('../services/rates.service');

const getByCurrencyCode = async (req, res) => {
    let result = await rateService.getByCurrencyCode(req.params.code);
    if (result == null) {
        res.sendStatus(404);
    }
    else {
        res.json(result);
    }
}

const getAll = async (req, res) => {
    let result = await rateService.getAll();
    res.json(result);
}

module.exports = {
    getAll,
    getByCurrencyCode
};