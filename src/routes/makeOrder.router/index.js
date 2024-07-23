var express = require('express');
var router = express.Router();
const { makeOrderController } = require('../../controllers');

/* GET orderForm page. */
router.get('/:slug' , makeOrderController);

module.exports = router;
