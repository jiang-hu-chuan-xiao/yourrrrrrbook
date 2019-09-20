import React, { Component } from 'react';
import './register.css';
import { Icon, Input, Button, Checkbox } from 'antd';
import { notification } from 'antd';
import axios from 'axios';

class Index extends Component {
    constructor() {
        super()
        this.state = {
            username: '', //用户名
            password: '', //密码
            repassword: '', //确认密码
            treaty: false
        }
    }
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.name === 'treaty' ? target.checked : target.value
        })
    }
    verif = () => {
        const args = {
            message: '错误提示',
            description:
                '用户名不能为空，且长度不小于六位',
            duration: 1,
        };
        const args1 = {
            message: '错误提示',
            description:
                '密码不许为空，且必须是6-20个字母、数字、下划线',
            duration: 1,
        };
        const args2 = {
            message: '错误提示',
            description:
                '两次密码不一致，请检查密码',
            duration: 1,
        };
        const args3 = {
            message: '错误提示',
            description:
                '请同意协议',
            duration: 1,
        };
        const { username, password, treaty, repassword } = this.state;
        if (!username.trim() || username.length < 6) {
            return notification.open(args);
        } else if (!password.trim() || !/^(\w){6,20}$/.test(password)) {
            return notification.open(args1);
        } else if (!(password === repassword)) {
            return notification.open(args2);
        } else if (!treaty) {
            return notification.open(args3);
        }
        return true;
    }
    onRegister = () => {
        const args = {
            message: '错误提示',
            description:
                '用户名不能为空，且长度不小于六位',
            duration: 1,
        };
        const args1 = {
            message: '错误提示',
            description:
                '密码不许为空，且必须是6-20个字母、数字、下划线',
            duration: 1,
        };
        const args4 = {
            message: '提示',
            description:
                '注册成功',
            duration: 1,
        };
        const args2 = {
            message: '提示',
            description:
                '小恐龙把网吃掉了',
            duration: 1,
        };
        if (this.verif()) {
            return notification.open(args4);
        }






        // 1.前端验证，验证通过之后
        const { username, password } = this.state;
        if (!username.trim()) {
            return notification.open(args);
        } else if (!password.trim()) {
            return notification.open(args1);
        }
        // 2.调用接口，接口返回的数据存到全局里面
        // 凡事涉及到用户信息的，在接口中一定是用post请求
        axios.get('/api/index.json', { username, password }).then((res) => {
            if (res.status === 200) {
                // 将账户密码存到本地，在真实的项目里不能这样做，仅适用于测试
                sessionStorage.setItem('userRegister', JSON.stringify(username, password))
                // 3.控制跳转到登录页面
                this.props.getstatus({ ...res.data, typename: "login" })
            } else {
                return notification.open(args2);
            }
        })







    }
    render() {
        const { username, password, treaty, repassword } = this.state;
        return (
            <div className="login">
                <Input type="text" name="username" value={username} onChange={this.handleChange} placeholder="用户名" autoComplete="off" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                <Input type="password" name="password" value={password} onChange={this.handleChange} placeholder="密码" autoComplete="off" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                <Input type="password" name="repassword" value={repassword} onChange={this.handleChange} placeholder="确认密码" autoComplete="off" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Repassword" />
                <div className="login-msg">
                    <Checkbox>Remember me</Checkbox>
                    <span>
                        <a onClick={this.props.click}>Log in</a>
                    </span>
                </div>
                <Button onClick={this.onRegister} type="button" className="login-form-button">
                    Sign in
                </Button>
                <label>
                    <input type="checkbox" checked={treaty} value='checkbox' name='treaty' onChange={this.handleChange} />
                    阅读隐私
                    <a href="http://baidu.com" target='_black'>协议</a>
                </label>
            </div>
        );
    }
}

export default Index;