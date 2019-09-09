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
        iconType: 'taobao-circle',
        text: '绝对路径',
        id: 'jdlj'
    },
    {
        iconType: 'taobao-circle',
        text: 'antd',
        id: 'antd'
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

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo"><span>无名博客</span></div>
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