import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/xing.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.zjnzapi.one.title} text={date.zjnzapi.one.content} />
                <Card text={date.zjnzapi.one.contentone} />
                <Card text={date.zjnzapi.one.contenttwo} />
            </div>
        )
    }
}
