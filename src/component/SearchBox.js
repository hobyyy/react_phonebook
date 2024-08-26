import React from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap'

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control type="text" placeholder="Enter Name" />
      </Col>
      <Col lg={2}>
        <Button>Search</Button>
      </Col>
    </Row>
  )
}

export default SearchBox