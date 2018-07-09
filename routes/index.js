var express = require('express');
var router = express.Router();

var fs = require("fs");


var middleware = {
  requireAuthentication: function (req, res, next) {
    if (req.session.account) {

      fs.readFile('./members.json', 'utf8', function (err, data) {
        if (err) throw err;
        var dizi = JSON.parse(data);
        var dizi = dizi.members;
        var varmi = false;
        for (let i = 0; i < dizi.length; i++) {
          if (dizi[i].userName == req.session.account.userName && dizi[i].password == req.session.account.password) {
            varmi = true;
            req.session.account=dizi[i];
          }
        }
        if (varmi == true) {
          next();
        }else{
          res.redirect('/login');
        }
      });

    }else{
      res.redirect('/login');
    }
  }
}

/* GET home page. */
router.get('/', middleware.requireAuthentication, function (req, res, next) {
  res.render('index');
});

router.get('/hayvan-yem-al', middleware.requireAuthentication, function (req, res, next) {
  res.render('hayvan-al');
});

router.post('/', function (req, res, next) {
  fs.readFile('./members.json', 'utf8', function (err, data) {
    if (err) throw err;

    var dizi = JSON.parse(data);
    var dizi = dizi.members;
    var varmi = false;
    var account;
    for (let i = 0; i < dizi.length; i++) {
      if (dizi[i].userName == req.body.kadi && dizi[i].password == req.body.sifre) {
        varmi = true;
        account = dizi[i];
      }
    }
    var data = {
      hata: true,
      kayitSuccess: null
    }
    if (varmi == true) {
      req.session.account = account;
      console.log(req.session.account.resources.cow.length);
      res.redirect('/');
    }
    else { res.render('page-login', { viewData: data }) }
  });
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
      if (err){
        var data = {
          hata: false,
          kayitSuccess: false
        };
        res.render('page-login', { viewData: data });
      }
      else{
        var data = {
          hata: false,
          kayitSuccess: true
        };
        res.render('page-login', { viewData: data });
      }
      
    });
  });
  


});

router.get('/login', function (req, res, next) {
  var data = {
    hata: false,
    kayitSuccess: null
  };
  res.render('page-login', { viewData: data });
});


router.get('/blank',middleware.requireAuthentication, function (req, res, next) {
  res.render('blank-page');
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
