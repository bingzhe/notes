## 你遇到最难的问题是怎样的？

https://www.zhihu.com/question/35323603

## 你在团队的突出贡献是什么
## 最近在关注什么新技术
## 有没有看什么源码，看了后有什么记忆深刻的地方，有什么收获

##  [1,2,3].map(parseInt)

``` js
parseInt("1",0);
parseInt("2",1);
parseInt("3",2);

1 NAN NAN
```

## 代码

``` js
 var a = {name: 'a'}
 a.x = a = {}   //开始执行 执行这一行的时候a,其实一直指的是  {name: 'a'} 对象
//  问 a.x 是多少？

undefined;
```
## `(a ==1 && a== 2 && a==3)`可能为 true 吗？  可以

``` js
const a = {
  num: 0,
  valueOf: function() {
    return this.num += 1
  }
};
// 隐式转换对象的时候调用valueOf
const equality = (a==1 && a==2 && a==3);
console.log(equality); // true
```