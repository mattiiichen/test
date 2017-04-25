/**
 * Created by Administrator on 2017/4/25.
 */
var debug = require("debug")("mydebug:http")
    , work = require("./work")
    , http = require("http");


http.createServer(function (req, res) {
    debug(req.method + ' ' + req.url);
    res.end('hello\n');
}).listen(3000, function(){
    debug("listening");
});
