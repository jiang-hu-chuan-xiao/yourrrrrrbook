import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/blog.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.OverView.one.title} text={1+"、"+date.OverView.one.content} />
                <Card text={2+"、"+date.OverView.one.content1} />
                <Card text={3+"、"+date.OverView.one.content2} />
                <Card text={4+"、"+date.OverView.one.content3} />
                <Card text={5+"、"+date.OverView.one.content4} />
                <Card text={6+"、"+date.OverView.one.content5} />
                <Card text={7+"、"+date.OverView.one.content6} />
                <Card text={8+"、"+date.OverView.one.content7} />
                <Card text={9+"、"+date.OverView.one.content8} />
                <Card title={date.OverView.two.title} text={date.OverView.two.content} />
            </div>
        )
    }
}
