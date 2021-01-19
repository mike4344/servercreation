let http = require('http');

http.createServer((req, res) => {

    res.end()
}).listen(3000, function(){
console.log('listening on port: 3000...')
})
