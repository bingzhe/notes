### 数组去重

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
