### ES6的语法，怎么用

https://fangyinghang.com/es-6-tutorials/
http://es6.ruanyifeng.com/

### promise

Promise.all()

Promise.race();

手写promise
https://juejin.im/post/5aafe3edf265da238f125c0a

### 手写防抖函数和节流函数

``` js
//CD 冷却时间（节流思路 ）
function fn() { }

var cd = false

button.onclick = function () {
    if (!cd) {
        fn()
        cd = true
        var timerId = setTimeout(() => {
            cd = false
        }, 3000)
    }
}

//带着一起做 （防抖函数）
var timerId = null
button.onclick = function () {
    if (timerId) {
        window.clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
        fn()
        timerId = null
    }, 5000)
}
```
### 手写ajax

``` js
var request = new XMLHttpRequest()
request.open('GET', '/xxxx')
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        console.log('请求完成')
        if (request.response.status >= 200 && request.response.status < 300) {
            console.log('请求成功')
        } else {
        }
    }
}
request.send()

var request = new XMLHttpRequest()
request.open('GET', '/xxxx')
request.onload = () => { console.log('请求成功') }
request.send()
```

### this

1. fn()
this => window / global
2. obj.fn()
this => obj
3. fn.call(xx)
this => xx
4. fn.apply(xx)
this => xx
5. fn.bind(xx)
this => xx
6. new Fn()
this => 新的对象
7. fn = () => { }
this => 外面的 this

### 闭包，立即执行函数
### 什么是 JSONP，什么是 CORS，什么是跨域？
### async/await 怎么用，如何捕获异常？
### 如何实现深拷贝？

1. 递归
2. 判断类型
3. 检查循环引用（环）
4. 不可能拷贝__proto__

### 如何用正则实现 trim()？
``` js
function trim(string) {
    return string.replace(/^\s+|\s+$/g, '')
}
```
### 不用 class 如何实现继承？用 class 又如何实现？
``` js
function Animal() {
    this.a = 1
}
Animal.prototype.move = function () { }

function Dog() {
    Animal.apply(this, arguments)
    this.d = 2
}

let f = function () { }
f.prototype = Animal.prototye
Dog.prototype = new f()

Dog.prototype.constructor = Dog

Dog.say = function () { }

class Dog extends Animal {
    constructor() {
        super()
    }
}
```


### 数组去重

（ps WeakMap）

1. ES6 Set 

``` js
function unique(arr){
    return Array.from(new Set(arr));
}

function unique(arr) {
    return [...new Set(arr)];
}
```

2. splice
``` js
function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
```

3. indexOf, includes, 
``` js
function unique(arr) {
    var array = [];
    arr.forEach((item, index) => {
        //  includes 条件 !array.includes(arr[i])
        if (array.indexOf(item) === -1) {
            array.push(item);
        }
    });
    return array;
}
```

1. reduce

``` js
const hash = {};
newArr = arr.reduce((preVal, curVal)=>{
    hash[curVal.id] ? "" : hash[curVal.id] = true && preVal.push(curVal);
    return preVal;
}, []);
```

## 下节

### this

1. new关键字， new出来的对象  
2. 显示绑定，apply,call，绑定的对象
3. 隐式绑定，上下文对象，调用方法的对象 
4. 默认绑定，非严格window, 严格undefined                                

### new 

* 建一个空对象，
* 新对象连接函数的原型
* 新对象绑定到函数调用this
* 返回这个新对象

### ajax

要是通过XMLHttpRequest对象向服务器发起请求，从服务器获取数据，从而实现不用刷新页面更新页面。

``` js
var xhr = new XMLHttpRequest();
xhr.open('get', url, true);
xhr.send(null);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            success(xhr.responseText);
        } else {
            fail && fail(xhr.status);
        }
    }
}
```

### html5

* 绘画canvas
* 媒介回放video 和 audio 元素
* localStorage sessionStorage
* 语义化更好的元素footer, nav, header, section
* 表单控件 calendar date time email url search
* 新的技术websocket Genlocation
