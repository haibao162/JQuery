var events=require('events');
var eventEmitter=new events.EventEmitter();

// ������
var listener1=function listener1(){
console.log('listener1');
}

var listener2=function listener1(){
console.log('listener2');
}

// �� connection �¼���������Ϊ listener1 
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection', listener2);
eventEmitter.emit('connection');

//����������
var ListenerCount=require('events').EventEmitter.listenerCount(eventEmitter
,'connection');
console.log(ListenerCount);

// �Ƴ���󶨵� listener1 ����
eventEmitter.removeListener('connection',listener1);
eventEmitter.emit('connection');







