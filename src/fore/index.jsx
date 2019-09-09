import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/blog.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.RenderingComponent.one.title} text={date.RenderingComponent.one.content} />
                <Card title={date.RenderingComponent.two.title} text={date.RenderingComponent.two.content} />
            </div>
        )
    }
}
