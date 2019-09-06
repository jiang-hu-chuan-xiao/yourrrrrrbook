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
        text: '组件类型',
        id: 'LxaBox'
    },
    {
        iconType: 'upload',
        text: 'jsx组件'
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
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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