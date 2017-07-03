var counter = (function () {
    var add = 0;
    return function () {
    add = add + 1;
    console.log(add + '\n')
    }
    
})();