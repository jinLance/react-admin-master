import React from 'react'
import {Button, Row, Col, Card, Icon, Radio, Dropdown, Menu, message} from 'antd'
import CustomBreadcrumb from '../../../common/CustomBreadcrumb/index'


class ButtonDemo extends React.Component {
  state = {
    size: 'small'
  }
  handleSizeChange = (e) => {
    this.setState({
      size: e.target.value,
      loading: false,
      iconLoading: false
    })
  }

  handleMenuClick(e) {
    message.info(`Click on menu ${e.key} item.`)
  }

  render() {
    const {size, loading, iconLoading} = this.state
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <CustomBreadcrumb first='UI' last='按钮'/>
        <Card hoverable bordered={false} style={{marginBottom: 5}} title='何时使用'>
          标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
        </Card>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem}>
              <Button type="primary">Primary</Button>&emsp;
              <Button>Default</Button>&emsp;
              <Button type="dashed">Dashed</Button>&emsp;
              <Button type="danger">Danger</Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem}>
              <p>
                <Button type="primary" shape="circle" icon="search"/>&emsp;
                <Button type="primary" icon="search">Search</Button>&emsp;
                <Button shape="circle" icon="search"/>&emsp;
                <Button icon="search">Search</Button>&emsp;
              </p>
              <p style={{marginBottom: 0}}>
                <Button shape="circle" icon="search"/>&emsp;
                <Button icon="search">Search</Button>&emsp;
                <Button type="dashed" shape="circle" icon="search"/>&emsp;
                <Button type="dashed" icon="search">Search</Button>
              </p>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem}>
              <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
              <p style={{marginTop: '1em'}}>
                <Button type="primary" size={size}>Primary</Button>&emsp;
                <Button size={this.state.size}>Default</Button>&emsp;
                <Button type="dashed" size={size}>Dashed</Button>&emsp;
                <Button type="danger" size={size}>Danger</Button>
              </p>
              <p>
                <Button shape='circle' type='primary' icon="download" size={size}/>&emsp;
                <Button type="primary" icon="download" size={size}>Download</Button>
              </p>
              <div>
                <Button.Group size={size}>
                  <Button><Icon type="left"/>Backward</Button>&emsp;
                  <Button>Forward<Icon type="right"/></Button>
                </Button.Group>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem}>
              <Button type="primary">primary</Button>&emsp;
              <Button>secondary</Button>&emsp;
              <Dropdown overlay={menu}>
                <Button>Button<Icon type='down'/></Button>
              </Dropdown>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem}>
              <p>
                <Button loading type='primary'>Loading</Button>&emsp;
                <Button type='primary' loading shape='circle'/>
              </p>
              <div>
                <Button loading={loading} onClick={() => this.setState({loading: true})}>Click me</Button>&emsp;
                <Button loading={iconLoading} onClick={() => this.setState({iconLoading: true})} icon='poweroff'>Click
                  me</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const styles = {
  colItem: {
    borderRadius: 3,
    margin: '5px 0'
  }
}

export default ButtonDemo