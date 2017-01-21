/**
 * Created by mattchen on 2017/1/21.
 */
var Q = require('q');


const fs = require('fs');

var importFile = '/Users/mattchen/Desktop/test/inetpub/ftproot/LocalUser/agrouser/2016-11-30-農試工字第1052146714號.xlsx';
// var importFile = 'C:\\inetpub\\ftproot\\LocalUser\\agrouser\\2016-11-30-農試工字第1052146714號.xlsx';


Q.promise(function (resolve, reject) {
    fs.exists(importFile, function (exists) {

        if (exists) {
            console.log('true');
            resolve('test1');
        } else {
            console.log('false');
            reject(exists);
        }
    });
}).then(function (value) {
    console.log('aaaaaaaaaaa');
    console.log(value);
    return Q.promise(function (resolve, reject) {
        fs.exists(importFile, function (exists) {
            if (exists) {
                console.log('true2');
                resolve('hfdhhh');
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