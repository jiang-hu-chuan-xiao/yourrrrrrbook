import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/vbor.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.antd.one.title} text={date.antd.one.content + date.antd.one.contentone} />
            </div>
        )
    }
}
