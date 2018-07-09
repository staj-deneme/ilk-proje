var fs=require("fs");

fs.readFile('./history.json','utf8',function(err,data){
    if(err) throw err

    var dizi=JSON.parse(data);
    
    
   // var del=dizi.members[0].resources.cow.splice(0,1);
    
    fs.writeFile('./history.json',JSON.stringify(dizi),'utf8',
    function(err) {
        if (err) throw err        
        });
    
});          