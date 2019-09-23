import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/blog.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.ComponentContrast.one.title} text={date.ComponentContrast.one.content} />
                <Card title={date.ComponentContrast.two.title} text={date.ComponentContrast.two.content1} />
                <Card text={date.ComponentContrast.two.content2} />
                <Card text={date.ComponentContrast.two.content3} />
                <Card text={date.ComponentContrast.two.content4} />
            </div>
        )
    }
}
