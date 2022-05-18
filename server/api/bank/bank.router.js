const router = require('express').Router();
const bankCtrl = require('./bank.controller');


router.get('/', bankCtrl.getBranches);
router.get('/:BranchId', bankCtrl.getBranch);

module.exports = router;