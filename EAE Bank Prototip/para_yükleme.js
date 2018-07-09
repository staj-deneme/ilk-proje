var express=require('express');
var router=express.Router();
var fs=require("fs");
var a;
var session="userName2";

function x(para){
    fs.readFile('./members.json','utf8',function(err,data){
        if(err) throw err
    
        var dizi=JSON.parse(data);
        for(var i=0;i<dizi.members.length;i++){            
            if(dizi.members[i].userName==session){                
                dizi.members[i].resources.coin+=para;                              
            }
        }  
       
        fs.writeFile('./members.json',JSON.stringify(dizi),'utf8',
        function(err) {
            if (err) throw err        
            });
        });
        return para;    
}
a=x(2000);
console.log(a);
//para yükleme
/*
var session="userName";//hangi user güncellencek
var para=500;//miktar
router.post('/create',function(req,res,next){
    fs.readFile('./members.json','utf8',function(err,data){
      if(err) throw err
  
      var dizi=JSON.parse(data);
      for(var i=0;i<dizi.members.length;i++){
            console.log(i+"  "+dizi.members[i].userName+"=="+session);
            if(dizi.members[i].userName==session){                
                dizi.members[i].resources.coin+=para/2;                            
            }
        }  
      fs.writeFile('./members.json',JSON.stringify(dizi),'utf8',
      function(err) {
          if (err) throw err        
          });
      });    
    //res.redirect("/users");
  });
*/