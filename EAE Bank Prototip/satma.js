var express=require('express');
var router=express.Router();
var fs=require("fs");
var sell=require("./uretimZaman.js");

var session="userName";
var a="milk";
//mal={"egg","milk","honey"}
function x(mal){
    fs.readFile('./members.json','utf8',function(err,data){
        if(err) throw err
    
        var dizi=JSON.parse(data);
        for(var i=0;i<dizi.members.length;i++){
            
            if(dizi.members[i].userName==session){
                switch(mal){
                    case "milk":
                           if(dizi.members[i].resources.milk>0){                               
                              var sutMiktari= dizi.members[i].resources.milk;                              
                              dizi.members[i].resources.coin+=sell.sellMilk(sutMiktari);
                              dizi.members[i].resources.milk=0;
                             for(var j=0;j<dizi.members[i].resources.cow.length;j++){
                                dizi.members[i].resources.cow[j].boughtTime=new Date();
                             }
                           }else{  alert("Sut yok..");}                            
                           break;
                    case "egg":
                           if(dizi.members[i].resources.coin>0){
                               var yumurtaMiktari= dizi.members[i].resources.egg;
                               dizi.members[i].resources.coin+=sell.sellEgg(yumurtaMiktari);
                               dizi.members[i].resources.egg=0;
                               for(var j=0;j<dizi.members[i].resources.chicken.length;j++){
                                dizi.members[i].resources.chicken[j].boughtTime=new Date();
                             }
                           }else{  alert("Yumurta yok..");}                            
                           break;
                    case "honey":
                           if(dizi.members[i].resources.coin>0){
                            var balMiktari= dizi.members[i].resources.honey;
                            dizi.members[i].resources.coin+=sell.sellHoney(balMiktari);
                            dizi.members[i].resources.honey=0;
                            for(var j=0;j<dizi.members[i].resources.bee.length;j++){
                                dizi.members[i].resources.bee[j].boughtTime=new Date();
                             }                           
                           }else{  alert("Bal yok..");}                            
                           break;
                    case "cow": //inek
                            {if(dizi.members[i].resources.cow==null){
                                //alert("inek yok");  console.log("inek yok");
                            }else {
                                for(var j=0;j<dizi.members[i].resources.cow.length;j++){
                      
                                    //dizi.members[i].resources.cow[j].boughtTime
                                
                                    }
                            }}
                            break;
                    case "bee"://arı
                            { if(dizi.members[i].resources.bee==null){
                                //alert("arı yok");  console.log("arı yok");
                                }else {
                                    for(var j=0;j<dizi.members[i].resources.bee.length;j++){
                                        
                                        //dizi.members[i].resources.bee[j].boughtTime
                                       
                                    }
                                }}
                            break;
                    case "chicken"://tavuk
                            {if(dizi.members[i].resources.chicken==null){
                            //alert("tavuk yok");  console.log("tavuk yok");
                            }else {
                                for(var j=0;j<dizi.members[i].resources.chicken.length;j++){
                                    //dizi.members[i].resources.chicken[j].boughtTime                                   
                                }
                            }}
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
        });           
}
var t=x(a);
//satin alma
/*
var session="userName";//hangi user güncellencek
var a="milk";
//mal={"egg","milk","honey"}
router.post('/create',function(req,res,next){
    fs.readFile('./members.json','utf8',function(err,data){
      if(err) throw err
  
      var dizi=JSON.parse(data);
      for(var i=0;i<dizi.members.length;i++){
            
            if(dizi.members[i].userName==session){
                switch(mal){
                    case "milk":
                           if(dizi.members[i].resources.milk>0){                               
                              var sutMiktari= dizi.members[i].resources.milk;                              
                              dizi.members[i].resources.coin+=sell.sellMilk(sutMiktari);
                              dizi.members[i].resources.milk=0;
                             
                           }else{  alert("Sut yok..");}                            
                           break;
                    case "egg":
                           if(dizi.members[i].resources.coin>0){
                               var yumurtaMiktari= dizi.members[i].resources.egg;
                               dizi.members[i].resources.coin+=sell.sellEgg(yumurtaMiktari);
                               dizi.members[i].resources.egg=0;

                           }else{  alert("Yumurta yok..");}                            
                           break;
                    case "bee":
                           if(dizi.members[i].resources.coin>0){
                            var balMiktari= dizi.members[i].resources.honey;
                            dizi.members[i].resources.coin+=sell.sellHoney(balMiktari);
                            dizi.members[i].resources.honey=0;
                           }else{  alert("Bal yok..");}                            
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
      });    
    //res.redirect("/users");
  });
*/