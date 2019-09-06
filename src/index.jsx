import React, { Component } from 'react'
import Mylayout from './html/index.jsx';
// 引入React基础概述
import WzlBox from './one/index';
// react组件分类
import LxaBox from './two/index';

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
                Dom = <LxaBox />
        }
        return (
            <Mylayout getsondata={this.getSonData}>
                {Dom}
            </Mylayout>
        )
    }
}
