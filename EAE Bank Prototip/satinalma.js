var express=require('express');
var router=express.Router();
var fs=require("fs");


var session="userName2";
var a="cow";
// item ={"cow","bee","chicken","seed"} 
function x(item){
    fs.readFile('./members.json','utf8',function(err,data){
        if(err) throw err
    
        var dizi=JSON.parse(data);
        for(var i=0;i<dizi.members.length;i++){
            
            if(dizi.members[i].userName==session){
                switch(item){
                    case "cow":
                           if(dizi.members[i].resources.coin>=50){                               
                               dizi.members[i].resources.cow.push({boughtTime:new Date()});
                               dizi.members[i].resources.coin-=50;
                              // console.log(i+"  "+dizi.members[i].resources.cow[0].boughtTime);
                           }else{  alert("Yeterli Coin yok..");}                            
                           break;
                    case "chicken":
                           if(dizi.members[i].resources.coin>=20){
                               dizi.members[i].resources.chicken.push({boughtTime:new Date()});
                               dizi.members[i].resources.coin-=20;
                           }else{  alert("Yeterli Coin yok..");}                            
                           break;
                    case "bee":
                           if(dizi.members[i].resources.coin>=5){
                               dizi.members[i].resources.bee.push({boughtTime:new Date()});
                               dizi.members[i].resources.coin-=5;
                           }else{  alert("Yeterli Coin yok..");}                            
                           break;
                    case "seed":
                           if(dizi.members[i].resources.coin>=50){
                               dizi.members[i].resources.seed+=1000;
                               dizi.members[i].resources.coin-=50;
                           }else{  alert("Yeterli Coin yok..");}                            
                           break;
                    default:
                           break;
                } 
            }
        }  
        
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
var t=x(a);
//satin alma
/*
var session="userName";//hangi user güncellencek
var a="cow";
router.post('/create',function(req,res,next){
    fs.readFile('./members.json','utf8',function(err,data){
      if(err) throw err
  
      var dizi=JSON.parse(data);
      for(var i=0;i<dizi.members.length;i++){
            console.log(i+"  "+dizi.members[i].userName+"=="+session);
            if(dizi.members[i].userName==session){
                 switch(hayvan){
                     case "cow":
                            if(dizi.members[i].resources.coin>=50){
                                dizi.members[i].resources.cow.push({boughtTime:new Date()});
                            }else{  alert("Yeterli Coin yok..");}                            
                            break;
                     case "chicken":
                            if(dizi.members[i].resources.coin>=20){
                                dizi.members[i].resources.chicken.push({boughtTime:new Date()});
                            }else{  alert("Yeterli Coin yok..");}                            
                            break;
                     case "bee":
                            if(dizi.members[i].resources.coin>=5){
                                dizi.members[i].resources.bee.push({boughtTime:new Date()});
                            }else{  alert("Yeterli Coin yok..");}                            
                            break;
                     case "seed":
                            if(dizi.members[i].resources.coin>=1){
                               dizi.members[i].resources.seed+=1;
                               dizi.members[i].resources.coin-=1;
                            }else{  alert("Yeterli Coin yok..");}                            
                           break;
                     default:
                            break;
                 }
            }  
        }  
      fs.writeFile('./veri.json',JSON.stringify(dizi),'utf8',
      function(err) {
          if (err) throw err        
          });
      });    
    //res.redirect("/users");
  });
*/