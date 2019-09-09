import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/blog.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.OverView.one.title} text={date.OverView.one.content} />
                <Card title={date.OverView.two.title} text={date.OverView.two.content} />
            </div>
        )
    }
}
