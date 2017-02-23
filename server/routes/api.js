const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/test', (req, res) => {
    res.send({test: 'works'});
});

module.exports = router;