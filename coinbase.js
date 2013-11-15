var http = require('https');
var options = {
host: 'coinbase.com',
path: '/api/v1/prices/spot_rate'
};

getPrice = function(response) {
var str = '';
response.on('data', function(chunk) {
  str += chunk;
});
;

response.on('end', function(){
result = JSON.parse(str);
console.log("Current Bitcoin Price on CoinBase: " + result.amount);
});
};

http.request(options, getPrice).end();
