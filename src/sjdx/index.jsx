import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/xing.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.sjdx.one.title} text={date.sjdx.one.content} />
                <Card text={date.sjdx.one.contentone} />
                <Card text={date.sjdx.one.contenttwo} />
            </div>
        )
    }
}
