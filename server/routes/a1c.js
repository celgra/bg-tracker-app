import { Router } from 'express';
import moment from 'moment';

import { authenticate } from './../middleware/authenticate';
import { ObjectID } from 'mongodb';
import { Result } from './../models/result';

const router = Router();

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

export default router;