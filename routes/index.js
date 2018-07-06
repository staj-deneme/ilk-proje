var express = require('express');
var router = express.Router();

var fs=require("fs");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/login', function (req, res, next) {

  fs.readFile('./members.json', 'utf8', function (err, data) {
    if (err) throw err;

    var dizi = JSON.parse(data);

    dizi.members.push({
      name: req.body.ad,
      surName: req.body.soyad,
      userName: req.body.kadi,
      password: req.body.sifre,
      eMail: req.body.eposta,
      resources: {
        coin: 15,
        cow: [],
        chicken: [],
        bee: [],
        seed: 0,
        milk: 0,
        egg: 0,
        honey: 0,
      }
    });
    fs.writeFile('./members.json', JSON.stringify(dizi), 'utf8', function (err) {
      if (err) throw err;
    });
  });
  res.render('page-login');


});

router.get('/login', function (req, res, next) {
  res.render('page-login');
});

router.get('/blank', function (req, res, next) {
  res.render('blank-page');
});
module.exports = router;
