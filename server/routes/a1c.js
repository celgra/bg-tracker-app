const router = require('express').Router();
const moment = require('moment');

const { authenticate } = require('./../middleware/authenticate');
const { ObjectID } = require('mongodb');
const { Result } = require('./../models/result');

router.get('/', authenticate, (req, res) => {
    const startDate = moment().subtract(90, 'days').format('x');

    Result.find(
        { resultDate : {
            "$gte": startDate
        },
        user: req.user.id
     })
     .then((results) => {
         let averageBloodGlucose = results.length > 0 ? 
            results
                .reduce((acc, val) => acc + val.bloodGlucoseLevel, 0) / results.length :
            0;

         res.send({
            a1c: ((46.7 + averageBloodGlucose) / 28.7).toFixed(2),
            resultCount: results.length,
            averageBloodGlucose: averageBloodGlucose.toFixed(0)
         });
     });
});

module.exports = router;