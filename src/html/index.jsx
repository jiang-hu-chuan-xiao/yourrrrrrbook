import React from 'react'
import './index.scss'
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

const leftNav = [
    {
        iconType: 'solution',
        text: 'React概述',
        id: 'WzlBox'
    },
    {
        iconType: 'video-camera',
        text: '函数组件',
        id: 'LxaBox'
    },
    {
        iconType: 'taobao-circle',
        text: '脚手架',
        id: 'jsj'
    },
    {
        iconType: 'taobao-circle',
        text: '渲染组件',
        id: 'xyzj'
    },
    {
        iconType: 'solution',
        text: '组件类型',
        id: 'zjlx'
    },
    {
        iconType: 'taobao-circle',
        text: '顶级api',
        id: 'api'
    },
    {
        iconType: 'video-camera',
        text: 'cass的使用',
        id: 'cass'
    },
    {
        iconType: 'taobao-circle',
        text: 'props控制组件',
        id: 'props'
    },
    {
        iconType: 'solution',
        text: '生命周期',
        id: 'life'
    },
    {
        iconType: 'taobao-circle',
        text: '事件、跨域',
        id: 'sjky'
    },
    {
        iconType: 'solution',
        text: '绝对路径',
        id: 'jdlj'
    },
    {
        iconType: 'taobao-circle',
        text: 'antd',
        id: 'antd'
    },
    {
        iconType: 'video-camera',
        text: '高阶组件',
        id: 'gjzj'
    },
    {
        iconType: 'taobao-circle',
        text: '模板组件',
        id: 'jtsy'
    },
    {
        iconType: 'video-camera',
        text: 'refs',
        id: 'refs'
    },
    {
        iconType: 'taobao-circle',
        text: '事件绑定',
        id: 'sjbd'
    },
    {
        iconType: 'video-camera',
        text: '节流与防抖',
        id: 'sjdx'
    },
    {
        iconType: 'taobao-circle',
        text: '条件渲染',
        id: 'tjxr'
    },
    {
        iconType: 'video-camera',
        text: '更新',
        id: 'zjnzapi'
    },
    {
        iconType: 'taobao-circle',
        text: 'setstate',
        id: 'setstate'
    },
    {
        iconType: 'taobao-circle',
        text: '表单选项',
        id: 'option'
    }
]

export default class index extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    componentDidMount() {
        var obj = window.parent.document;
        //
        function onMouseWheel(e) {
            var e = e || window.event;
            if (e.type == "mousewheel") {
                delta = e.wheelDelta / 12;
            } else {
                delta = e.detail / 3 * -10;
            };

            if (chrome != -1) {
            } else {
                obj.documentElement.scrollTop -= delta;
                //阻止默认事件
                if (e.preventDefault) {
                    e.preventDefault();
                }
                return false;
            }
        }

        if (obj != null && obj != undefined) {
            var chrome = navigator.userAgent.search(/chrome/i),
                delta = 0;

            if (chrome != -1) {
                document.addEventListener("mousewheel", onMouseWheel, false);
            }
        }
    }
    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo"><span>蛋蛋公司</span></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                        {
                            leftNav.map((item, index) => {
                                return (
                                    <Menu.Item key={index} onClick={() => { this.props.getsondata(item.id) }}>
                                        <Icon type={item.iconType} />
                                        <span>{item.text}</span>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        {/* {obj.one.font} */}
                        {
                            this.props.children
                        }
                    </Content>
                </Layout>
            </Layout>
        );
    }
}