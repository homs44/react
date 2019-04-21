
// val = function(){console.log('aaa')}
function myTestFunc(cb){
    console.log("myTestFunc")
    cb();
}


var printA = function(){
    console.log('a')
};

myTestFunc(printA);