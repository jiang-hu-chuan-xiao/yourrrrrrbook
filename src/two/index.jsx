import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/blog.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.UseOfComponents.one.title} text={date.UseOfComponents.one.content} />
                <Card text={date.UseOfComponents.one.content1} />
                <Card title={date.UseOfComponents.two.title} text={date.UseOfComponents.two.content} />
                <Card text={date.UseOfComponents.two.content1} />
            </div>
        )
    }
}
