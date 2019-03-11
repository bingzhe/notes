/**
 * 事件代理
 * 1.事件委托，要给子元素绑定的事件委托给父元素，让父元素担任事件监听的职务。原理是利用DOM元素的事件冒泡，
 * 2.优点，提高性能，减少事件的注册，节省内存。动态生成的子节点也可以监听到事件
 */

/**
 * this
 * 1.new关键字， new出来的对象  2.显示绑定，apply,call，绑定的对象
 * 3.隐式绑定，上下文对象，调用方法的对象 4.默认绑定，非严格window, 严格undefined                                                                                                                                                                                                                                                                                                                                                                                                                              
 */
/**
 * new
 * 创建一个空对象，
 * 新对象连接函数的原型
 * 新对象绑定到函数调用this
 * 返回这个新对象
  */
/**
 * ajax
 * 主要是通过XMLHttpRequest对象向服务器发起请求，从服务器获取数据，从而实现不用刷新页面更新页面。
 * 
 */

// var xhr = new XMLHttpRequest();
// xhr.open('get', url, true);
// xhr.send(null);
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             success(xhr.responseText);
//         } else {
//             fail && fail(xhr.status);
//         }
//     }
// }

/**
 * html5
 * 绘画canvas
 * 媒介回放video 和 audio 元素
 * localStorage sessionStorage
 * 语义化更好的元素footer, nav, header, section
 * 表单控件 calendar date time email url search
 * 新的技术websocket Genlocation
 */
var arr2 = [{ a: 10 }, { a: 20 }, { a: 30 }, { a: 10 }, { a: 20 }, { a: 30 }];
var arr1 = [2, 3, 3, 4, 5, 2, 8, 9, 2];

function unique(arr) {
    var array = [];
    arr.forEach((item, index) => {
        if (array.indexOf(item) === -1) {
            array.push(item);
        }
    });
    return array;
}

let arr = unique(arr1)
console.log(arr);
