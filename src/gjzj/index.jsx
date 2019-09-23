import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/xing.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.gjzj.one.title} text={date.gjzj.one.content} />
                <Card text={date.gjzj.one.contentone} />
                <Card title={date.gjzj.two.title} text={date.gjzj.two.content} />
            </div>
        )
    }
}
