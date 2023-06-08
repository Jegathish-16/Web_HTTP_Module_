const http = require('http');

var fs = require('fs');

http.createServer((request, response) => {
    
    const http = require('http');

    
        
    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
      });
      
       
    
    
    
   


}).listen(8082)

