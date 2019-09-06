- build前配置二级目录在package.json添加："homepage":"."
- 新版脚手架无法在js中使用public文件夹里的资源，进入webpack.config.js把newMoudleScopePlugin注释即可

## 生命周期

* 初始化阶段
- 挂载时：constructor初始化我们的state和props
- 挂载前：componentWillMount该钩子在17版本后放弃，现在被constructor取代
- 生成react dom节点：render
- 挂载：componentDidMount

* 运行中阶段
- componentWillReceiveProps：React17后废弃，谨慎使用，因为通常会出现bug
 * 作用是组件将接收props的时候做处理的
 * 官方推荐使用componentDidUpdate替代它
- shouldComponentUpdate 判断React组件的输出是否受当前state或props更改的影响

## React 
* 特点：简单，声明式
* key的添加，必须是在循环体中，数组的上下环境里。
* key只要保证在兄弟节点中是唯一的就可以

Javascript:
1.传统的Dom事件操作:
@优点:直观、书写习惯、渲染快、利于SEO(搜素引擎爬虫)。
@缺点:可复用性差、扩展困难、维护成本高、耦合度高。
@适用于:传统的静态网站、宣传页、参与开发人员少。


组件(模块)化开发:
   @优点:复用性强、高内聚低耦合、命名空间、便于扩展和优化、维护方便、易于阅读。
   @缺点:初期开发速度慢，对开发人员的逻辑能力要求高，需要借助自动化工具加工(NodeJs、Webpack、Bable)，不利于SEO(搜素引擎爬虫)。
   @适用于:团队开发、应用和程序项目、中大型项目。


React的特点:
@简单。
@声明式。
@React的核心是组件，组件的设计目的是提高代码复用率，降低测试难读，和代码复杂度。
@提高代码复用率:组件将数据和逻辑封装，类似面向对象中的类。
@降低测试难读:组件高内聚低耦合，很容易对单个组件进行测试。
@降低代码复杂度:直观的语法可以极大提高可读性。


React三种写法:
@function无状态组件，只接受一个props。
@class es6的写法，使用Component。
@createClass了解就好，最后一个版本是15.5.0新版本里被废弃。

React顶层API:
@React 是 React 库的入口。如果你通过使用 <script> 标签的方式来加载 React，则可以通过 React 全局变量对象来获得 React 的顶层 API。当你使用 ES6 与 npm 时，可以通过编写 import React from 'react' 来引入它们。当你使用 ES5 与 npm 时，则可以通过编写 var React = require('react') 来引入它们。


回顾:
   @组件:
1.无状态组件，没有this，只接受一个props，不会被实例化，加载快、渲染快、便于理解结构清晰。
2.Class组件，继承于React.Component方法的组件，会被实例化可以用React所有的API，需要深刻理解的是ES6中class相关语法。
3.组件API:创建虚拟DOM(React.createElement(‘原生html标签类型’，{props}，[内容/子元素]))    this.props.Children:隐式渲染传入到父组件中的子组件集合，是一个数组。
4.顶级API:React.Children:用来遍历处理this.props.children，显示的渲染，并对我们每一个传入的子元素做处理，语法:React.children.map(this.props.children,{item，index} => {return item})   React.cloneElement:克隆一个react元素，并进行第二次开发，React.cloneElement(child，{props}，[子元素/内容])。


## 6.26react_sf：
### 传统的DOM事件操作
   - 优点：直观，书写习惯，渲染快，利于SEO（搜索引擎优化）
   - 缺点：可复用性差，扩展困难，维护成本高，耦合度高，高内聚低耦合
   - 适用于：传统的静态网站，宣传页。参与开发人员少
### 组件（模块）化开发
   - 优点：复用性强，高内聚低耦合，命名空间，便于扩展和优化，维护方便，易于阅读
   - 缺点：初期开发速度慢，对开发人员的逻辑能力要求高，需要借助自动化工具加工（nodejs、webpack、babel），不利于SEO
   - 适用于：团队开发，应用和程序项目，中大型项目


##  6.27初始React：
### 什么是react？react的开发背景
   - Facebook需要解决的问题：构建数据不断变化的大型应用
### 特点：
   - 简单
   - 声明式
   react的核心是组件，组件的设计目的是提高代码复用率、降低测试难度和代码复杂度
   提高代码复用率：组件将数据和逻辑封装，类似面向对象中的类
   降低测试难度：组件高内聚低耦合，很容易对单个组件进行测试
   降低代码复杂度：直观的语法可以极大提高可读性
   国外使用react的公司：Facebook、YaHoo、GitHub、支付宝、淘宝


## 6.28React组件与渲染
### react三种写法
   - function无状态组件，只接受一个props
   - class es6的写法，使用Component
   - createClass了解就好，最后一个版本是15.5.0，新版本里被废弃
### super在组件里使用需要注意的地方
   - *super()在哪里用，何时用
   - super在哪里用
   - super在static里用需要注意什么


## 总结：
### 组件：
   - 1.无状态组件：function没有this，只接收一个props，不会被实例化；优点是：加载快，渲染快。便于理解，结构清晰
   - 2.class组件：继承于react.component方法的的组件，会被实例化，可以用react所有的API。需要深刻理解的是ES6中class相关语句
### 组件API：
   - 1.创建虚拟DOM：react.createElement('原声html标签类型',{props},[内容/子元素])
   - 2.this.props.children：隐式渲染传入到父组件中的子组件集合，是一个数组
### 顶级API：
   - React.Children：用来遍历处理this.props.children，显式的渲染，并对我们每一个传入的子元素做处理。语法：React.Children.map(this.props.children,(item,index)=>{return item})
   - React.cloneElement：克隆一个react元素，并进行二次开发。语法：React.cloneElement(child,{props},[子元素/内容])


## 7.01jsx语法:
## 7.02多组件控制和布局分析
## 7.03State与数据使用
### 1.属性props是父级传入进来的(不可以修改)
   - props三种用法：
     1.键值对形(字符串、数字、数组、变量) 
     2.展开对象写法({...props}) 
     3.defaultProps(用于设置默认属性)
### 2.state组件是自己的状态数据(可以修改)
   - state状态：事物所处的状况，state状态是由事物自行处理，不断变化的
   - state用法：
     1.在构造函数里使用this.state={}
     2.setState：更新组件状态(·diff算法)


## 7.04react脚手架：
### 如果设置了npm指向淘宝镜像，则不需要安装了
   - npm config set registry https://registry.npm.taobao.org
### 查看设置是否正确
   - npm config get registry
### 1.全局安装脚手架
   - npm i -g create-react-app
### 2.查看版本
   - create-react-app -V
### ps:如果你在安装的时候报错失败，使用如下方式：
   - Win键+x点开window prosell(管理员) === cmd
   - 如果还不成功 去看一下node.js软件是不是安装在磁盘根目录了，如 果是，卸载node.js重新安装，默认就安装在c盘
   - 我们的项目不要在c盘，c盘是系统盘，受权限保护，项目放到其他盘
### 3.创建项目：【不要再C盘里创建，因为C盘是系统盘，它有权限保护，容易出问题，如果只有C盘把项目建立在'文档'文件夹里】
   - (1)create-react-app myreact
   - (2)如果创建项目的时候报错，说明网不好，或者是使用了yarn，卸载yarn，，或者查看一下nodejs软件是不是直接安装在盘符的根目录了。如果nodejs安装在盘符根目录，卸载nodejs重新安装
### 4.运行项目：
   - (1)npm run dev
       ①如果报错是webpack版本号不对等
       ②解决办法：运行npm run eject
       ③最后再运行启动就可以了
   - (2)在运行npm run eject时候报错
       ①一般是说你的git没有提交
       ②是因为咱们的项目安装的时候放在了git本地仓库里
       ③解决办法有两个：一个就是删除掉本地的.git文件夹
       ④另一个事提交一下git：git add .，然后git commit -m提交


### 安装sass：
   - npm i node-sass sass-loader -D
### build前配置二级目录在package.json添加："homepage": "."
### 新版脚手架无法在js中使用public文件夹里的资源，进入webpack.config.js把new MoudleScopePlugin注释掉即可


### 生命周期:

创建时(挂载时)：constructor(componentWillMount:17版本即将废弃)
挂载后：componentDidmount
更新时：componentDidupdate
卸载时：componentWillunMount


component:组件
Will:准备，即将
Did:完成
Mount:挂载
Unmount:卸载
Update:更新


初始化:constructor初始化我们的state和props
即将挂载:componentWillMount(17版本废弃,现在了解即可)作用已被constructor取代
render:把react虚拟dom生成
挂载完成：componentDidMount(组件挂载完成,如果我们需要请求接口在这个钩子里)
准备更新:componentWillUpdate
更新完成:componentDidUpdate
卸载:componentWillUnMount


1. 什么是生命周期
    - 组件本质上是状态机，输入确定，输入一定确定
    - 状态发生转换时会触发不同的钩子函数，从而让开发者有机会做出响应
    - 可以用事件的思维来理解状态
        我们不知道事件何时触发，但是我们可以在被触发的时候做逻辑处理
    - render：当props和state经过上面几个钩子函数之后，我们的render要重新调用，生成新的DOM
    - componentDidUpdate ：会在更新后被立即使用，首次渲染不会执行此方法
    - 初始化阶段
        挂载时：constructor初始化我们的state和props
        挂载前：componentWillMount（现已废弃），作用已被constructor取代
            生成react dom节点：render
        挂载：componentDidMount（如果我们需要请求接口在这个钩子里）
    - 运行中阶段
        - componentWillReceiveProps（废弃）
            作用是组件将接收props时作处理用的，官方推荐使用componentDidUpdate替代它
        - shouldComponentUpdate：判断React组件的输出是否受当前state或props更改的影响
            默认行为是state每次发生变化组件都会重新渲染，默认值返回是true
    - 销毁阶段
        - componentWillunMount
            会在卸载及销毁之前调用


###  事件绑定
  - 在无状态组件中使用事件有俩种
     - 1.1直接在函数中声明事件
     - 1.2调用父组件传入的事件
  
  - 在class中使用事件需要绑定this
     - 1.1最佳的方式就是声明事件的时候就用箭头函数


### react背景
  - FeceBook( 脸书 )公司 2013年推出ReactJs框架

  - 定义：视图层的js库

  - 特点：简单、声明式

  - 核心概念：组件,目的是提高代码复用率、降低测试难度和代码复杂度


### 组件类型
  - 无状态组件/ui组件:function fn (){}
     1.加载快、渲染快
     2.存放DOM
     3.不需要实例化，没有this只接受一个props

  - class/容器组件：
     1.功能强大、逻辑方法、生命周期、状态state都在class组件里
     2.渲染对比无状态组件较慢
  
  - 会被实例化


### props属性
  - 定义：是由父组件传递给子组件的数据

  - 特性：子组件不能修改props，props在子组件中是只读的

  - props更新后会使子组件发生更新

  - 子组件想要更新props需要更新父组件的方法,同样也是props传递进来的父组件方法


### state
  - 定义: state是组件自身的状态数据, 可以自己修改

  - 特点： state改变后会使组件更新

  - 修改state的方法是this.Setstate({})


### jsx语法
  - jsx是React.createElement()的语法糖

  - 允许我们在js中写html标签，最终解析的时候会被编译成React.createElement()


### 组件的组合模式
  - 插入的形式:
     <MyCom>
        <Chlid />
     </MyCom>

  - 直接将组件引入到父组件中使用

  - 将组件用props传递给子组件

  - 高阶组件(HOC):将一个组件作为参数传递给一哥方法，该方法返回一个新组件

  - 注意：在开发的时候,容器组件存放逻辑方法,render里就是ui组件



### 生命周期
  - 初始化:constructor初始化我们的state和props

  - 即将挂载:componentWillMount(17版本废弃,现在了解即可)作用已被constructor取代

  - render:把react虚拟dom生成

  - 挂载完成:componentDidMount(组件挂载完成,如果我们需要请求接口在这个钩子里)

  - 准备更新:componentWillUpdate(17版本废弃,现在了解即可)

  - 更新完成:componentDidUpdate

  - 卸载:componentWillUnMount


### 事件处理
  - 定义：ract事件都是合成事件

  - 事件方法的绑定:
     1. 在构造函数里绑定:this.handleEvent || this.handleEvent.bind(this)
     2. 在元素上: () => {this.handleEvent(参数)}
     3. 在声明的时候: a.handleEvent = () => {}
     4. 为什么使用箭头函数: 因为箭头函数没有this,只会从最近的作用域找到this


### event对象
  - 定义:合成事件对象
  
  - 特性：在异步方法中event对象的值会丢失,所以在使用异步方法前调用event.persist(),会移除合成事件,保留event对象的值,不会丢失

  - 在清除冒泡和默认事件中,不能像原生js中一样写return false,必须调用perventDefault()[清除默认行为] || stopPropagation()[清除冒泡]

  - currentTarger: 当前元素,指事件绑定到的元素
  
  - target: 表示被触发的元素,具体元素不确定



### 条件渲染
  - 我们可以使用的条件,判断方式:
    1. &&、if、switch 其中&&是可以直接在DOM中使用的
    2. 定义: 给定一个状态值,根据状态值判断是否加载组件或者加载对应的组件



### 列表和key的使用
  - 在react中数组可以直接放在呈现方法中,直接使用一般情况下我们要遍历出来处理
  
  - props.chlidren,通过map方法遍历出来的子节点,我们需要加key

 - key 是唯一标识,便于diff算法进行快速匹配的一个元素上的内置属性[react内部可以用的,开发者无法获取]

 - key 的添加必须是在循环体中数组的上下文环境里

 - key 只要保证在兄弟节点中是,唯一标识就可以


14. 表单/受控组件&&非受控组件
(1) 表单：
① Input type[text]
1) value 必须绑定state
2）必须使用onChange
3）使用state控制的就叫受控组件
4）同类：textarea、select
② Input type [checkbox/radio]
1) checkbox 是多选框/复选框
2) Radio 是单选框
3) checked 绑定state状态[布尔]
4）必须用onChange接收值的改变
③ 受控组件
1）定义：使用state控制的，由react控制其行为
④ 非受控组件
1）定义：不受react控制行为的就叫非受控组件
2）举例： Input type[file]
a. 因为file的value是只读的，无法使用它不受eact的state绑定，所以他不受react控制，因此叫非受控组件

15. 状态提升
(1)定义：当多个子组件的数据是相同的，而且是有联系的，需要将数据提升到父组件中，实现数据状态共享
(2)他不是api，他是一种模式

16. 顶级api
(1)定义：挂载在全局对象在的属性就叫做顶级api
(2) React.createElement("标签类型")，{属性}，{子元素内容}//创建元素
(3) React.Children:
①用来遍历我们组件的子元素 
(4) React.createElement(child,props,newChild/内容)
① 克隆一个组件/元素，对其进行扩展
(5) ReactDOM.render(组件,dom容器)

17. 组件内置api
(1) this.state:状态
(2) this.setState:修改状态
(3) props.children：隐式渲染子组件
① <Father><Son/></Son/><Father>
② React.Children(props.Children(item,index) => {
    1)略
    2）显式渲染
})
(4) this.forceUpdate():强制更新
18. 不常用的方法
(1) componentDidCatch(err):
①在文件中使用，用来捕获于生命周期中的错误事件中的错误捕获不到，接口中的错误捕获不到
(2) static getDerivedStateFromError(err):
① 属于静态方法
②捕获到错误
③ 用来做放错预备方案，返回值是对应的state状态
④ 如果一旦触发了该方法，我们应该用备用的组件呈现给用户

19. propType 检测 props
(1) 从v15.5起propType就从react分离出来了，需要安装propType包
(2) 使用： 
① Import PropTypes from "prop-types";
② 静态使用方法：
1）Static propTypes = {
    name:PropTypes.string
}
③ class 使用方法
1）MyCom.propTypes = {
    name:PropTypes.string
}

20. defaultProps: 给组件添加默认属性值
(1) 定义：为Class组件添加默认props
(2)使用：
① MyCom.defaultProps = {name:"123"}
② static




<!--  -->

同层模块对比模式

计算快


* 组件类型  constructor  createClass  区别
* event事件 合成事件 在异步中
* props state 相同  不同
* 高阶组件