/**
 * Created by mattchen on 2017/1/21.
 */
var Q = require('q');


const fs = require('fs');
const util = require('util');
var importFile = 'C:\\inetpub\\ftproot\\LocalUser\\agrouser\\2017-01-16-農試工字第1052146714號(生產追溯).xlsx';


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
})