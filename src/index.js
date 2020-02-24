
exports.min = function min (array) {
    
    if(array == undefined || array.length == 0){
        return 0;
    } else
    {
        array.sort((a , b) => a - b);
        return array[0];
    }  
}

exports.max = function max (array) {
    if(array == undefined || array.length == 0){
        return 0;
    } else
    {
    array.sort((a , b) => b - a);
    return array[0];
    }
}

exports.avg = function avg (array) {
    if(array == undefined || array.length == 0){
        return 0;
    } else
    {
    var sum = 0;
    var average = 0;
    array.map(function(item){
    sum+=item;
    })
    average = sum/array.length;
    return average;
    }
}
