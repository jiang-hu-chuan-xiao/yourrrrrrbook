## React state与props的区别

- state是组件自身的状态，组件自身可以修改
- props是组件接收的父组件的state，自身不可修改

- 相同点：存数据，当component改变时会使组件进入生命周期的更新阶段，触发render算法使虚拟dom进行def运算

## 生命周期中更新阶段里的钩子函数：
- 更新前： componentWillUpdate 更新完成： componentDidUpdate

## 强制更新 forceUpdate
- state修改 props修改 state是自己修改 性能优化失效

## React几种组件
- 无状态组件 ：加载最快，不需要实例化，因此不需要this只接收一个props，一般来说做ui组件使用
- class组件 : 是功能组件，功能强大，有状态和生命周期，以及react的其他特性
- hoc高阶组件 : 不是api的一部分它是一种组合模式，及一个方法接收一个组件对其加工后返回一个新的组件

## 能否直接修改state
- 直接修改直接触发更新阶段，官方是不允许的，必须使用this.setState方法

## 简单描述hoc高阶组件
- 声明一个函数，接受一个参数，这个参数就是接收的组件，然后将参数在函数体中class组件里使用，最后返回这个class组件

## 使用高阶组件为的是什么
- 将很多功能相似的组件进行提取复用

## jsx
- jsx是react对js的扩展，类似xml语法，不是真正的标签，拥有js的全部功能

 首先jsx的dom是虚拟dom，更新方便，不会使页面重绘，只是局部改变

 自定义属性必须全部小写，js中的关键字要驼峰处理

 我们在渲染列表的时候需要加key

## 组件间数据传递方式
- context上下文 和 props

## 运算符
- && || if switch
- && || 可以直接return
- if switch需要在方法里使用

 react官网推荐使用组合

 propType使用在class组件中

## 受控组件 与 非受控组件
- 元素的值绑定到state状态上，被react控制其行为的叫受控组件
- 不需要绑定state，接收用户自由操作的叫非受控组件

## 性能优化
- lazy 组件懒加载

 获取dom元素时使用refs
## 为什么使用refs
- 在默认情况下，我们不得不操作dom比如在事件下操作input

## 合成事件中event对象在异步事件中会发生什么？

persist

## setState的写法
this.setState({},console.log(""))
this.setState(()=>{},console.log(""))


第一个值是改变值，第二个值是回调函数方法

## 生命周期
- constructor runder componentWillMount componentDidMount componentWillUpdate componentDidupdate componentUnMount

## 什么是单页面应用
- 就是指一个系统只加载一次资源，之后的操作交互、数据交互是通过路由、ajax来请求的并且页面不用刷新

## vue与react对比
- vue封装了很多开箱即用的api
- react要自己实现api，所以react更灵活，正因为reactapi少，所以在性能上要高于vue
* vue的定位是渐进式JavaScript框架  react是视图层框架
* vue相对于react更容易上手，react的学习曲线还是有一定的陡峭
* react的核心思想是组件，组件的合理组合

- ref的转发  转发：父组件获取子组件的元素

## 上下文
const myContext = React.conText;
myContext.pervider

