import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/vbor.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.smzq.one.title} text={date.smzq.one.content + date.smzq.one.contentone} />
                <Card title={date.smzq.two.title} text={date.smzq.two.content + date.smzq.one.contentone} />
            </div>
        )
    }
}
