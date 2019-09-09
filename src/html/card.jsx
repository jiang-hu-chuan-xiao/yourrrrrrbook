import React from 'react'
import { Card } from 'antd';

export default (props) => {
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Card title={props.title} bordered={false} style={{ width: 300 }}>
                <span>{props.text}</span>
            </Card>
        </div>
    )
}
