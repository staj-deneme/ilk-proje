var express=require('express');
var router=express.Router();
var fs=require("fs");
var uretim=require('./uretimZaman.js');


function x(){
    fs.readFile('./history.json','utf8',function(err,data){
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
                    if(dif>=30){                        
                        var del=dizi.members[0].resources.cow.splice(j,1);
                    }                  
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
                      if(dif>=15){                        
                        var del=dizi.members[0].resources.bee.splice(j,1);
                        } 
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
                      if(dif>=10){                        
                        var del=dizi.members[0].resources.chicken.splice(j,1);
                        } 
                    
                  }
              }}      
            
        }


        
        fs.writeFile('./history.json',JSON.stringify(dizi),'utf8',
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
            
        }      
                
    //res.redirect("/users");
  });
*/