var primero ='D|00001659|TEPIC, NAY.   |014|002|';
var fechas ='|22/02/2017';
var formaPago='|001|';



function leer(){
    var fs = require("fs");
    fs.readFile('BANCO NUEVO.TXT', 'utf8', (err, data) => {
        if (err) throw err;
        var arreglo= data.split('\n');
        var final='';
        //var pieza = arreglo.slice(0,2);
        //console.log(arreglo);
        
        //for(var i=0;i<arreglo.length;i++){
            for(var i=0;i<10;i++){        
            //console.log(i);
            var signo=arreglo[i][72]+'|             ';
            var importe=arreglo[i].slice(73,85);
            var puntodec=arreglo[i].slice(85,87)
            importe= parseInt(importe,10);
            if(importe<10){
                importe='$'+importe+'.'+puntodec+'     ';
            }else if(importe<100){
                importe='$'+importe+'.'+puntodec+'    ';
            }else if(importe>100&&importe<1000){
                importe='$'+importe+'.'+puntodec+'   ';
            }else if(importe>=1000&&importe<10000){
                var temporal1=arreglo[i][81];
                var temporal2=arreglo[i].slice(82,85);
                importe='$'+temporal1+','+temporal2+'.'+puntodec+' ';
            }else if(importe>=10000){
                var temporal1=arreglo[i].slice(80,82);
                var temporal2=arreglo[i].slice(82,85);
                importe='$'+temporal1+','+temporal2+'.'+puntodec;
            }
            
        
            final=final+primero+fechas+fechas+fechas+'|'+signo+importe+formaPago+'\n';
            
        }
        console.log(final);

    });
}
module.exports.leer=leer;