# HTTP

> https://github.com/royIdoodle/fe-interview-chaos/tree/master/Vue%E9%9D%A2%E8%AF%95%E9%A2%98%E6%80%BB%E7%BB%93

[1. git 常用命令](#pro1)

<br>

<h3 id="pro1">1. v-if 和 v-show的区别</h3>

- v-if 组件真正的渲染和销毁，而不是显示和隐藏
- v-show 通过 CSS display 控制显示和隐藏
- 频繁切换显示状态用 v-show，否则用 v-if

<br>

<h3 id="pro2">2. 为何在 v-for 中用 key？</h3>

> https://segmentfault.com/a/1190000013810844

- key 的作用主要是为了高效的更新虚拟 DOM，减少渲染次数，提升渲染性能
  - 必须用 key，且不能是 index 和 ranDOM
- why?
  - 使用 v-for 更新已渲染的元素列表时，默认用就地复用策略；列表数据修改的时候，他会根据 key 值去判断某个值是否修改，如果修改，则重新渲染这一项，否则复用之前的元素
  - diff 算法中通过 tag（标签名） 和 key 来判断，是否是 sameNode(oldkey,newkey)

<br>

<h3 id="pro3">3. 描述vue组件生命周期</h3>

| 生命周期        | 说明                                                                                 |
| --------------- | ------------------------------------------------------------------------------------ |
| beforeCreated() | 实例刚被被创建出来，此时还没有初始化好 data 和 methods 属性                          |
| created()       | 实例的 data 和 methods 已经初始化，此时还没有开始编译模板                            |
| beforeMount()   | 完成了模板的编译，但是还没有挂载到页面中                                             |
| mounted()       | 已经将编译好的模板，挂载到页面指定的容器中显示                                       |
| beforeUpdate()  | 状态更新之前执行此函数，此时 data 中的状态值是最新的，但是界面上显示的数据还是旧的   |
| updated()       | 实例更新完毕之后调用此函数，此时 data 中的状态值和界面上显示的数据，都已经完成了更新 |
| beforeDestory() | 实例准备销毁，但还未销毁，实例属性方法仍然可用                                       |
| destoryed()     | 实例已经销毁，实例所有内容均不可使用                                                 |

<br>

<h3 id="pro4">4. vue 组件如何通讯（常见）</h3>

- 属性 + 事件（props + emit/on）
  父组件 => 子组件： 通过属性传递 子组件 => 父组件： 通过事件传递，父组件监听相应事件

```js
//App.vue父组件
<template>
  <div id="app">
    <h1>{{title}}</h1>
    <users v-bind:users="users" v-on:titleChanged="updateTitle"></users>
  </div>
</template>
<script>
import Users from "./components/Users"
export default {
  name: 'App',
  data(){
    return{
      title:"传递的是一个值",
      users:["Henry","Bucky","Emily"]
    }
  },
  components:{
    "users":Users
  },
  methods:{
    updateTitle(e){   //声明这个函数
      this.title = e;
    }
  },
}
</script>
//users子组件
<template>
  <div class="hello">
    <ul>
      <li v-for="user in users">{{user}}</li>
    </ul>
    <h1 v-on="changeTitle">{{title}}</h1>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props:{
    users:{           //这个就是父组件中子标签自定义名字
      type:Array,
      required:true
    }
  },
  data(){
    return {
      title:"Vue.js Demo"
    }
  },
  methods:{
    changeTitle() {
      this.$emit("titleChanged","子向父组件传值"); //自定义事件  传递值“子向父组件传值”
    }
  }
}
</script>
```

- 自定义事件 event.$on(注册) event.$off(清除) event.\$emit（接收）  
  这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。

```js
<div id="itany">
    <my-a></my-a>
    <my-b></my-b>
    <my-c></my-c>
</div>
<template id="a">
  <div>
    <h3>A组件：{{name}}</h3>
    <button v-on:click="send">将数据发送给C组件</button>
  </div>
</template>
<template id="b">
  <div>
    <h3>B组件：{{age}}</h3>
    <button v-on:click="send">将数组发送给C组件</button>
  </div>
</template>
<template id="c">
  <div>
    <h3>C组件：{{name}}，{{age}}</h3>
  </div>
</template>
<script>
var Event = new Vue();//定义一个空的Vue实例
var A = {
    template: '#a',
    data() {
      return {
        name: 'tom'
      }
    },
    methods: {
      send() {
        Event.$emit('data-a', this.name);
      }
    }
}
var B = {
    template: '#b',
    data() {
      return {
        age: 20
      }
    },
    methods: {
      send() {
        Event.$emit('data-b', this.age);
      }
    }
}
var C = {
    template: '#c',
    data() {
      return {
        name: '',
        age: ""
      }
    },
    mounted() {//在模板编译完成后执行
     Event.$on('data-a',name => {
         this.name = name;//箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
     })
     Event.$on('data-b',age => {
         this.age = age;
     })
    }
}
var vm = new Vue({
    el: '#itany',
    components: {
      'my-a': A,
      'my-b': B,
      'my-c': C
    }
});
</script>
```

- vuex

<br>

<h3 id="pro5">5. 描述组件渲染和更新的过程</h3>

- 把模板编译为 render 函数
- 实例进行挂载, 根据根节点 render 函数的调用，递归的生成虚拟 DOM
- 对比虚拟 DOM，渲染到真实 DOM
- 组件内部 data 发生变化，组件和子组件引用 data 作为 props 重新调用 render 函数，生成虚拟 DOM, 返回到步骤 3

<br>

<h3 id="pro6">6. v-model中的实现原理及如何自定义v-model</h3>

- v-model 其实是:value 和@input 的语法糖，即绑定了当前组件名为 value 的 prop，又同时绑定了 input 事件。
  但是 checkbox 有所不同，他是:checked 和@change 的语法糖。

- 在组件中只需要定一个名为 value 的 prop，再在需要改变外层 value 的时候使用 this.\$emit('input', newValue)即可

  ```html
  <input v-model="sth" />
  等同于
  <input :value="sth" @input="sth = \$event.target.value" />
  ```

<br>

<h3 id="pro7">7. 对 MVVM 的理解</h3>

MVVM 是 Model-View-ViewModel 的缩写，即模型-视图-视图模型。

- 模型（Model）： 数据保存—存放着各种数据，有的是固定写死的，大多数是从后端返回的数据
- 视图 （View）：用户界面，也就是 DOM
- 视图模型（View-Model）:连接 View 和 Model 的桥梁，当数据变化时，ViewModel 够监听到数据的变化（通过 Data Bindings），自动更新视图，而当用户操作视图，ViewModel 也能监听到视图的变化（通过 DOM Listeners），然后通知数据做改动，这就实现了数据的双向绑定。

<br>

<h3 id="pro8">8. computed 有何特点</h3>

- computed 计算属性默认只有 getter，不过在需要时你也可以提供一个 setter
- computed 中的计算结果是被缓存的

<br>

<h3 id="pro9">9. 为何组件 data 必须是一个函数？</h3>

一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝。相当于每个组件实例都有自己私有的数据空间，它们只负责各自维护的数据，不会造成混乱。而单纯的写成对象形式，就是所有的组件实例共用了一个 data，这样改一个全都改了。

<br>

<h3 id="pro10">10. ajax 请求应该放在哪个生命周期？</h3>

- 一般情况下，都放在 mounted 中，这时候 DOM 树已经渲染完成，保证逻辑的统一性。因为生命周期是同步执行的，ajax 是异步执行的。等到异步渲染开启的时候，created 就可能被中途打断，在 created 中做 ajax 调用，可能调用多次。
- 服务端渲染不支持 mounted 方法，所以在服务端渲染的情况下统一放在 created 中。

<br>

<h3 id="pro11">11. 如何将组件所有 props 传递给子组件？</h3>

- \$props
- <User v-bind="$props"/>
- 细节知识点，优先级不高

<br>

<h3 id="pro12">12. Vue父子组件生命周期调用顺序</h3>

- 创建时
  父组件必需等所有子组件挂载完成后再挂载
  Parent beforeCreate
  Parent created
  Parent beforeMount
  Child beforeCreate
  Child created
  Child beforeMount
  Child mounted
  Parent mounted
- 销毁时
  父组件必需等所有子组件销毁之后再销毁自己
  Parent beforeDestroy
  Child beforeDestroy
  Child destroyed
  Parent destroyed

<br>

<h3 id="pro13">13. 多个组件有相同的逻辑，如何抽离？</h3>

- 全局的处理方法，可以封装成 mixin 混入。如 element-ui 中，会将控制焦点到某元素的操作封装成 focus，这样每个组件都会有这个 method。
  - 缺点：变量来源不明确，不利于阅读多； mixin 可能会造成命名冲突 ;mixin 和组件可能出现多对多的关系，复杂度较高
- 统一的操作，可以封装成 directive 指令。如 element-ui 中，将操作 loading 蒙版的操作抽离成 v-loading 指令；iview admin pro 中把权限捆绑显示的操作也抽离成指令
- 底层抽离，可以用 extend。如，如果某一类页面有大量的相同操作，可以抽离成一个基础组件，然后其他页面通过 extend 来继承这个基础组件。

<br>

<h3 id="pro14">14. 何时要使用异步组件？</h3>

按需加载，提高首屏的启动速度

- 加载大组件
- 路由异步加载

```js
{
  {
    path: '/smSearch',
    name: 'smSearch',
    component: resolve => require(['@/views/searchList/App'], resolve)
  }
}
```

<br>

<h3 id="pro15">15. 何时需要使用 keep-alive？</h3>

> https://segmentfault.com/a/1190000018705351

keep-alive 是 vue.js 的内置组件，它能够把不活动的组件的实例保存在内存中，而不是直接的销毁，它是一个抽象组件，不会被渲染到真实 DOM 中，也不会出现在父组件链中。
它提供了 exclude 和 include 两个属性，允许组件有条件的缓存。

- 缓存组件，不需要重复渲染
- 如多个静态 tab 页的切换优化性能

<br>

<h3 id="pro16">16. 何时需要使用 beforeDestory？</h3>

- 解绑自定义事件 event.\$off
- 清除定时器
- 解绑自定义的 DOM 事件，如 window.scroll 等

<br>

<h3 id="pro17">17. 什么是作用域插槽？</h3>

插槽<slot>不难理解，就是子组件提供了可替换模板，父组件可以更换模板的内容。
具名插槽，让子组件内可以提供多个插槽，父组件就可以对应替换多块的内容。
作用域插槽给了子组件将数据返给父组件的能力，子组件一样可以复用，同时父组件也可以重新组织内容和样式。

<br>

<h3 id="pro18">18. vuex 中 action 和 mutation 有何区别？</h3>

- 流程顺序
  - “相应视图—>修改 State”拆分成两部分，视图触发 Action，Action 再触发 Mutation。
- 角色定位
  - 基于流程顺序，二者扮演不同的角色。
  - Mutation：专注于修改 State，理论上是修改 State 的唯一途径。
  - Action：业务代码、异步请求。
- 限制
  - 角色不同，二者有不同的限制。
  - Mutation：必须同步执行。
  - Action：可以异步，但不能直接操作 State。

<br>

<h3 id="pro19">19. vue-router 常用的路由模式？</h3>

hash 默认和 H5 history（需要服务端支持）

- 区别

  - 用户感知上  
    hash 模式在浏览器的地址栏上有#，path 值在#后面，会给用户造成一定程度的困惑  
    history 模式与其他多页面应用（MPA）是一样的体验

  - 技术实现上  
    hash 模式使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载  
    history 模式是用的是 history.pushState API 来完成 URL 跳转而无须重新加载页面

  - 使用成本上  
    hash 模式无成本，开箱即用  
    history 模式需要服务器进行设置，因为 url 所描述的资源不是真实存在的，所以需要服务端（如 Nginx）做资源匹配的规则设定（但其实很简单）

<br>

<h3 id="pro20">20. 如何配置 vue-router 异步加载？</h3>

const Foo = () => import(/_ webpackChunkName: "group-foo" _/ './Foo.vue')

<br>

<h3 id="pro21">21. 请用 vnode 描述一个 DOM 结构</h3>

```js
export default class VNode {
  // 最关键的三个属性
  tag: string | void;
  data: VNodeData | void;
  children: ?Array<VNode>;

  // 其他辅助用属性
  text: string | void;
  elm: Node | void;
  ns: string | void;
  context: Component | void; // rendered in this component's scope
  key: string | number | void;
  componentOptions: VNodeComponentOptions | void;
  componentInstance: Component | void; // component instance
  parent: VNode | void; // component placeholder node
}
```

```js
// 比如下面的一段HTML片段

<div class="wrapper">
  <p id="bar">foo</p>
</div>;

// vnode为：

let vnode = {
  tag: "div",
  data: {
    class: "wrapper",
  },
  children: [
    {
      tag: "p",
      data: {
        id: "bar",
      },
      children: [
        {
          tag: undefined,
          text: "foo",
        },
      ],
    },
  ],
};
```

<br>

<h3 id="pro22">22. 监听 data 变化的核心 API 是什么</h3>

- Object.defineProperty
- 以及深度监听、监听数组
- 有何缺点

<br>

<h3 id="pro23">23. vue 如何监听数组变化？</h3>

- Object.defineProperty 不能监听数组变化
- 重新定义原型，重写 push pop 等方法，实现监听
- Proxy 可以原生支持监听数组变化

<br>

<h3 id="pro24">24. 请描述响应式原理监听</h3>

vue 实现响应式原理的关键是 Object.defineProperty 这个属性。每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据属性记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。当一个 data 中的数据被调用时它会调用 getter 方法。当一个 data 中的数据被修改时他会调用 setter 方法。在实现响应式时它有一个监听器它用来收集所有的依赖，并且存储起来，在触发 getter 或 setter 方法时它会通知 Watcher，然后视图层实现响应式

<br>

<h3 id="pro25">25. data 变化组件渲染和更新的流程</h3>

- 把模板编译为 render 函数
- 实例进行挂载, 根据根节点 render 函数的调用，递归的生成虚拟 DOM
- 对比虚拟 DOM，渲染到真实 DOM
- 组件内部 data 发生变化，组件和子组件引用 data 作为 props 重新调用 render 函数，生成虚拟 DOM, 返回到步骤 3

<br>

<h3 id="pro26">26. diff 算法的时向间复杂度 </h3>

- o(n)
- 在 O(n^3)基础上做了一些调整

<br>

<h3 id="pro27">27. 简述 diff 算法过程 </h3>

- patch(elem， vnode) patch(vnode， new Vnode)
- patchVnode 和 addVnodes 和 removeVnodes
- update Children（key 的重要性）

<br>

<h3 id="pro28">28. vue为何是异步渲染，$nextTick何用？</h3>

- 为了避免频繁操作 DOM 造成的性能消耗，如果每次数据发生变化都立即更新 DOM 的话，会造成频繁操作 DOM；避免重复的 DOM 操作，如果同一个 watcher 被多次触发，只会被推入到队列中一次。
- \$nextTick 在 DOM 更新完之后，触发回调

<br>

<h3 id="pro30">30. vue 常见性能优化方式 </h3>

- 合理使用 v-show 和 v-if
- 合理使用 computed
- v-for 时加 key，以及避兔和 v-if 同时使用
- 自定义事件、DOM 事件及时销毁
- 合理使用异步组供合理使用 keep-alive
- data 层级不要太深
- 使用 vue-loader 在开发环境做模板编译（预编译）
- webpack 层面的优化（后面会讲）
- 前端通用的性能优化，如图片懒加载使用
- SSR
