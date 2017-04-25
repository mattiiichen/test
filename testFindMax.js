var arr = [1, 45, 23, 3, 6, 555, 2,777, 7, 234, 56,666];


Array.prototype.max = function () {

    var max = this[0];

    for (var i = 1; i < this.length; i++) {

        if (this[i] > max) {
            max = this[i];
           
        }
      
    }

    return max;
};

console.log(arr.max()); 