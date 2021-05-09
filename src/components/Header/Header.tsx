import React from 'react'
import { Layout, Row, Col } from 'antd'
import Login from '../Login/Login'
import Search from '../Search/SearchInput'
import './Header.less'

const Header = () => (
  <Layout.Header className="Header">
    <Row justify="space-between">
      <Col className="align-center" xs={{ span: 11, offset: 1 }} xl={{ span: 8, offset: 2 }}>
        <Search />
      </Col>
      <Col xl={{ span: 2, offset: 4 }}>
        <Login />
      </Col>
    </Row>
  </Layout.Header>
)

export default Header
