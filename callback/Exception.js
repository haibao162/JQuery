var e=new Error();
console.log(e);
//同步
function sync(fn) {
    return fn();
}
//callback
function _callback(fn,callback){
callback(fn);
}

function async(fn,callback) {
    // Code execution path breaks here.
    setTimeout(function ()　{
        callback(fn);//callback(fn());出现冒泡异常
    }, 0);
}
try {
	sync(function(){
	console.log("sync");
	});
	_callback(function(){console.log("callback fn");},function(fn){
       fn();
	});
 //    async(function(){console.log("async fn");},function(fn){
 //       fn();
	// });  能够实现异步，即先输出1111
	async(null,function(fn){
       //fn();
	});
    //sync(null); Error:fn is not a function
    console.log(1111);//上一行注释掉则不输出,try catch输出同步
}catch (err) {
    console.log('Error: %s', err.message);
}


function solveBubble(fn,callback) {
    // Code execution path breaks here.
    setTimeout(function(){
        try {
            callback(null, fn());
        } catch (err) {
            callback(err);
        }
    },0);
}

solveBubble(null,function(err,data){
    if (err){
        console.log('Error: %s', err.message);
    } else {
        // Do something.
    }
});
