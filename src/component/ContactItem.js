import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row>
      <Col lg={1}>
        <img 
          width={50} 
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
        />
      </Col>
      <Col lg={11}>
        <div>{item.name}</div>
        <div>{item.phoneNum}</div>
      </Col>
    </Row>
  )
}

export default ContactItem
