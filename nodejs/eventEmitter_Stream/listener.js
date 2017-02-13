var events=require('events');
var eventEmitter=new events.EventEmitter();

// 监听器
var listener1=function listener1(){
console.log('listener1');
}

var listener2=function listener1(){
console.log('listener2');
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection', listener2);
eventEmitter.emit('connection');

//监听器个数
var ListenerCount=require('events').EventEmitter.listenerCount(eventEmitter
,'connection');
console.log(ListenerCount);

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection',listener1);
eventEmitter.emit('connection');







