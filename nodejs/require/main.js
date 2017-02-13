var hello=require('./hello');
hello.world();
hello.func();
console.log(hello.g);
hello.h('haibao162');
console.log(hello.abc(2,3));
//代码 require('./hello') 引入了当前目录下的hello.js文件