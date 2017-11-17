'use strict';
var router = require('express').Router();
var newAddr = require("../controllers/newAddr");

router.get('/', newAddr.getNewAddress);

module.exports = router;