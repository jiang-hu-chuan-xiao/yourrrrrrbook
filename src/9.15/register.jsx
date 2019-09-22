import React, { Component } from "react";
import { Input, notification, Icon, Button } from 'antd';
import axios from "axios";

const myState = {
    username: "",
    password: ""
};
class Index extends Component {
    // 重置表单事件
    reSetForm = () => {
        this.setState(myState);
    };
    // 改变state里的值
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    };
    // 构造函数
    constructor() {
        super();
        this.state = myState;
    }
    // 渲染函数
    render() {
        const { username, password } = this.state;
        return (
            <form autoComplete="off" onReset={this.reSetForm}>
                <label htmlFor="">
                    输入框：
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        value={username}
                        onChange={this.handleChange}
                        name="username"
                    />
                </label>
                <label htmlFor="">
                    密码框：
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                        name="password"
                    />
                </label>

                <label htmlFor="">
                    <Button type="button" onClick={this.register}>
                        注册
                    </Button>
                </label>
            </form>
        );
    }
    // 注册
    register = () => {
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
        // 1.前端验证，验证通过以后
        const { username, password } = this.state;
        if (!username.trim() || username.length < 6) {
            return notification.open(args);
        } else if (!password.trim() || !/^(\w){6,20}$/.test(password)) {
            return notification.open(args1);
        }
        // 2.调用接口，接口返回的数据存到全局里面
        // 凡是涉及到用户数据信息的，在接口中一定是用post请求方式
        axios.get("/api/register.json", { username, password }).then(res => {
            if (res.status === 200) {
                // 将账号密码存到本地一份【注意：在真实的项目里，不能这样做，仅适用于测试本地开发】
                sessionStorage.setItem(
                    "userRegister",
                    JSON.stringify({ username, password })
                );
                // 3.控制跳转到登陆页面
                this.props.getstatus({ ...res.data, typename: "login" });
            } else {
                alert("网路错误，稍后重试");
            }
        });
    };
}

export default Index;