var express=require('express');
var router=express.Router();
var fs=require("fs");

function x(){
    fs.readFile('./members.json','utf8',function(err,data){
        if(err) throw err
        var totalCoin=0;
        
        var dizi=JSON.parse(data);
        for(var i=0;i<dizi.members.length;i++){
            
            totalCoin+=dizi.members[i].resources.coin;
        } 
    console.log(totalCoin);
                
})}
var a=x();
//satin alma
/*

router.post('/create',function(req,res,next){
    fs.readFile('./members.json','utf8',function(err,data){
      if(err) throw err
  
      var dizi=JSON.parse(data);
      for(var i=0;i<dizi.members.length;i++){
          
            
        }  
        
      fs.writeFile('./members.json',JSON.stringify(dizi),'utf8',
      function(err) {
          if (err) throw err        
          });
      });    
    //res.redirect("/users");
  });
*/