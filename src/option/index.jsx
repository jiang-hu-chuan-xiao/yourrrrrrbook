import React, { Component } from 'react'
import './style/index.css'

export default class child extends Component {
    constructor(){
        super()
        this.state = {
            radio:'1',
            checkbox:[false,false,false,false,false,false,false,false],
            siggle:'',
            more:[]
        }
    };
    handleSubmit = e => {
        const { target } = e
        e.preventDefault()
    }
    handleChange = ({target}) => {
        if(target.name === 'checkbox'){
            const newCheckbox = [...this.state.checkbox];
            newCheckbox[target.value] = target.checked;
            this.setState({
                [target.name]:newCheckbox
            })
        }else{
            this.setState({
                [target.name]:target.value
            });
        }
    }
    // 提交
    clicked=()=>{
        const str = this.state.more.join(' ') + this.state.siggle
        alert(str)
    }
    // 放单选
    onSigle=(e)=>{
        e.stopPropagation()
        this.setState({
            siggle:e.currentTarget.innerText
        })
    }
    // 放多选
    onMore=(e)=>{
        e.stopPropagation()
        // 去重函数
        function unique(arr) {
            if (!Array.isArray(arr)) {
                console.log('type error!')
                return
            }
            let res = []
            for (let i = 0; i < arr.length; i++) {
                if (res.indexOf(arr[i]) === -1) {
                    res.push(arr[i])
                }
            }
            return res
        }
        if(e.currentTarget.children[0].checked){
            this.setState({
                more:unique([...this.state.more,e.currentTarget.innerText])
            })
            return
        }
        let arr =this.state.more
        this.setState({
            more:arr.filter(item=>item !== e.currentTarget.innerText)
        })
    }
    render() {
        const { radio,checkbox } = this.state;
        return (
            <div className='quan'>
                {/* 单选 */}
                <div className='dan'>
                    <form>
                        <b>1.你对互联网的未来发展有什么看发？</b>
                        <a href="/" target='_black'>【单选】</a>
                        <label className='dan1' onClick={this.onSigle}>
                            <input name='radio' type="radio" checked={radio === '0'} value='0' onChange={this.handleChange} />
                            没有看法
                        </label>
                        <label className='dan2' onClick={this.onSigle}>
                            <input name='radio' type="radio" checked={radio === '1'} value='1' onChange={this.handleChange} />
                            我认为996应该尽早废弃
                        </label>
                        <label className='dan3' onClick={this.onSigle}>
                            <input name='radio' type="radio" checked={radio === '2'} value='2' onChange={this.handleChange} />
                            互联网未来会成为主导世界的枢纽
                        </label>
                    </form>
                </div>
                {/* 多选 */}
                <div className='duo'>
                    <form>
                        <b>2.你有哪些爱好？</b>
                        <a href="/" target='_black'>【多选】</a>
                        <label className='duo1'  onClick={this.onMore}>
                            <input type="checkbox" name='checkbox' checked={checkbox[0]} value='0' onChange={this.handleChange} />
                            一天吃5次主食
                        </label>
                        <label className='duo2' onClick={this.onMore}>
                            <input type="checkbox" name='checkbox' checked={checkbox[1]} value='1' onChange={this.handleChange} />
                            不光吃5次主食还要喝8杯可乐
                        </label>
                        <label className='duo3' onClick={this.onMore}>
                            <input type="checkbox" name='checkbox' checked={checkbox[2]} value='2' onChange={this.handleChange} />
                            除了5次主食8杯可乐还要吃半斤多的零食
                        </label>
                        <label className='duo4' onClick={this.onMore}>
                            <input type="checkbox" name='checkbox' checked={checkbox[3]} value='3' onChange={this.handleChange} />
                            吃完上面的食物，打开朋友圈发一条减肥的口号
                        </label>
                        <label className='duo5' onClick={this.onMore}>
                            <input type="checkbox" name='checkbox' checked={checkbox[4]} value='4' onChange={this.handleChange} />
                            素食主义者
                        </label>
                        <label className='duo6' onClick={this.onMore}>
                            <input type="checkbox" name='checkbox' checked={checkbox[5]} value='5' onChange={this.handleChange} />
                            热爱运动
                        </label>
                        <label className='duo7' onClick={this.onClick}>
                            <input type="checkbox" name='checkbox' checked={checkbox[6]} value='6' onChange={this.handleChange} />
                            喜欢古典音乐
                        </label>
                        <label className='duo8' onClick={this.onMore}>
                            <input type="checkbox" name='checkbox' checked={checkbox[7]} value='7' onChange={this.handleChange} />
                            喜欢看书，偶尔也写点东西
                        </label>
                    </form>
                </div>
                <label>
                    <b>3.你认为当代年轻人应该持有怎么样的世界观、人生观、价值观</b>
                    <a href="/" target='_black'>【问答】</a>
                    <input className='ti' type="text" />
                    <button className='jiao' value="按钮" onClick={this.clicked}>提交</button>
                </label>
            </div>
        )
    }
}
