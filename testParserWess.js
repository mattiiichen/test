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
    var myResult = {};

    data.forEach(function (rowdata) {
        promiseArr.push(new Promise(function (resolve, reject) {
            request({
                url: rowdata.labels,
                method: "GET",
            }, function (error, response, body) {
                if (error) {
                    resolve('xxx');
                } else {
                    myResult[rowdata.labels] = 'aaa';
                    resolve('aaa');
                }
            });
        }));
    });
    Q.all(promiseArr).then(function (results) {
        console.log(myResult);
    });
});
