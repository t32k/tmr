
/*
 * GET home page.
 */

var moment = require('moment');
var times = moment().format("YYYY/MM/DD (ddd)");

exports.index = function(req, res){
  res.render('index', { title: 'TMR', time: times});
};