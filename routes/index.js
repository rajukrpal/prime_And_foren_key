var express = require('express');
var router = express.Router();
const staffCon = require("../controllers/staff");
const rightCon = require("../controllers/right");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/staff/create',staffCon.create);

router.post('/right/create',rightCon.create);

router.get('/right/populet',rightCon.staffByRight);

module.exports = router;


