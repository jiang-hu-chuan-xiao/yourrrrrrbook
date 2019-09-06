import React from 'react'
import obj from './index.json'
import { Card } from 'antd';

export default () => {
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Card title={obj.one.num.font1} bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}
