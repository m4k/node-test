var fs = require('fs');

fs.readFile('my_file.txt', function(err, data){
  if(err){
    console.error(err);
  }

  console.log(data.toString());
});

var data = fs.readFileSync('my_file.txt');
console.log(data.toString());
