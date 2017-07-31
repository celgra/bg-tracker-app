const router = require('express').Router();
const _ = require('lodash');
const { authenticate } = require('./../middleware/authenticate');
const { ObjectID } = require('mongodb');
const { Result } = require('./../models/result');

router.get('/', (req, res) => {
    Result.find().then((results) => {
        res.send({ results });
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/', authenticate, (req, res) => {
    let body = _.pick(req.body, ['bloodGlucoseLevel', 'resultDate', 'resultContext']);

    console.log(req.user);
    
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

router.get('/:month/:year/', (req, res) => {
    let { month, year } = req.params;
    let startDate = new Date(year, month - 1);
    let endDate = new Date(year, month);

    Result.find(
        { resultDate: {
            "$gte": startDate,
            "$lt": endDate
        } 
    }
    ).then((results) => {
        res.send({ results });
    }, (e) => {
        res.status(404).send();
    })
});

module.exports = router;
