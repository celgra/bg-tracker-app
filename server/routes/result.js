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
        res.status(201).send(result);
    }, (e) => {
        res.status(400).send(e);
    })

});

module.exports = router;