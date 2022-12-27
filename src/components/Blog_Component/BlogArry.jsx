import { CircularProgress } from '@mui/material'
import moment from 'moment/moment'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// import { useEffect } from 'react'
import { Card, CardGroup, Col, Container, Row, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBlog } from '../../redux/blog-page/BlogSlice'


const BlogArry = (props) => {
  const { show } = props
  const { loading, blogs, error } = useSelector((state) => ({ ...state.blog }))
  const [modifiedBlog, setModifiedBlogs] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBlog())
  }, [dispatch])



  useEffect(() => {
    if (blogs) {
      const newBlogs = blogs.slice(0).reverse().map(item => {
        const { title, date, description, slug, } = item.attributes;
        const { url } = item.attributes.image.data.attributes;
        const { category_name } = item.attributes.blog_category.data.attributes
        let NewDate = moment(date).format("MMM DD,YYYY")

        return {
          category_name,
          name: title,
          date: NewDate,
          description,
          slug,
          url

        }
      })
      setModifiedBlogs(newBlogs)
    } else { setModifiedBlogs([]) }



  }, [blogs]);

  if (loading) {
    return (<CircularProgress color="secondary" />)
  }
  if (!blogs) {

    <h2>Not this cocktail are present</h2>


  }

  if (error) {
    return (<p className='text-white'>{error.message}</p>)
  }
  return (
    <>
      <section className='py-5'>
        <Container>
          {/*if else condition check properly change both condition */}
          {show ?
            // for all coloum in one row
            // start
            <Row>
              {modifiedBlog.map((item, index) => (
                <Col md={6} data-aos="fade-up" data-aos-once="true" key={index}>
                  <Link
                    to={{
                      pathname: `/blog/${item.slug}`
                    }} style={{ textDecoration: "none" }} >
                    <CardGroup  >
                      <Card className='bg-transparent border-0 text-white cover-img ' >
                        <Card.Body >
                          <Card.Img variant="top" src={`/${item.url}` }className="rounded-3 " style={{ maxHeight: "18rem" }} />
                          <Row className='pt-2 w-100'>
                            <Col className='text-capitalize'><Card.Text><span>{item.date}</span> </Card.Text></Col>
                            <Col className='text-end'><Card.Text>{item.category_name}</Card.Text></Col>
                          </Row>
                          <Card.Title className='py-2'>{item.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </Link>
                </Col>
              ))}
            </Row>
            // end
            :
            // if else condition check properly change both condition
            // start
            <Row>
              {modifiedBlog.slice(0, 1).map((item, index) => (
                <Link to={
                  { pathname: `/blog/${item.slug}` }
                } style={{ textDecoration: "none" }} key={index}>
                  <section className='py-5'>
                    <Container>
                      <Row>
                        <Col md={6} data-aos="fade-up" data-aos-once="true" >
                          <div>
                            <img src={`/api/${item.url}`} alt="blog-img" className='img-fluid rounded-3' />
                          </div>
                        </Col>
                        <Col md={6} data-aos="fade-up">
                          <Card className='bg-transparent border-0 text-white'>
                            <Card.Body>
                                <Row className='pt-2'>
                            
                                  <Col className='text-capitalize'><Card.Text><span>{item.date}</span> </Card.Text></Col>
                                  <Col className='text-end'><Card.Text>{item.category_name}</Card.Text></Col>
                            
                                </Row>
                              <Card.Title className='py-2'>{item.name}</Card.Title>
                              <Card.Text>
                                {item.description}

                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                </Link>
              ))}
              {modifiedBlog.slice(1).map((item, index) => (
                <Col md={6} data-aos="fade-up" data-aos-once="true" key={index}>
                  <Link
                    to={{
                      pathname: `/blog/${item.slug}`
                    }} style={{ textDecoration: "none" }} >
                    <CardGroup  >
                      <Card className='bg-transparent border-0 text-white cover-img ' >
                        <Card.Body >
                          <Card.Img variant="top" src={`${process.env.REACT_APP_BASE_URL}${item.url}`} className="rounded-3 " style={{ maxHeight: "18rem" }} />
                          <Row className='pt-2'>
                            <Col className='text-capitalize'><Card.Text><span>{item.date}</span> </Card.Text></Col>
                            <Col className='text-end'><Card.Text>{item.category_name}</Card.Text></Col>
                          </Row>
                          <Card.Title className='py-2'>{item.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </Link>
                </Col>
              ))}
            </Row>
            // end
          }

        </Container>
      </section>
    </>)
}

export default BlogArry


