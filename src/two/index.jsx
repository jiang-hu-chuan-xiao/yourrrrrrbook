import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/blog.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.UseOfComponents.one.title} text={date.UseOfComponents.one.content + date.UseOfComponents.one.attention} />
                <Card title={date.UseOfComponents.two.title} text={date.UseOfComponents.two.content + date.UseOfComponents.two.attention} />
            </div>
        )
    }
}
