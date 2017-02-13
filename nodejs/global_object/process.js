process.on('exit',function(code){

setTimeout(function(){console.log();},0);
console.log('exit:',code);
});

process.stdout.write("Hello World"+"\n");

process.argv.forEach(function(val,index){
console.log(index);
console.log(val);
});

