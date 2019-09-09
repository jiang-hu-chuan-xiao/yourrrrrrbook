import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/blog.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.TopAPI.one.title} text={date.TopAPI.one.content} />
                <Card title={date.TopAPI.two.title} text={date.TopAPI.two.content} />
                <Card title={date.TopAPI.three.title} text={date.TopAPI.three.content} />
                <Card title={date.TopAPI.fore.title} text={date.TopAPI.fore.content} />
                <Card title={date.TopAPI.five.title} text={date.TopAPI.five.content} />
            </div>
        )
    }
}
