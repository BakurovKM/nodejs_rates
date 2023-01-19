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

const getAllInCSV = async (req, res) => {
    let rates = await rateService.getAll();
    let csv = "Name;Code;Rate\n";

    for (key in rates){
        csv += `${rates[key].Name};${rates[key].CharCode};${rates[key].Value}\n`;
    }

    res.setHeader('Content-disposition', 'attachment; filename=rates.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(csv);
}

module.exports = {
    getAll,
    getByCurrencyCode,
    getAllInCSV
};