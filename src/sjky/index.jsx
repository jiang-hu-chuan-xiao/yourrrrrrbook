import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/vbor.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.events.one.title} text={date.events.one.content + date.events.one.contentone} />
                <Card text={date.events.one.content1} />
                <Card text={date.events.one.content2} />
                <Card text={date.events.one.content3} />
                <Card text={date.events.one.content4} />
                <Card title={date.events.two.title} text={date.events.two.content} />
                <Card text={date.events.two.contentone} />
            </div>
        )
    }
}
