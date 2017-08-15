//引用 nodemailer
var nodemailer = require('nodemailer');
var moment = require('moment');//時間戳記使用

//宣告發信物件
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'agrouseriii@gmail.com',
        pass: 'rhix9UVG7L'
    }
});

// setup e-mail data
var mailOptions = {
    from: '"農業4.0共通平台" <agrouseriii@gmail.com>', // sender address (who sends)
    to: 'dloygtw.il@gmail.com', // list of receivers (who receives)
    subject: '國興資料警示', // Subject line
    text: '國興資料警示', // plaintext body
    html: '你好，這是通知國興資料未正確進入農業共通平台的警示通知' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent on '+moment().format()+' info:  '+ info.response);
});













//
//
//
//
// var options = {
//     //寄件者
//     from: 'agrouseriii@gmail.com',
//     //收件者
//     to: 'dloygtw.il@gmail.com',
//     //副本
//     //cc: 'account3@gmail.com',
//     //密件副本
//    // bcc: 'account4@gmail.com',
//     //主旨
//     subject: '這是 node.js 發送的測試信件', // Subject line
//     //純文字
//     text: 'Hello world2', // plaintext body
//     //嵌入 html 的內文
//     html: '<h2>Why and How</h2> <p>The <a href="http://en.wikipedia.org/wiki/Lorem_ipsum" title="Lorem ipsum - Wikipedia, the free encyclopedia">Lorem ipsum</a> text is typically composed of pseudo-Latin words. It is commonly used as placeholder text to examine or demonstrate the visual effects of various graphic design. Since the text itself is meaningless, the viewers are therefore able to focus on the overall layout without being attracted to the text.</p>',
//     //附件檔案
//     attachments: [ {
//         filename: 'text01.txt',
//         content: '聯候家上去工的調她者壓工，我笑它外有現，血有到同，民由快的重觀在保導然安作但。護見中城備長結現給都看面家銷先然非會生東一無中；內他的下來最書的從人聲觀說的用去生我，生節他活古視心放十壓心急我我們朋吃，毒素一要溫市歷很爾的房用聽調就層樹院少了紀苦客查標地主務所轉，職計急印形。團著先參那害沒造下至算活現興質美是為使！色社影；得良灣......克卻人過朋天點招？不族落過空出著樣家男，去細大如心發有出離問歡馬找事'
//     }, {
//         filename: 'aaa.PNG',
//         path: '/aaa.PNG'
//     }]
// };
//
// //發送信件方法
// transporter.sendMail(options, function(error, info){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('訊息發送: ' + info.response);
//     }
// });