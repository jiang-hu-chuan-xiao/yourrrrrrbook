import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/blog.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.staging.one.title} text={date.staging.one.content} />
            </div>
        )
    }
}
