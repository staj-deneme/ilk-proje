var express = require('express');
var router = express.Router();

var fs = require("fs");
var fonk = require("./uretimZaman.js");
function uretimKaynak(i) {
  return new Promise(function (resolve, reject) {
    fs.readFile('./members.json', 'utf8', function (err, data) {
      if (err) throw err
      var dizi = JSON.parse(data);
      //inek
      {
        if (dizi.members[i].resources.cow == null) {

        } else {
          for (var j = 0; j < dizi.members[i].resources.cow.length; j++) {
            if (dizi.members[i].resources.seed >= 50) {

              var btime = new Date(dizi.members[i].resources.cow[j].boughtTime);
              var now = new Date();
              var dif = fonk.diffMin(now, btime);
              var milk = parseInt(fonk.cowMilk(dif));
              var mevcutSut = parseInt(dizi.members[i].resources.milk);
              dizi.members[i].resources.milk = mevcutSut + milk;
              dizi.members[i].resources.cow[j].boughtTime = now;

            }
          }
        }
      }
      //arı
      {
        if (dizi.members[i].resources.bee == null) {

        } else {
          for (var j = 0; j < dizi.members[i].resources.bee.length; j++) {
            if (dizi.members[i].resources.seed >= 15) {
              var btime = new Date(dizi.members[i].resources.bee[j].boughtTime);
              var now = new Date();
              var dif = fonk.diffMin(now, btime);
              var bal = parseInt(fonk.beeHoney(dif));
              var mevcutBal = parseInt(dizi.members[i].resources.honey);

              dizi.members[i].resources.honey = mevcutBal + bal;
              dizi.members[i].resources.bee[j].boughtTime = now;
            }
          }
        }
      }
      //tavuk
      {
        if (dizi.members[i].resources.chicken == null) {

        } else {
          for (var j = 0; j < dizi.members[i].resources.chicken.length; j++) {
            if (dizi.members[i].resources.seed >= 30) {
              var btime = new Date(dizi.members[i].resources.chicken[j].boughtTime);
              var now = new Date();
              var dif = fonk.diffMin(now, btime);
              var egg = parseInt(fonk.chickenEgg(dif));
              mevcutYumurta = parseInt(dizi.members[i].resources.egg);
              dizi.members[i].resources.egg = mevcutYumurta + egg;
              dizi.members[i].resources.chicken[j].boughtTime = now;
            }
          }
        }
      }

      fs.writeFile('./members.json', JSON.stringify(dizi), 'utf8',
        function (err) {
          if (err) throw err
        });
    });

    resolve("Herşey Tamam");
  });

}
function tuketimKaynak(i) {
  return new Promise(function (resolve, reject) {
    fs.readFile('./members.json', 'utf8', function (err, data) {
      if (err) throw err

      var dizi = JSON.parse(data);

      //inek
      {
        if (dizi.members[i].resources.cow == null) {

        } else {
          for (var j = 0; j < dizi.members[i].resources.cow.length; j++) {
            var btime = new Date(dizi.members[i].resources.cow[j].boughtTime);
            var now = new Date();
            var dif = fonk.diffMin(now, btime);
            if (dizi.members[i].resources.seed >= fonk.eatSeedCow(dif)) {
              dizi.members[i].resources.seed -= fonk.eatSeedCow(dif);
            }
          }
        }
      }
      //arı
      {
        if (dizi.members[i].resources.bee == null) {

        } else {
          for (var j = 0; j < dizi.members[i].resources.bee.length; j++) {

            var btime = new Date(dizi.members[i].resources.bee[j].boughtTime);
            var now = new Date();
            var dif = fonk.diffMin(now, btime);
            if (dizi.members[i].resources.seed >= fonk.eatSeedBee(dif)) {
              dizi.members[i].resources.seed -= fonk.eatSeedBee(dif);
            }
          }
        }
      }
      //tavuk
      {
        if (dizi.members[i].resources.chicken == null) {

        } else {
          for (var j = 0; j < dizi.members[i].resources.chicken.length; j++) {

            var btime = new Date(dizi.members[i].resources.chicken[j].boughtTime);
            var now = new Date();
            var dif = fonk.diffMin(now, btime);
            if (dizi.members[i].resources.seed >= fonk.eatSeedChicken(dif)) {
              dizi.members[i].resources.seed -= fonk.eatSeedChicken(dif);
            }
          }
        }
      }

      fs.writeFile('./members.json', JSON.stringify(dizi), 'utf8',
        function (err) {
          if (err) throw err
        });
    });
    resolve("Herşey Tamam");
  });
}
function olum(i) {
  return new Promise(function (resolve, reject) {
    fs.readFile('./history.json', 'utf8', function (err, data) {
      if (err) throw err
      fs.readFile('./members.json', 'utf8', function (err, data2) {
        if (err) throw err

        var dizi = JSON.parse(data); // history
        var dizi2 = JSON.parse(data2); // members
        console.log(dizi2);
        
        //inek
        {
          if (dizi.members[i].cow == null) {
            //alert("inek yok");  console.log("inek yok");
          } else {
            for (var j = 0; j < dizi.members[i].cow.length; j++) {

              var btime = new Date(dizi.members[i].cow[j].boughtTime);
              var now = new Date();
              var dif = fonk.diffMin(now, btime);
              if (dif >= 30) {
                var del = dizi.members[i].cow.splice(j, 1);
                var del2 = dizi2.members[i].resources.cow.splice(j, 1);
              }
            }
          }
        }
        //arı
        {
          if (dizi.members[i].bee == null) {
            //alert("arı yok");  console.log("arı yok");
          } else {
            for (var j = 0; j < dizi.members[i].bee.length; j++) {

              var btime = new Date(dizi.members[i].bee[j].boughtTime);
              var now = new Date();
              var dif = fonk.diffMin(now, btime);
              if (dif >= 15) {
                var del = dizi.members[i].bee.splice(j, 1);
                var del2 = dizi2.members[i].resources.bee.splice(j, 1);
              }
            }
          }
        }
        //tavuk
        {
          if (dizi.members[i].chicken == null) {
            //alert("tavuk yok");  console.log("tavuk yok");
          } else {
            for (var j = 0; j < dizi.members[i].chicken.length; j++) {

              var btime = new Date(dizi.members[i].chicken[j].boughtTime);
              var now = new Date();
              var dif = fonk.diffMin(now, btime);
              if (dif >= 10) {
                var del = dizi.members[i].chicken.splice(j, 1);
                var del2 = dizi2.members[i].resources.chicken.splice(j, 1);
              }

            }
          }
        }

        fs.writeFile('./history.json', JSON.stringify(dizi), 'utf8', function () { });
        fs.writeFile('./members.json', JSON.stringify(dizi2), 'utf8',
          function (err) {
            if (err) throw err
          });
      });
    });
    resolve("Herşey Tamam");
  });
}
// Kullanıcı Session Kontrolünün Yapıldığı Ara Katman
var middleware = {
  requireAuthentication: function (req, res, next) {
    if (req.session.account) {

      fs.readFile('./members.json', 'utf8', function (err, data) {
        if (err) throw err;
        var dizi = JSON.parse(data);
        var dizi = dizi.members;
        var varmi = false;
        var i = req.session.account.indis;

        if (dizi[i].userName == req.session.account.userName && dizi[i].password == req.session.account.password) {
          req.session.account = dizi[i];
          req.session.account.indis = i;
          res.locals.account = req.session.account;
          next();
        } else {
          res.redirect('/login');
        }
      });

    } else {
      res.redirect('/login');
    }
  }
}

// Ana Sayfa Yönlendirmesi
router.get('/', middleware.requireAuthentication, function (req, res, next) {
  var i = req.session.account.indis;

  olum(i).then(function (params) {
    uretimKaynak(i).then(function (params) {
      tuketimKaynak(i).then(function (params) {
        res.render('index');
      });
    });
  });


});
// Hayvan Ve Yem Alma Sayfasına Yönlendirme
router.get('/hayvan-yem-al', middleware.requireAuthentication, function (req, res, next) {
  var data = {
    hata: null
  }
  res.render('hayvan-al', { viewData: data });
});

// Hayvan Ve Yem Aldırma İşlemleri
router.post('/hayvan-yem-al', middleware.requireAuthentication, function (req, res, next) {

  var vdata = {
    hata: false
  };

  fs.readFile('./members.json', 'utf8', function (err, data) {
    if (err) vdata.hata = true;
    fs.readFile('./history.json', 'utf8', function (err, data2) {
      if (err) vdata.hata = true;


      var dizi = JSON.parse(data);
      var diziH = JSON.parse(data2);

      var item = req.body.islem;
      var i = req.session.account.indis;

      switch (item) {

        case "cow":
          if (dizi.members[i].resources.coin >= 50) {
            dizi.members[i].resources.cow.push({ boughtTime: new Date() });
            diziH.members[i].cow.push({ boughtTime: new Date() });
            dizi.members[i].resources.coin -= 50;
          } else { vdata.hata = true; }
          break;

        case "chicken":
          if (dizi.members[i].resources.coin >= 20) {
            dizi.members[i].resources.chicken.push({ boughtTime: new Date() });
            diziH.members[i].chicken.push({ boughtTime: new Date() });
            dizi.members[i].resources.coin -= 20;
          } else { vdata.hata = true; }
          break;

        case "bee":
          if (dizi.members[i].resources.coin >= 5) {
            dizi.members[i].resources.bee.push({ boughtTime: new Date() });
            diziH.members[i].bee.push({ boughtTime: new Date() });
            dizi.members[i].resources.coin -= 5;
          } else { vdata.hata = true; }
          break;

        case "seed":
          if (dizi.members[i].resources.coin >= 1) {
            dizi.members[i].resources.seed += 50;
            dizi.members[i].resources.coin -= 5;
          } else { vdata.hata = true; }
          break;
        default:
          break;
      }

      fs.writeFile('./history.json', JSON.stringify(diziH), 'utf8', function (err) { });
      fs.writeFile('./members.json', JSON.stringify(dizi), 'utf8',
        function (err) {
          if (err) vdata.hata = true;
          res.render('hayvan-al', { viewData: vdata });
        });
    });

  });

});

// Login İşleminin Yapıldığı Post İşlemi
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
        req.session.account = dizi[i];
        req.session.account.indis = i;
      }
    }
    var vdata = {
      hata: true,
      kayitSuccess: null
    }
    if (varmi == true) {
      res.redirect('/');
    }
    else { res.render('page-login', { viewData: vdata }) }
  });
});

//Kullanıcı Kayıt İşleminin Yapıldığı Post İşlemi
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
    fs.readFile('./history.json', 'utf8', function (err, data2) {
      var diziH = JSON.parse(data2);
      diziH.members.push({
        cow: [],
        chicken: [],
        bee: []
      }
      );
      fs.writeFile('./history.json', JSON.stringify(diziH), 'utf8', function (err) {
        if (err) throw err
      });
    });

    fs.writeFile('./members.json', JSON.stringify(dizi), 'utf8', function (err) {
      if (err) {
        var data = {
          hata: false,
          kayitSuccess: false
        };
        res.render('page-login', { viewData: data });
      }
      else {
        var data = {
          hata: false,
          kayitSuccess: true
        };
        res.render('page-login', { viewData: data });
      }

    });
  });
});

// Login Sayfası Yönlendirme
router.get('/login', function (req, res, next) {
  var data = {
    hata: false,
    kayitSuccess: null
  };
  res.render('page-login', { viewData: data });
});

//Boş Demo Sayfa Yönlendirme
router.get('/blank', middleware.requireAuthentication, function (req, res, next) {
  res.render('blank-page');
});

// Session öldürme işlemi ve oturumu sonlandırma
router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.redirect('/login');
});

//Altın Satma ve Alma İşlemlerinin Yapıldığı Sayfaya Yönlendirme
router.get('/altin-islem', middleware.requireAuthentication, function (req, res, next) {
  var viewData = {
    success: null
  }
  res.render('sat-satinal', { viewData: viewData });
});

//Altın Satma ve Alma İşlemlerinin Yapıldığı Kısım
router.post('/altin-islem-al', function (req, res, next) {

  fs.readFile('./members.json', 'utf8', function (err, data) {
    if (err) throw err
    var viewData = {
      success: null
    }
    var dizi = JSON.parse(data);
    var i = req.session.account.indis
    var para = parseInt(req.body.miktar);
    var mevcutPara = parseInt(dizi.members[i].resources.coin);

    dizi.members[i].resources.coin = mevcutPara + para;

    fs.writeFile('./members.json', JSON.stringify(dizi), 'utf8', function () { });

    res.render('sat-satinal', { viewData: viewData });
  });
});

router.post('/altin-islem-sat', function (req, res, next) {

  fs.readFile('./members.json', 'utf8', function (err, data) {
    if (err) throw err
    var viewData = {
      success: null
    }
    var dizi = JSON.parse(data);
    var i = req.session.account.indis
    var para = parseInt(req.body.miktar);
    var mevcutPara = parseInt(dizi.members[i].resources.coin);
    if (mevcutPara > para) {
      dizi.members[i].resources.coin = mevcutPara - para;
      viewData.success = true;
    } else {
      viewData.success = false;
    }

    fs.writeFile('./members.json', JSON.stringify(dizi), 'utf8', function () { });

    res.render('sat-satinal', { viewData: viewData });
  });
});

module.exports = router;
