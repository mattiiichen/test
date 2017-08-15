var fs = require('fs');
var csv = require('fast-csv');
var async = require('async');
var mysql = require('mysql');
var cp = require('child_process').exec;
var iconv = require('iconv-lite');// Big5 轉碼用


//建立連接池
var connection    = mysql.createPool({
    host: '140.110.30.144',
    port: 3306,
    user: 'root',
    password: 'rootpswd',
    database: 'opendata',
    connectionLimit: 100 //important
});

var uuid = require('node-uuid');


var datas = [];
var counties = ["宜蘭縣", "花蓮縣", "金門縣", "南投縣", "屏東縣", "苗栗縣", "桃園市",
    "高雄市", "基隆市", "連江縣", "雲林縣", "新北市", "新竹市", "新竹縣", "嘉義市",
    "嘉義縣", "彰化縣", "臺中市", "臺北市", "臺東縣", "臺南市", "澎湖縣"];

var countiesEN = ["ILN", "HWA", "KMN", "NTO", "PCH", "MAL", "TYC",
    "KHH", "KLU", "LNN", "YUN", "NTC", "HSC", "HSH", "CYI",
    "CHY", "CWH", "TXG", "TPE", "TTT", "TNN", "PEH"];

var fileNameBase = "國中小午餐食材及供應商資料集_";
var fileExt = ".csv";

var file = fileNameBase + "澎湖縣" + fileExt;
var Files = new Array();

//
//
// var sqls = new Array();
//
//
// counties.forEach(function(item,index) {
//     sqls.push("LOAD DATA LOCAL INFILE \'D:\\\\junior_Ingredient\\\\20170301_20170331"+ countiesEN[index] +".csv\' INTO TABLE opendata.schoollunch_junior_ingredients CHARACTER SET UTF8 FIELDS TERMINATED BY \',\' ENCLOSED BY \'\"\' LINES TERMINATED BY \'\\n\' IGNORE 1 LINES (county,town,school,supply_date,lunch_supplier,lunch_supplier_tax_no,ingredients_supplier,ingredients_supplier_tax_no,ingredients,seasoning_supplier,seasoning_supplier_tax_no,seasoning,label,label_no) set supply_date = STR_TO_DATE(supply_date, \'%Y-%m-%d\'),school_type = CASE WHEN school like '%國小%' THEN 1 WHEN school like \'%國(中)小%\' THEN 1 WHEN school like \'%國中%\' THEN 2 WHEN school like \'%國中(小)%\' THEN 2 WHEN school like \'%小學%\' THEN 1 WHEN school like \'%中學%\' THEN 2 ELSE 0 END, school_id = CASE WHEN school like '%附設國中' THEN (select schoolID from opendata.school_senior_nums where (schoolName like concat(\"%\",SUBSTR(school,-8,4),\"%\") ) and countyName = county) WHEN school like '%國小' THEN (select schoolID from opendata.school_junior_nums where (schoolName like if(CHARACTER_LENGTH(SUBSTRING(school,7)) > 4, concat(\"%\",SUBSTR(school,-5,5),\"%\"),(select if((select count(*) from opendata.school_junior_nums where schoolName like concat(\"%\",SUBSTR(school,-4,4),\"%\") and countyName = county) > 1,concat(\"%\",SUBSTR(school,-7,5),\"%\"),concat(\"%\",SUBSTR(school,-4,4),\"%\") ))) or schoolName like concat(\"%\",SUBSTR(REPLACE(school,\"國小\",\"國(中)小\"),-7,7))) and countyName = county)WHEN school like '%國中' THEN (select schoolID from opendata.school_senior_nums where (schoolName like concat(\"%\",SUBSTR(school,-4,4)) or schoolName like concat(\"%\",SUBSTR(REPLACE(school,\"國中\",\"國中(小)\"),-7,7))) and countyName = county) WHEN school like '%國中(小)' THEN (select schoolID from opendata.school_senior_nums where (schoolName like if(CHARACTER_LENGTH(SUBSTRING(school,7)) > 11, concat(\"%\",SUBSTR(school,-12,5),\"%\"), concat(\"%\",SUBSTR(school,-7,4),\"%\")) ) and countyName = county) WHEN school like '%國(中)小' THEN (select schoolID from opendata.school_junior_nums where (schoolName like concat(\"%\",SUBSTR(school,-7,4),\"%\") ) and countyName = county) WHEN school like '%小學%' THEN (select schoolID from opendata.school_junior_nums where schoolName like if(CHARACTER_LENGTH(SUBSTRING(school,7)) > 12, concat(\"%\",SUBSTR(school,-13,5),\"%\"), concat(\"%\",SUBSTR(school,-6,2),\"%\")) and countyName = county) WHEN school like '%中學%' THEN (select schoolID from opendata.school_senior_nums where schoolName like concat(\"%\",SUBSTR(school,-6,2),\"%\") and countyName = county) WHEN school like '%分校%' THEN (select schoolID from opendata.school_senior_nums where schoolName like concat(\"%\",SUBSTR(school,-8,4),\"%\") and countyName = county) ELSE 0 END;");
//
// });

//
//
// async.eachSeries(sqls, function(item, callback) {
//     // 遍歷每像SQL並執行
//     connection.query(item, function(err, results) {
//         if(err) {
//             // 異常後調用callback並傳入err
//             callback(err);
//         } else {
//             console.dir(JSON.stringify(results));
//             // 執行完成後也要調用callback，不需要參數
//             callback();
//         }
//     });
// }, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("SQL全部執行成功");
//     }
// });
//





//
// cp('dir D:\\test\\Files\\10603 /B  /O:N', {encoding: 'big5'}, function (err, stdout) {
//
//
//     var str = iconv.decode(new Buffer(stdout), 'big5');
//     Files = str.split("\r\n")
//     Files.pop();
//
//
//
//     for (i = 0; i < counties.length; i++) {
//         for (j = 0; j < Files.length; j++) {
//             if (i == j) {
//                 var reFileName = Files[j].replace(/([\u4E00-\u9FA5]+\_+[\u4E00-\u9FA5]+)/g, countiesEN[j]);
//
//                 cp('rename D:\\junior_Ingredient\\'+Files[j]+' '+reFileName, {encoding: 'big5'}, function (err, stdout) {
//                     console.log("okok")
//                 });
//                 console.log("222")
//             }
//         }
//     }
//
//
// });