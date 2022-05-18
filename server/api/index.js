const router = require('express').Router();

router.use('/v1/bankservice', require('./bank'));

module.exports = router; 