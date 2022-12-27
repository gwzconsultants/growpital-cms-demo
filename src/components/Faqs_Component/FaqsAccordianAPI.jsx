
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Accordion, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFaqsAccordian, fetchFaqsCategory } from '../../redux/faqs-page/FaqsSlice';

// how map accordion two equal parts ?       

const FaqsAccordianAPI = (props) => {
  
  const { loading, category, error, faqsAccords } = useSelector((state) => ({ ...state.faqs }))
  const [modifiedFaqsCategory, setModifiedFaqsCategory] = useState([])
  const [modifiedFaqs, setModifiedFaqs] = useState([])

 


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFaqsCategory())
    dispatch(fetchFaqsAccordian())
  }, [dispatch])
  // console.log(check);

  useEffect(() => {
    if (category) {
      const newFaqs = category.map((items) => {
        const { category_name } = items.attributes;
        const { id } = items
      const {length} = items.attributes.faqs_accordians.data  ;
        return {
          category_name,length,
          id
        }


        
        


      })
      //  const data = item.attributes.faqs_accordians.data;
      setModifiedFaqsCategory(newFaqs)
    } else { setModifiedFaqsCategory([]) }
    

  }, [category]);

  useEffect(() => {
    if (faqsAccords) {
      const newFaqs = faqsAccords.map((items, index) => {
        const { heading, details } = items.attributes
        const { category_name } = items.attributes.faqs_category.data.attributes
        const { id } = items.attributes.faqs_category
        
        return {
          category_name,
          heading, details,
          category_nameID: id,
          faqsId: items.id

        }

      })
      //  const data = item.attributes.faqs_accordians.data;
      setModifiedFaqs(newFaqs)
    } else { setModifiedFaqs([]) }


  }, [faqsAccords]);


  if (loading) {
    return (<h3>Loading...</h3>)
  }
  if (!faqsAccords && !category) {

    <h2>network are slow</h2>


  }

  if (error) {
    return (<p>{error.massage}</p>)
  }

  return (
    <>
      {modifiedFaqsCategory.map((items, index) => (
        <Col xs={12} key={index} data-aos="fade-up" data-aos-once="true">
          <div className='text-center mx-auto mb-3'>
            <p className='fw-500 fs-32 mb-3 py-3'>{items.category_name}</p>
            {/* <p className='fw-500 fs-32 mb-3 py-3'>{items.faqs_accordians}</p> */}
          </div>
          <Row >
            <Col md={6} data-aos="fade-up" data-aos-once="true" >
              <Accordion className="faqs-accordian" >
                {modifiedFaqs.filter(data => data.category_name === items.category_name).slice(0,Math.floor((items.length+1)/2)).map((data, index) =>
                (

                  <Accordion.Item
                  
                  key={index}
                  eventKey={index}
                  className="mb-3 bg-transparent"
                  >
                    <Accordion.Header className="text-white fw-600 fs-22">
                   
                      {data.heading}
                    </Accordion.Header>
                    <Accordion.Body>{data.details}</Accordion.Body>
                  </Accordion.Item>


                ))}
              </Accordion>
            </Col>

          
            <Col md={6} data-aos="fade-up" data-aos-once="true" >
              <Accordion className="faqs-accordian" >
                {modifiedFaqs.filter(data => data.category_name === items.category_name).slice(Math.floor((items.length+1)/2)).map((data, index) =>
                (


                  <Accordion.Item
                  
                   key={index}
                    eventKey={index}
                    className="mb-3 bg-transparent"
                  >
                    <Accordion.Header className="text-white fw-600 fs-22">
           
                      {data.heading}
                    </Accordion.Header>
                    <Accordion.Body>{data.details}</Accordion.Body>
                  </Accordion.Item>


                ))}
              </Accordion>
            </Col>

          </Row>


        </Col>
      ))}
    </>
  )
}

export default FaqsAccordianAPI