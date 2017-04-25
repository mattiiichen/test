var data = [{label:'test1', file:[{name:'1'},{name:'2'},{name:'3'}]},{label:'test2', file:[{name:'a'},{name:'b'},{name:'c'}]},{label:'test3', file:[{name:'x'},{name:'y'},{name:'z'}]}];


dataSync(data,  function() {
    console.log('OKOKO!!!');
});

function dataSync(data, cb){

    function loop(data, i ){

        if(i < data.length) {

            console.log(data[i].label);
            dataSync2(data[i].file, function(){
                loop(data, ++i);
            })


        } else {
            cb();
        }

    }
    loop(data, 0);

}

function dataSync2(data, cb){

    function loop2(data, j ){

        if(j < data.length) {

            console.log(data[j].name);


            loop2(data, ++j);
        } else {
            cb();
        }

    }
    loop2(data, 0);

}