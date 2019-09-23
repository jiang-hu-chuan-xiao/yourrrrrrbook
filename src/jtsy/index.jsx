import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/xing.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.jtsy.one.title} text={date.jtsy.one.content} />
                <Card text={date.jtsy.one.contentone} />
            </div>
        )
    }
}
