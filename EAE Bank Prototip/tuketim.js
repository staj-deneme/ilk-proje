//hayvanların yem tüketimi

var express=require('express');
var router=express.Router();
var fs=require("fs");
var tuketim=require('./uretimZaman.js');


var d1=new Date("0");
var d2=new Date();

var dif=tuketim.diffMin(d2,d1);
console.log(dif);

function x(){
    fs.readFile('./members.json','utf8',function(err,data){
        if(err) throw err
    
        var dizi=JSON.parse(data);
        for(var i=0;i<dizi.members.length;i++){
            //inek
            {if(dizi.members[i].resources.cow==null){
              //alert("inek yok");  console.log("inek yok");
            }else {
                for(var j=0;j<dizi.members[i].resources.cow.length;j++){
                    var btime=new Date(dizi.members[i].resources.cow[j].boughtTime);
                    var now = new Date();
                    var dif = tuketim.diffMin(now, btime);
                    console.log("  ilk "+btime+"  now  "+now);
                    console.log("  "+dif);
                    if(dizi.members[i].resources.seed>=tuketim.eatSeedCow(dif)){
                        console.log("besle");
                        dizi.members[i].resources.seed-=tuketim.eatSeedCow(dif);
                    }else{  console.log("Yeterli yem yok...");  }
                    
                }
            }}
            //arı
            {if(dizi.members[i].resources.bee==null){
                //alert("arı yok");  console.log("arı yok");
              }else {
                  for(var j=0;j<dizi.members[i].resources.bee.length;j++){
                      
                      var btime=new Date(dizi.members[i].resources.bee[j].boughtTime);
                      var now = new Date();
                      var dif = tuketim.diffMin(now, btime);
                      console.log("  ilk "+btime+"  now  "+now);
                      console.log("  "+dif);
                      if(dizi.members[i].resources.seed>=tuketim.eatSeedBee(dif)){
                        console.log("besle");
                        dizi.members[i].resources.seed-=tuketim.eatSeedBee(dif);
                    }else{  console.log("Yeterli yem yok...");  }                      
                  }
              }}
              //tavuk
              {if(dizi.members[i].resources.chicken==null){
                //alert("tavuk yok");  console.log("tavuk yok");
              }else {
                  for(var j=0;j<dizi.members[i].resources.chicken.length;j++){
                      
                      var btime=new Date(dizi.members[i].resources.chicken[j].boughtTime);
                      var now = new Date();
                      var dif = tuketim.diffMin(now, btime);
                      console.log("  ilk "+btime+"  now  "+now);
                      console.log("  "+dif);
                      if(dizi.members[i].resources.seed>=tuketim.eatSeedChicken(dif)){
                        console.log("besle");
                        dizi.members[i].resources.seed-=tuketim.eatSeedChicken(dif);
                    }else{  console.log("Yeterli yem yok...");  }                      
                  }
              }}      
            
        }


        
        fs.writeFile('./members.json',JSON.stringify(dizi),'utf8',
        function(err) {
            if (err) throw err        
            });
        });
           
}
var a=x();

//uretim kaynak
/*
router.get('/create',function(req,res,next){
    fs.readFile('./members.json','utf8',function(err,data){
        if(err) throw err
            for(var i=0;i<dizi.members.length;i++){
            //inek
            {if(dizi.members[i].resources.cow==null){
              //alert("inek yok");  console.log("inek yok");
            }else {
                for(var j=0;j<dizi.members[i].resources.cow.length;j++){
                    var btime=new Date(dizi.members[i].resources.cow[j].boughtTime);
                    var now = new Date();
                    var dif = tuketim.diffMin(now, btime);
                    console.log("  ilk "+btime+"  now  "+now);
                    console.log("  "+dif);
                    if(dizi.members[i].resources.seed>=tuketim.eatSeedCow(dif)){
                        console.log("besle");
                        //dizi.members[i].resources.seed-=tuketim.eatSeedCow(dif);
                    }else{  console.log("Yeterli yem yok...");  }
                    
                }
            }}
            //arı
            {if(dizi.members[i].resources.bee==null){
                //alert("arı yok");  console.log("arı yok");
              }else {
                  for(var j=0;j<dizi.members[i].resources.bee.length;j++){
                      
                      var btime=new Date(dizi.members[i].resources.bee[j].boughtTime);
                      var now = new Date();
                      var dif = tuketim.diffMin(now, btime);
                      console.log("  ilk "+btime+"  now  "+now);
                      console.log("  "+dif);
                      if(dizi.members[i].resources.seed>=tuketim.eatSeedBee(dif)){
                        console.log("besle");
                        dizi.members[i].resources.seed-=tuketim.eatSeedBee(dif);
                    }else{  console.log("Yeterli yem yok...");  }                      
                  }
              }}
              //tavuk
              {if(dizi.members[i].resources.chicken==null){
                //alert("tavuk yok");  console.log("tavuk yok");
              }else {
                  for(var j=0;j<dizi.members[i].resources.chicken.length;j++){
                      
                      var btime=new Date(dizi.members[i].resources.chicken[j].boughtTime);
                      var now = new Date();
                      var dif = tuketim.diffMin(now, btime);
                      console.log("  ilk "+btime+"  now  "+now);
                      console.log("  "+dif);
                      if(dizi.members[i].resources.seed>=tuketim.eatSeedChicken(dif)){
                        console.log("besle");
                        dizi.members[i].resources.seed-=tuketim.eatSeedChicken(dif);
                    }else{  console.log("Yeterli yem yok...");  }                      
                  }
              }}      
            
        }

        var dizi=JSON.parse(data);
        
                
    //res.redirect("/users");
  });
*/