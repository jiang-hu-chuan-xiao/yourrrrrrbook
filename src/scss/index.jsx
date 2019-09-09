import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/vbor.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.cass.one.title} text={date.cass.one.content} />
                <Card title={date.cass.two.title} text={date.cass.two.content} />
            </div>
        )
    }
}
