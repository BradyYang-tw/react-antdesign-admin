import React from 'react';
import { Button, Card, Col, Row, Image } from 'antd';
import eightMenu from '../static/eight.jpg'

const ExistMenu: React.FC = () => (
  <div className="site-card-wrapper">
    <Row gutter={[16, 24]}>
      <Col span={8}>
        <Card title="八方雲集" extra={<Button>立刻開團</Button>} bordered={false} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <Image height={100} width={200} src={eightMenu} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="肉骨茶麵" bordered={false} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <Image height={100} width={200} src={eightMenu} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Pizza Hot" bordered={false} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <Image height={100} width={200} src={eightMenu} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="八方雲集" extra={<Button>立刻開團</Button>} bordered={false} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <Image height={100} width={200} src={eightMenu} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="肉骨茶麵" bordered={false} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <Image height={100} width={200} src={eightMenu} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Pizza Hot" bordered={false} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <Image height={100} width={200} src={eightMenu} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="八方雲集" extra={<Button>立刻開團</Button>} bordered={false} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <Image height={100} width={200} src={eightMenu} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="肉骨茶麵" bordered={false} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <Image height={100} width={200} src={eightMenu} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Pizza Hot" bordered={false} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <Image height={100} width={200} src={eightMenu} />
        </Card>
      </Col>
    </Row>
  </div>
);

export default ExistMenu;