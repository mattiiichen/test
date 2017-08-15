var fs = require('fs');
var csv = require('fast-csv');
var uuid = require('node-uuid');
var mysql = require('mysql');
var parse = require('csv-parse');

var datas = [];



var stream = fs.createReadStream("aa.csv");

// csv
//     .fromStream(stream, {headers : true})
//     .on("data", function(data){
//         console.log(data);
//     })
//     .on("end", function(){
//         console.log("done");
//     });


//
// csv
//     .fromStream(stream, {headers : ["市縣名稱", "區域名稱", "學校名稱","供餐日期", "供餐業者", "供餐業者統一編號","食材供應商名稱", "食材供應商統編", "食材名稱","調味料供應商名稱","調味料供應商統編","調味料名稱","認證標章","認證號碼"]})
//     .on("data", function(data){
//         console.log(data);
//     })
//     .on("end", function(){
//         console.log("done");
//     });


csv
    .fromStream(stream, {headers : true})
    .validate(function(data){
        // return data.食材名稱 = "肉絲"; //all persons must be under the age of 50
    })
    .on("data-invalid", function(data){
        console.log("in-vaild");
        console.log(data);
        
    })
    .on("data", function(data){
        console.log("vaild");
        console.log(data);
    })
    .on("end", function(){
        console.log("done");
    });
