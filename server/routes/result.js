import { Router } from 'express';
import _ from 'lodash';

import { authenticate } from'./../middleware/authenticate';
import { ObjectID } from 'mongodb';
import Result from './../models/result';

const router = Router();

router.get('/', authenticate, (req, res) => {
    Result.find({ user: req.user.id }).then((results) => {
        res.send({ results });
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/', authenticate, (req, res) => {
    let body = _.pick(req.body, ['bloodGlucoseLevel', 'resultDate', 'resultContext']);
    
    let result = new Result(
        { 
            bloodGlucoseLevel: body.bloodGlucoseLevel,
            resultDate: body.resultDate,
            resultContext: body.resultContext,
            user: req.user.id
        }
    );

    result.save().then((result) => {
        res.status(201).send({ result });
    }, (e) => {
        res.status(400).send(e);
    })

});

router.get('/:month/:year/', authenticate, (req, res) => {
    let { month, year } = req.params;
    let startDate = new Date(year, month - 1);
    let endDate = new Date(year, month);

    Result.find(
        { resultDate: {
            "$gte": startDate,
            "$lt": endDate
        },
        user: req.user.id 
    }
    ).then((results) => {
        res.send({ results });
    }, (e) => {
        res.status(404).send();
    })
});

export default router;
