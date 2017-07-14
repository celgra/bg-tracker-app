const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello world');
});

router.post('/', (req, res) => {
    
});

module.exports = router;