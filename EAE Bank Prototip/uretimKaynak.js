var express=require('express');
var router=express.Router();
var fs=require("fs");
var uretim=require('./uretimZaman.js');


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
                    var dif = uretim.diffMin(now, btime);
                    console.log("  ilk "+btime+"  now  "+now);
                    console.log("  "+dif);
                    var milk=uretim.cowMilk(dif);
                    console.log("sut miktari   "+milk);
                    dizi.members[i].resources.milk+=milk;
                }
            }}
            //arı
            {if(dizi.members[i].resources.bee==null){
                //alert("arı yok");  console.log("arı yok");
              }else {
                  for(var j=0;j<dizi.members[i].resources.bee.length;j++){
                      
                      var btime=new Date(dizi.members[i].resources.bee[j].boughtTime);
                      var now = new Date();
                      var dif = uretim.diffMin(now, btime);
                      console.log("  ilk "+btime+"  now  "+now);
                      console.log("  "+dif);
                      var bal=uretim.beeHoney(dif);
                      console.log("bal miktari   "+bal);
                      dizi.members[i].resources.honey+=bal;
                  }
              }}
              //tavuk
              {if(dizi.members[i].resources.chicken==null){
                //alert("tavuk yok");  console.log("tavuk yok");
              }else {
                  for(var j=0;j<dizi.members[i].resources.chicken.length;j++){
                      
                      var btime=new Date(dizi.members[i].resources.chicken[j].boughtTime);
                      var now = new Date();
                      var dif = uretim.diffMin(now, btime);
                      console.log("  ilk "+btime+"  now  "+now);
                      console.log("  "+dif);
                      var egg=uretim.chickenEgg(dif);
                      console.log("yumurta miktari   "+egg);
                      dizi.members[i].resources.egg+=egg;
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
    
        var dizi=JSON.parse(data);
        for(var i=0;i<dizi.members.length;i++){
            //inek
            {if(dizi.members[i].resources.cow==null){
              //alert("inek yok");  console.log("inek yok");
            }else {
                for(var j=0;j<dizi.members[i].resources.cow.length;j++){
                    
                    var btime=new Date(dizi.members[i].resources.cow[j].boughtTime);
                    var now = new Date();
                    var dif = uretim.diffMin(now, btime);
                    console.log("  ilk "+btime+"  now  "+now);
                    console.log("  "+dif);
                    var milk=uretim.cowMilk(dif);
                    console.log("sut miktari   "+milk);
                    dizi.members[i].resources.milk+=milk;
                }
            }}
            //arı
            {if(dizi.members[i].resources.bee==null){
                //alert("arı yok");  console.log("arı yok");
              }else {
                  for(var j=0;j<dizi.members[i].resources.bee.length;j++){
                      
                      var btime=new Date(dizi.members[i].resources.bee[j].boughtTime);
                      var now = new Date();
                      var dif = uretim.diffMin(now, btime);
                      console.log("  ilk "+btime+"  now  "+now);
                      console.log("  "+dif);
                      var bal=uretim.beeHoney(dif);
                      console.log("bal miktari   "+bal);
                      dizi.members[i].resources.honey+=bal;
                  }
              }}
              //tavuk
              {if(dizi.members[i].resources.chicken==null){
                //alert("tavuk yok");  console.log("tavuk yok");
              }else {
                  for(var j=0;j<dizi.members[i].resources.chicken.length;j++){
                      
                      var btime=new Date(dizi.members[i].resources.chicken[j].boughtTime);
                      var now = new Date();
                      var dif = uretim.diffMin(now, btime);
                      console.log("  ilk "+btime+"  now  "+now);
                      console.log("  "+dif);
                      var egg=uretim.chickenEgg(dif);
                      console.log("yumurta miktari   "+egg);
                      dizi.members[i].resources.egg+=egg;
                  }
              }}      
                
    //res.redirect("/users");
  });
*/