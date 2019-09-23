import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/xing.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.tjxr.one.title} text={date.tjxr.one.content} />
                <Card text={date.tjxr.one.contentone} />
            </div>
        )
    }
}
