import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/xing.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.refs.one.title} text={date.refs.one.content} />
            </div>
        )
    }
}
