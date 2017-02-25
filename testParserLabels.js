var http = require('http');
var Q = require('q');
var url = 'http://data.coa.gov.tw/Service/OpenData/GAP/GAPClassData.aspx';
var request = require('request');

process.on('uncaughtException', function (err) {
    console.log('*************************************************');
    console.log(err);
});

request({
    url: 'http://data.coa.gov.tw/Service/OpenData/GAP/GAPClassData.aspx',
    method: "GET",
}, function (error, response, body) {
    var data = JSON.parse(body);
    //console.log(data);
    var promiseArr = [];
      var myResult = [];
    // myResult.classNo = rowdata.classNo;
    data.forEach(function (rowdata) {
         
        promiseArr.push(new Promise(function (resolve, reject) {
            request({
                url: rowdata.labels,
                method: "GET",
            }, function (error, response, body) {
                if (error) {
                    resolve('');
                } else {
                       // body.push('aaaa');

                    myResult = JSON.parse(body);
                    myResult.push(rowdata.classNo);
                        resolve(myResult);
                }
            });
        }));
    });
    
    Q.all(promiseArr).then(function (results) {

             console.log(results[1][474]);
    //
    });
});
