import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/xing.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.setstate.one.title} text={date.setstate.one.content} />
                <Card text={date.setstate.one.contentone} />
                <Card text={date.setstate.one.contenttwo} />
                <Card text={date.setstate.one.contentthree} />
                <Card text={date.setstate.one.contentfore} />
            </div>
        )
    }
}
