const router = require('express').Router();
const { ObjectID } = require('mongodb');
const { Result } = require('./../models/result');

router.get('/', (req, res) => {
    console.log('running');
    Result.find().then((results) => {
        res.send({ results });
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/', (req, res) => {
    console.log('posting...')
    let { bloodGlucoseLevel } = req.body;
    let result = new Result(
        { 
            bloodGlucoseLevel,
            user: ObjectID()
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
        { submittedDate: {
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
