/**
 * Created by mattchen on 2017/1/14.
 */
var arr = [1, 45, 23, 3, 6, 555, 2, 777, 7, 234, 56, 666];


Array.prototype.second = function () {

    var max =0;
    var second=0 ;
    for (var i = 0; i < this.length; i++) {
        var n = this[i];
        if (n > max) {
            second = max;
            max = n;

        } else if (n > second) {
            second = n;
        }

    }

    return second;
};

console.log(arr.second()); 