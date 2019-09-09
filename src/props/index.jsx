import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/vbor.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.props.one.title} text={date.props.one.content + date.props.one.contentone} />
                <Card title={date.props.two.title} text={date.props.two.content + date.props.one.contentone} />
            </div>
        )
    }
}
