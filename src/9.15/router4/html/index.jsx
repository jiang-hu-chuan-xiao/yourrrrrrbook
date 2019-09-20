import React from 'react';
import './index.scss';
import data from '../jsonps/jsonps.json';
export default class Task1 extends React.Component {
    constructor() {
        super()
        this.state = {
            radio: "1",
            checkbox: [
                {
                    bool: false,
                    content: "一天吃5次主食"
                },
                {
                    bool: false,
                    content: "不光吃5次主食还要喝8杯可乐"
                },
                {
                    bool: false,
                    content: "除了5次主食8杯可乐还要吃半斤多的零食"
                },
                {
                    bool: false,
                    content: "吃完上面的食物，打开朋友圈发一条减肥的口号"
                },
                {
                    bool: false,
                    content: "素食主主义"
                },
                {
                    bool: false,
                    content: "热爱运动"
                },
                {
                    bool: false,
                    content: "喜欢古典音乐"
                },
                {
                    bool: false,
                    content: "喜欢看书，偶尔也写点东西"
                }
            ],
            result: [],
            area: ''
        }
    }

    handleChange = (event, id) => {
        event.persist();
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked
        const checkboxs = JSON.parse(JSON.stringify(this.state.checkbox))

        if (name === 'checkbox') {
            checkboxs[value].bool = checked
        }

        this.setState({
            [name]: name === 'checkbox' ? checkboxs : name === "radio" ? id : value
        })
    }


    onSubmit = () => {
        let { result, radio, checkbox } = this.state;

        let radios = data.Single.choice.find(item => item.id === radio);
        result = [...result, radios.content];


        checkbox.filter(item => {
            if (item.bool) {
                result = [...result, item.content];
            } else {
                result = result.filter(items => items.content !== item.content);
            }
        });


        result = [...result, this.state.area];


        alert(result);
    };
    render() {
        const { radio, area, checkbox } = this.state
        return (
            <div className='main'>
                <div className='fluid'>
                    <form>


                        {data.Single.question}
                        {data.Single.type}
                        {data.Single.choice.map((item, index) => {
                            return (
                                <label className='form-label' key={index}>
                                    <input type='radio' name='radio' checked={radio === item.id} value={item.id} onChange={(event) => this.handleChange(event, item.id)} />
                                    <span>{item.content}</span>
                                </label>
                            )
                        })}


                        {data.Multiple.question}
                        {data.Multiple.type}

                        {checkbox.map((item, index) => {
                            return (
                                <label className='form-label' key={index}>
                                    <input type='checkbox' name='checkbox' checked={item.bool} value={index} onChange={this.handleChange} />
                                    <span>{item.content}</span>
                                </label>
                            )
                        })}


                        {data.answers.question}
                        {data.answers.type}
                        <label className='form-label'>

                            <textarea value={area} name='area' onChange={this.handleChange}></textarea>
                        </label>


                        <label className='form-label'>
                            <input type='button' className='btn' value='提交' onClick={this.onSubmit} />
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}