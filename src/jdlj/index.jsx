import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/vbor.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.jsconfig.one.title} text={date.jsconfig.one.content} />
                <Card text={date.jsconfig.one.contentone} />
            </div>
        )
    }
}
