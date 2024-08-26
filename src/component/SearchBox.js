import React, { useState } from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  let {contact} = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({type : "SEARCH_BY_NAME", payload:{keyword}})
  }
  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control 
            type="text" 
            placeholder="Enter Name" 
            onChange={(event) => setKeyword(
              console.log('rrr',event)
            )}
          />
        </Col>
        <Col lg={2}>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox