/**
 * Created by Administrator on 2017/4/18.
 */

var url = 'http://www.tafte-poultry.org.tw/Data/Query';
var http = require('http')
    , BufferHelper = require('bufferhelper');

var iconv = require('iconv-lite');

http.get(url, function (res) {
    var bufferhelper = new BufferHelper();


    res.on('data', function (chunk) {
        bufferhelper.concat(chunk);
    });
    res.on('end', function () {
        console.log(iconv.decode(bufferhelper.toBuffer(), 'Big5'));
    });
});