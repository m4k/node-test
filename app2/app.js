//var fs = require('fs');

/*console.time('Assincrono');
var counter = 0;

for(var i =0; i < 1000; i++){
  fs.readFile('my_file.txt', function (err, data){
    if(err){
      return console.error(err);
    }
    counter++;
    console.log("Assincrono: " + data.toString());
    if (counter === 1000) {
      console.timeEnd('Assincrono');
    }
  });
}*/
//81ms

/*console.time('Sincrono');
for (var i = 0; i < 1000; i++) {
  var data = fs.readFileSync('my_file.txt');
  console.log('Sincrono: ' + data);
}
console.timeEnd('Sincrono');
*/
//22ms
var fs = require("fs"),
  Promise = require('promise');

function read(file){
  return new Promise(function(fulfill, reject){
    fs.readFile(file, function(err, data){
      if (err) {
        reject();
      }else{
        fulfill(data.toString());
      }
    });
  });
}

read('my_file.txt')
.then((data)=>{
  console.log(data);
  return '111111';
})
.then((data)=>{
  console.log(data);
  return '222222';
})
.then((data)=>{
  console.log(data);
  return '333333';
})
.done((data)=>{
  console.log(data);
})
