var fs = require('fs');
var csv = require('fast-csv');
var uuid = require('node-uuid');
var mysql = require('mysql');

var datas = [];
var file = 'bb.csv';


var pool = mysql.createPool({
    host: '140.110.30.144',
    port: 3306,
    user: 'root',
    password: 'rootpswd',
    database: 'opendata',
    connectionLimit: 100 //important
});

// var stream = fs.createReadStream(file);
//
// var csvStream = csv()
//     .on("data", function(data){
//         console.log(data);
//     })
//     .on("end", function(){
//         console.log("done");
//     });
//
// stream.pipe(csvStream);


function dataSync(data, cb) {

    // if (data[i] !== '市縣名稱') {
    //
    //     var school = data[i];
    //     var school_type = "";
    //     // console.log(data[2]);
    //     if (school.indexOf("國小") != -1) {
    //         school_type = "1";
    //     } else if (school.indexOf("國中") != -1) {
    //         school_type = "2";
    //     } else {
    //         school_type = "3";
    //     }
    //
    //     datas.push([
    //         uuid.v4(),
    //         data[0], //市縣名稱
    //         data[1], //區域名稱
    //         data[2], //學校名稱
    //         school_type,
    //         data[3].replace(/\//g, "-"), //供餐日期
    //         data[4], //供餐業者
    //         data[5].replace(/["']/g, "").replace("=", ""), //供餐業者統一編號
    //         data[6], //食材供應商名稱
    //         data[7].replace(/["']/g, "").replace("=", ""), //食材供應商統編
    //         data[8], //食材名稱
    //         data[9], //調味料供應商名稱
    //         data[10].replace(/["']/g, "").replace("=", ""), //調味料供應商統編
    //         data[11], //調味料名稱
    //         data[12], //認證標章
    //         data[13].replace(/["']/g, "").replace("=", "") //認證號碼
    //     ]);
    //
    //     console.log(datas)
    // }
    
    // console.log(data);
    cb(data);

}


pool.getConnection(function (err, connection) {
var i = 0;
    fs.createReadStream('D:\\test\\' + file, {encoding: 'utf-8'})
        .pipe(csv())
        .on("data", function (data) { //開始forloop 一行資料是一個data
            var uuid_id = uuid.v4(); //產生table的pk
            // var supply_date = new Date(parseInt(data[3].split('/')[0]), parseInt(data[3].split('/')[1]) - 1, parseInt(data[3].split('/')[2]));
     console.log(data.length);
            // dataSync(data, function () {
                // var sql = "insert into schoollunch (id, county, town, school, school_type, supply_date, lunch_supplier, lunch_supplier_tax_no, ingredients_supplier, ingredients_supplier_tax_no, ingredients, seasoning_supplier, seasoning_supplier_tax_no, seasoning, label, label_no) values ?";
                // connection.query(sql, [datas], function (err, res) {
                //     if (err) throw err;
                //     console.log(res);
                //     connection.release();
                // });
                // console.log("aaaa"+data + i++)
           
                
            // })


        })
        .on("end", function () {
            // console.log(datas);
            console.log("datas = " + datas.length);
            // console.log("讀檔完成，開始寫入DB");


            //連接池中取得連線，連線在池中可以保持不斷線


            // if (err) throw err;
            //
            // 執行crops_veg bulk insert(大批寫入) sql


        });
});