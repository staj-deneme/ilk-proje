var express=require('express');
var router=express.Router();
var fs=require("fs");

function x(){
    fs.readFile('./members.json','utf8',function(err,data){
        if(err) throw err
    
        var dizi=JSON.parse(data);
    
        dizi.members.push({
            name:"name2",
            surName:"surName2",
            userName:"userName2",
            password:"password2",
            eMail:"eMail2" ,
            resources:{
                    coin:0,
                    cow:[],
                    chicken:[],
                    bee:[],
                    seed:0,
                    milk:0,
                    egg:0,
                    honey:0,         
                      }           
          });
        fs.writeFile('./members.json',JSON.stringify(dizi),'utf8',
        function(err) {
            if (err) throw err        
            });
        
        fs.writeFile('./history.json',JSON.stringify(dizi),'utf8',
        function(err) {
            if (err) throw err        
            });    
        });
        
           
}
var a=x();
//kullanıcı kayıt
/*
router.post('/create',function(req,res,next){
    fs.readFile('./members.json','utf8',function(err,data){
      if(err) throw err
  
      var dizi=JSON.parse(data);
  
      dizi.members.push({
          name:req.body.name,
          surName:req.body.surName,
          userName:req.body.userrName,
          password:req.body.password,
          eMail:req.body.eMail,
          resources:{
              coin:0,
              cow:0,
              chicken:0,
              bee:0,
              seed:0,
              milk:0,
              egg:0,
              honey:0,         
                    }
        });
      fs.writeFile('./members.json',JSON.stringify(dizi),'utf8',
      function(err) {
          if (err) throw err        
          });
      });    
    //res.redirect("/users");
  });
*/