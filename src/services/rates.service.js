const dotenv = require('dotenv');
dotenv.config();
const logger = require('../logger');

const NodeCache = require('node-cache')
const myCache = new NodeCache({ stdTTL: 600 });
const cacheKey = 'rates';

const getByCurrencyCode = async (code) => {
    let rates = await getAll();
    var rate = rates[code.toUpperCase()]
    return rate?.Value;
}

const getAll = async () => {
    let data  = myCache.get(cacheKey);

    if (data == null || data === undefined) {
        const axios = require('axios');

        let request = await axios.get(process.env.RATES_URL, 
            { headers: { 'Accept-Encoding': 'gzip, deflate'}});

        data = request.data.Valute;
        logger.info('Set new rates cache');
        myCache.set(cacheKey, data);   
    }

    return data;
}

module.exports = {
    getAll,
    getByCurrencyCode
};