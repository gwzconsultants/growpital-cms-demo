import React from 'react'
import { useEffect } from 'react'
import { Card, CardGroup, Col, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { blogData } from '../data/BlogData'

const BlogArry = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {blogData.map((item, id) => (
        <Col md={6} key={item.id}>
          <Link
            to={{
              pathname: `/blog/${item.link}`
            }} style={{ textDecoration: "none" }} >
            <CardGroup>
              <Card className='bg-transparent border-0 text-white' >
                <Card.Body>
                <Card.Img variant="top" src={item.img} className="rounded-3" />
                <Row className='pt-2'>
                  <Col className='text-capitalize'><Card.Text><span>{item.date}</span> </Card.Text></Col>
                  <Col className='text-end'><Card.Text>{item.title}</Card.Text></Col>
                </Row>
                  <Card.Title className='py-2'>{item.heading}</Card.Title>
                </Card.Body>

              </Card>
            </CardGroup>
          </Link>
        </Col>
      ))}
    </>)
}

export default BlogArry


