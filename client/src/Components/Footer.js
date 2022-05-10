import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
      <Row className='fixed-bottom' style={{ background: 'black' }}>
        <Col className='text-center py-1 text-white'>
          Copyright 2022 Mern - Blog &copy;
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
