import React, { Component } from 'react'
import Card from '../html/card'
import date from '../html/blog.json'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Card title={date.staging.one.title} text={1+"、"+date.staging.one.content} />
                <Card text={2+"、"+date.staging.one.content1} />
                <Card text={3+"、"+date.staging.one.content2} />
                <Card text={4+"、"+date.staging.one.content3} />

                <Card title={date.staging.two.title} text={1+"、"+date.staging.two.content} />
                <Card text={2+"、"+date.staging.two.content1} />
            </div>
        )
    }
}
