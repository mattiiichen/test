/**
 * Created by Administrator on 2017/8/14.
 */
router.get('/file/:fileName', function(req, res, next) {
    // 实现文件下载
    var fileName = req.params.fileName;
    var filePath = path.join(__dirname, fileName);
    var stats = fs.statSync(filePath);
    if(stats.isFile()){
        res.set({
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': 'attachment; filename='+fileName,
            'Content-Length': stats.size
        });
        fs.createReadStream(filePath).pipe(res);
    } else {
        res.end(404);
    }
});