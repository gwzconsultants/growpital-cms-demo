import moment from 'moment'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import {  Link, useParams } from 'react-router-dom'
import { fetchBlogDetails,fetchBlogSearch  } from '../../redux/blog-page/BlogSlice'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'


const BlogDetails = () => {
    const [modifendBlogDetails, setmodifendBlogDetails] = useState([]);
    const { loading, blogDetails, } = useSelector((state) => ({ ...state.blog }))
    const [value, setValue] = useState()
    const dispatch = useDispatch();
    const { slug  } = useParams();
    useEffect(() => {
        dispatch(fetchBlogDetails({ slug }));
    }, [dispatch, slug]);
    
    const handleClcik = (e) => {
        // console.log(value)
        dispatch(fetchBlogSearch({ value }));
    }

    useEffect(() => {
        if (blogDetails.length > 0) {
            const { title, slug, description, date } = blogDetails[0].attributes;
            const { category_name } = blogDetails[0].attributes.blog_category.data.attributes
            const { url } = blogDetails[0].attributes.image.data.attributes;
            const { id } = blogDetails[0];
            setValue(category_name)
            let NewDate = moment(date).format("MMM DD,YYYY")
            const newblogDetails= {
                url, title, slug, id, description, NewDate, category_name
            };
            setmodifendBlogDetails(newblogDetails);
        } else {
            setmodifendBlogDetails(null);
        }

    }, [slug, blogDetails]);

    if (!modifendBlogDetails) {
        return <h2>No Details</h2>;
    } else {
        const { url, title, description, NewDate, category_name } = modifendBlogDetails;

        return (
            <>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (<>
                    <Header />
                    <section>
                        <Container  >
                            <Row className='text-white mb-3'>
                                <Col xs={12}>
                                    <div className='profile '>
                                        <div className='cover-profile '>
                                            <img src={`${process.env.REACT_APP_BASE_URL}${url}`} alt="" className='cover-img w-100 h-100 rounded-4' />
                                        </div>
                                    </div>
                                    <div>
                                        <Row className='pt-2 w-100'>
                                            <Col className='text-capitalize'><span>{NewDate}</span></Col>
                                            <Col className='text-end'><span onClick={handleClcik}>
                                                {/* <Link  to={{ pathname: `/blog`}} style={{ textDecoration: "none" }} > */}
                                                {category_name}
                                                {/* </Link> */}
                                            </span></Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container>
                            <Row className='text-white'>
                                <Col xs={12}>
                                    <h1 className='pb-3'>
                                        {title}
                                    </h1>

                                    <ReactMarkdown transformImageUri={uri =>
                                        uri.startsWith("http") ? uri : `${process.env.REACT_APP_BASE_URL}${uri}`
                                    } children={description} />





                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <Footer />
                </>
                )}
            </>
        )
    }
}

export default BlogDetails