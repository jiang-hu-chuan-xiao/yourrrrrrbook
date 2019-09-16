import React, { Component } from "react";
// import "./style/index.scss";
// 注册
import Register from "./routing-jump/register/register";
// 登陆
import Login from "./routing-jump/signin/login";
// 首页
import Home from "./routing-jump/home/index";
class Index extends Component {
    constructor() {
        super();
        this.state = {
            isDom: "register"
        };
    }
    // 获取组件的返回状态
    getstatus = data => {
        this.setState({
            isDom: data.typename
        });
    };
    // 渲染函数
    render() {
        let Dom = "";
        switch (this.state.isDom) {
            case "register":
                Dom = <Register getstatus={this.getstatus} />;
                break;
            case "login":
                Dom = <Login getstatus={this.getstatus} />;
                break;
            case "home":
                Dom = <Home />;
        }
        return <div>{Dom}</div>;
    }
}

export default Index;
