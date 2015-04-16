var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.get('/expenses', getExpenses);
router.get('/allowances', getAllowances)
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getExpenses(req, res, next){
  res.status(200).send(data.expenses);
}

function getAllowances(req, res, next){
  res.status(200).send(data.allowances);
}
