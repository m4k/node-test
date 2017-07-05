var fs = require('fs');

fs.writeFile('my_file.txt','Teste hi', function(err){
  if(err){
    console.error(err);;
  }
  console.log('Arquivo criado!');
});
