import React, { Component } from "react";
import { Input, Icon, notification, Button } from 'antd';
import Axios from "axios";
import './index.scss'
class Login extends Component {
    constructor() {
        super();
        this.userInfo = JSON.parse(sessionStorage.getItem("userRegister"));
        this.state = {
            username: (this.user && this.user.username) || "",
            password: ""
        };
    }
    // 改变input值
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    };
    // 提交
    onSubmit = () => {
        const user = {
            message: '用户名不许为空',
            duration: 1
        };
        const pass = {
            message: '密码不许为空',
            duration: 1
        };
        const nouser = {
            message: '该账号不存在，请立即注册',
            duration: 1
        };
        const usern = {
            message: '用户名不对',
            duration: 1
        };
        const passn = {
            message: '密码错误',
            duration: 1
        };
        const { username, password } = this.state;
        // 1.前端验证
        if (!username.trim()) {
            return notification.open(user);
        } else if (!password.trim()) {
            return notification.open(pass);
        }
        // 接口
        Axios.get("/api/register.json", {
            username,
            password
        }).then(res => {
            const login = { username, password };
            console.log(login)
            const userInfo = this.userInfo;
            console.log(userInfo)
            if (!userInfo) {
                notification.open(nouser);
            } else if (userInfo.username !== login.username) {
                notification.open(usern);
            } else if (userInfo.password !== login.password) {
                notification.open(passn);
            } else {
                this.props.getstatus({ ...res.data, typename: "home" });
            }
            console.log("提交");
        });
    };
    render() {
        const { username, password } = this.state;
        return (
            <form>
                <label>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        placeholder="用户名"
                    />
                </label>
                <label>
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        value={password}
                        name="password"
                        onChange={this.handleChange}
                        placeholder="密码"
                    />
                </label>
                <label>
                    <Button type="button" onClick={this.onSubmit}>
                        登陆
                    </Button>
                </label>
            </form>
        );
    }
}

export default Login;