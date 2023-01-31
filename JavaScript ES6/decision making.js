console.log(`multiply(10) => ${multiply(10)}`);

function multiply(val){
    if(val<=1){
        return val;
    }
    return val * multiply(val-1) 
}