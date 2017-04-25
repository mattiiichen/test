/**
 * Created by mattchen on 2017/1/21.
 */
var Q = require('q');


const fs = require('fs');

// var importFile = '/Users/mattchen/Desktop/test/inetpub/ftproot/LocalUser/agrouser/2016-11-30-農試工字第1052146714號.xlsx';
var importFile = 'D:/test/Files/2017-03-10-農試工字第1052146714號(生產追溯).xlsx';
// console.log(importFile);

Q.promise(function (resolve, reject) {
    fs.exists(importFile, function (exists) {

        if (exists) {
            console.log('true');
            resolve('test11111');
        } else {
            console.log('false');
            reject(exists);
        }
    });
}).then(function (value) {//value = 成功或拒絕的訊息
    console.log('aaaaaaaaaaa');
    console.log(value);
    return Q.promise(function (resolve, reject) {
        fs.exists(importFile, function (exists) {
            if (exists) {
                console.log('true2');
                resolve('test22222');
            } else {
                console.log('false2');
                reject(exists);
            }
        });
    })
}).then(function (value) {
    console.log(value);
    console.log('bbbbbbbbb');
});