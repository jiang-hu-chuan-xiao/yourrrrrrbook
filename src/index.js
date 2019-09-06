import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './html/index';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();

// ./7.7/html/index 后台管理系统
// ./7.8/component/muto/index.jsx 组件跳转
// ./7.9/practice/html/html  二级跳转
// ./作业/7.9/component/html/index  antd组件 跳转
// ./作业/7.10/component/html/index 侧导航
// ./7.11/component/html/index 登录注册表单
// ./作业/7.14/component/html/index  受控表单

