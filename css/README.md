### css sprite

将多张图片拼成一个图片，通过background-position和元素尺寸调节需要显示的背景

优点：
1. 减少HTTP的请求数量，极大的提高页面的加载速度
2. 减少了图片的大小，一张图片要不所有小图片合起来小

缺点：
1. 图片合并麻烦
2. 维护麻烦，修改一张图片可能就要重新布局整个图片

### display:none 和 visibility: hidden;

都让元素不可见

区别：

1. display:none,会让元素完全从渲染树中消失，不会占据空间，visibility:hidden，元素不回从渲染树消失，只是不可见，还会占据空间
2. display:none,非继承属性，子元素修改也无法显示， cisibility:hidden,继承属性，子元素修改会可见
3. 修改常规流中的display，会造成文档重排，修改visibility只会造成本元素重绘
4. 读屏器读取区别
