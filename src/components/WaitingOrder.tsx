import React from 'react';
import { Card } from 'antd';

const WaitingOrder: React.FC = () => (
  <Card title="目前訂單">
    <Card type="inner" title="肉骨茶麵" extra={<a href="#">More</a>}>
    <ul>
        <li>肉骨茶麵</li>
        <li>肉骨茶麵</li>
        <li>肉骨茶麵</li>
      </ul>
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="八方雲集"
      extra={<a href="#">More</a>}
    >
      <ul>
        <li>水餃20顆</li>
        <li>牛肉麵</li>
        <li>乾麵</li>
      </ul>
    </Card>
  </Card>
);

export default WaitingOrder;