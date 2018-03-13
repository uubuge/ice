import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Table, Progress } from '@icedesign/base';
import LintChart from './LineChart';

const { Row, Col } = Grid;

const activePages = [
  { id: 1, page: '/getting', amount: '2,80,489', percent: 90 },
  { id: 2, page: '/home', amount: '1,98,956', percent: 70 },
  { id: 3, page: '/pricing', amount: '1,90,257', percent: 60 },
  { id: 4, page: '/about', amount: '1,80,745', percent: 50 },
  { id: 5, page: '/blog', amount: '1,24,693', percent: 40 },
  { id: 6, page: '/support', amount: '8,489', percent: 35 },
  { id: 7, page: '/team', amount: '5,233', percent: 30 },
  { id: 8, page: '/faq', amount: '1,688', percent: 20 },
];

const ViewedProducts = [
  {
    id: 1,
    pic:
      'https://img.alicdn.com/imgextra/i3/2616970884/TB2_EHOgS3PL1JjSZFtXXclRVXa_!!2616970884.jpg_60x60q90.jpg',
    title: 'Apple/苹果',
    cate: '电子产品',
    amount: '38,600',
  },
  {
    id: 2,
    pic:
      'https://img.alicdn.com/imgextra/i2/1714128138/TB2NVRzcbMlyKJjSZFlXXbMoFXa_!!1714128138.jpg_60x60q90.jpg',
    title: '小米5X',
    cate: '电子产品',
    amount: '33,779',
  },
  {
    id: 3,
    pic:
      'https://img.alicdn.com/imgextra/i3/3081047815/TB2i7McmHsTMeJjy1zcXXXAgXXa_!!3081047815.jpg_60x60q90.jpg',
    title: '天猫精灵',
    cate: '智能家居',
    amount: '29,588',
  },
  {
    id: 4,
    pic:
      'https://img.alicdn.com/imgextra/i1/1714128138/TB2ABOCcV5N.eBjSZFKXXX_QVXa_!!1714128138.jpg_60x60q90.jpg',
    title: '小米盒子3',
    cate: '智能小家电',
    amount: '8,636',
  },
];

export default class TopActiveChart extends Component {
  static displayName = 'TopActiveChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderProduct = (value, index, record) => {
    return (
      <div style={styles.product}>
        <img src={record.pic} style={styles.productPic} alt="" />
        <p style={styles.productTitle}>{record.title}</p>
      </div>
    );
  };

  render() {
    return (
      <Row wrap gutter="20">
        <Col xxs="24" s="12" l="12">
          <IceContainer title="活跃页面">
            <Table
              dataSource={activePages}
              hasBorder={false}
              hasHeader={false}
              style={{ width: '100%', height: '341px' }}
            >
              <Table.Column title="ID" dataIndex="id" width="5%" />
              <Table.Column title="页面" dataIndex="page" />
              <Table.Column title="销售数量" dataIndex="amount" />
              <Table.Column
                title="销售占比"
                dataIndex="page"
                cell={(value, index, record) => (
                  <Progress percent={record.percent} showInfo={false} />
                )}
              />
            </Table>
          </IceContainer>
        </Col>
        <Col xxs="24" s="12" l="12">
          <IceContainer title="浏览最多">
            <Table
              dataSource={ViewedProducts}
              hasBorder={false}
              hasHeader={false}
              style={{ height: '342px' }}
            >
              <Table.Column
                title="产品"
                dataIndex="title"
                cell={(value, index, record) =>
                  this.renderProduct(value, index, record)
                }
                width="40%"
              />
              <Table.Column title="分类" dataIndex="cate" width="20%" />
              <Table.Column
                title="销售趋势"
                width="20%"
                cell={() => <LintChart />}
              />
              <Table.Column title="销售数量" dataIndex="amount" width="20%" />
            </Table>
          </IceContainer>
        </Col>
      </Row>
    );
  }
}

const styles = {
  product: {
    display: 'flex',
    alignItems: 'center',
  },
  productPic: {
    width: '60px',
    height: '60px',
  },
  productTitle: {
    margin: '0 0 0 10px',
  },
};
