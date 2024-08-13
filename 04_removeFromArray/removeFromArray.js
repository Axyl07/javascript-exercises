const removeFromArray = function(array, ...args) {
    //args is an array
    let size  = args.length;
    for (let index = 0; index < array.length; index++) {
        let val = args[0];
        if (array[index]===val) {
            array.splice(index,1);
        }
        
    }
    for (let i = 0; i < size; i++) {   
        let value = args[i];
        let pos = array.indexOf(value);
        if (pos>-1) {
            array.splice(pos,1);          
        }
}   
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
