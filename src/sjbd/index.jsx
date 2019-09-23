import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/xing.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.sjbd.one.title} text={date.sjbd.one.content} />
                <Card text={date.sjbd.one.contentone} />
            </div>
        )
    }
}
