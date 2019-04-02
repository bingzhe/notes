
## 必考：watch 和 computed 区别是什么？

1. wacth是侦听属性 computed是计算属性
2. computed 有缓存 是基于它们的依赖进行缓存的，只有在依赖改变的时候才会重新计算 wacth没有缓存，是在侦听的值变换的时候执行特定的函数
3. computed是用于定义基于数据之上的数据，watch是你想在某个数据变化时做一些事情，如果一个数据依赖于其他数据，那么把这个数据设计为computed的，
如果你需要在某个数据变化时做一些事情，使用watch来观察这个数据变化

备注：不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。

## 必考：Vue 有哪些生命周期钩子函数？分别有什么用？

1. beforecreated：elm 和 data 并未初始化 
2. created：完成了 data 数据的初始化，elm没有
3. beforeMount：完成了 el 和 data 初始化
4. mounted ：完成挂载
5. beforeUpdate：
6. updated：更新之后事情
7. beforeDestory：
8. destroyed

## 必考：Vue 如何实现组件间通信？

1. $emit(), on
2. eventBus eventBus = new Vue();  eventBus.$emit()  eventBus.$on()
3. vuex


4. 父链 和 子索引：this.$parent  与 this.$children
5. 依赖注入：provide 和 inject
6. 子组件引用： ref与$refs
7. 特性绑定：v-bind="$attrs" 和 v-on="$listeners"

8. 利用全局变量、storage、cookie、query、hash等传递数据: 非vue特性，不做赘述。
9. 全局事件广播

## 必考：Vue 数据响应式怎么做到的？

当你把一个普通的 JavaScript 对象传给 Vue 实例的 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter

每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

受现代 JavaScript 的限制 (而且 Object.observe 也已经被废弃)，Vue 不能检测到对象属性的添加或删除

## 必考：Vue.set 是做什么用的？

## Vuex 是什么，怎么用的,原理？

Vuex 是一个专为 Vue.js 应用程序开发的状态管理工具
主要有5个核心概念 state getter mutation action module

state Vuex 使用单一状态树,即每个应用将仅仅包含一个store 实例,存放的公共数据，不可以直接修改里面的数据。
getter 类似vue的计算属性，主要用来过滤一些数据
mutations mutations定义的方法修改Vuex 的 store 中的状态或数据
action actions可以理解为通过将mutations里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据  store.dispath 分发 action
modules：项目特别复杂的时候，可以让每一个模块拥有自己的state、mutation、action、getters，使得结构非常清晰，方便管理

原理

注入

``` js
// vuex利用了vue的mixin机制，混合 beforeCreate 钩子 将store注入至vue组件实例上，并注册了 vuex store的引用属性 $store！
Vue.mixin({ beforeCreate: vuexInit });

// vuexInit 
this.$store = typeof options.store === 'function'
    ? options.store()
    : options.store

//响应式原理
get state () {
    return this._vm._data.$$state
}
store._vm = new Vue({
data: {
    $$state: state
}
})
// 响应式原理
// 上述代码初始化了一个vue实例 _vm，由于vue的data是响应式的，所以，$$state也是响应式的，那么当我们 在一个组件实例中 对state.xxx进行 更新时，基于vue的data的响应式机制，所有相关组件的state.xxx的值都会自动更新，UI自然也会自动更新！

// vuex的state是借助vue的响应式data实现的。
// getter是借助vue的计算属性computed特性实现的
```

其他

Flux 的思维方式是单向的，将之前放权到各个组件的修改数据层的 controller 代码收归一处，统一管理，组件需要修改数据层的话需要去触发特定的预先定义好的 dispatcher，然后 dispatcher 将 action 应用到 model 上，实现数据层的修改。然后数据层的修改会应用到视图上，形成一个单向的数据流

Redux 实际上相当于 Reduce + Flux，和 Flux 相同，Redux 也需要你维护一个数据层来表现应用的状态，而不同点在于 Redux 不允许对数据层进行修改，只允许你通过一个 Action 对象来描述需要做的变更。在 Redux 中，去掉了 Dispatcher，转而使用一个纯函数来代替，这个纯函数接收原 state tree 和 action 作为参数，并生成一个新的 state tree 代替原来的。而这个所谓的纯函数，就是 Redux 中的重要概念 —— Reducer

## VueRouter 你怎么用的？

Vue Router 是 Vue.js 官方的路由管理器

## 路由守卫是什么？

router.beforeEach

导航被触发。
在失活的组件里调用离开守卫。
调用全局的 beforeEach 守卫。
在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
在路由配置里调用 beforeEnter。
解析异步路由组件。
在被激活的组件里调用 beforeRouteEnter。
调用全局的 beforeResolve 守卫 (2.5+)。
导航被确认。
调用全局的 afterEach 钩子。
触发 DOM 更新。
用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

## Vue的路由实现：hash模式 和 history模式
hash模式：在浏览器中符号“#”，#以及#后面的字符称之为hash，用 window.location.hash 读取。特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。
history模式：history采用HTML5的新特性；且提供了两个新方法： pushState()， replaceState()可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更