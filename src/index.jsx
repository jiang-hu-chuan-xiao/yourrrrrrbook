import React, { Component } from 'react'
import Mylayout from './html/index.jsx';
// 引入React基础概述
import WzlBox from './one/index';
// react组件分类
import LxaBox from './two/index';
import Jsj from './three/index'
import Zjxr from './fore/index'
import Zjlx from './five/index'
import Api from './api/index'
import Cass from './scss/index'
import Props from './props/index'
import Life from './life/index'
import Sjky from './sjky/index'
import Jdlj from './jdlj/index'
import Antd from './antd/index'
import Gjzj from './gjzj/index'
import Jtsy from './jtsy/index'
import Refs from './refs/index'
import Sjbd from './sjbd/index'
import Sjdx from './sjdx/index'
import Tjxr from './tjxr/index'
import Zjnzapi from './zjnzapi/index'
import Setstate from './setstate/index'
import Option from './option/index'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            isCom: window.location.hash.slice(1) || 'WzlBox'
        }

        window.onhashchange = () => {
            this.setState({
                isCom: window.location.hash.slice(1)
            })
        }
    };
    // 收听子组件传递数据
    getSonData = (id) => {
        window.location.hash = id;
    }
    // 渲染函数
    render() {
        let Dom = '';
        switch (this.state.isCom) {
            case 'WzlBox':
                Dom = <WzlBox />;
                break;
            case 'LxaBox':
                Dom = <LxaBox />;
                break;
            case 'jsj':
                Dom = <Jsj />;
                break;
            case 'xyzj':
                Dom = <Zjxr />;
                break;
            case 'zjlx':
                Dom = <Zjlx />;
                break;
            case 'api':
                Dom = <Api />;
                break;
            case 'cass':
                Dom = <Cass />;
                break;
            case 'props':
                Dom = <Props />;
                break;
            case 'life':
                Dom = <Life />;
                break;
            case 'sjky':
                Dom = <Sjky />;
                break;
            case 'jdlj':
                Dom = <Jdlj />;
                break;
            case 'antd':
                Dom = <Antd />;
                break;
            case 'gjzj':
                Dom = <Gjzj />;
                break;
            case 'jtsy':
                Dom = <Jtsy />;
                break;
            case 'refs':
                Dom = <Refs />;
                break;
            case 'sjbd':
                Dom = <Sjbd />;
                break;
            case 'sjdx':
                Dom = <Sjdx />;
                break;
            case 'tjxr':
                Dom = <Tjxr />;
                break;
            case 'zjnzapi':
                Dom = <Zjnzapi />;
                break;
            case 'setstate':
                Dom = <Setstate />;
                break;
            case 'option':
                Dom = <Option />;
        }
        return (
            <Mylayout getsondata={this.getSonData}>
                {Dom}
            </Mylayout>
        )
    }
}
