import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap';

const AccordingQue = (props) => {
    const AccorianItems = [
        {
          Id: "0",
          Title: "Create account and complete KYC",
          SubTitle:
            "KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.",
        },
        {
          Id: "1",
          Title: " Choose investment option",
          SubTitle:
            "KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.",
        },
        {
          Id: "2",
          Title: " Add money and invest",
          SubTitle:
            "KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.",
        },
        {
          Id: "3",
          Title: " Harvest your earnings ",
          SubTitle:
            "KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.",
        },
      ];
  return (
    <Row>
    <Col xs={12} md={12}  className="text-center text-md-end" >
    <Accordion defaultActiveKey="" className="home-accordian"  >
      {AccorianItems.map((Items) => (
        <Accordion.Item
          eventKey={Items.Id}
          key={Items.Id}
          className="mb-3 bg-transparent"
        >
          <Accordion.Header className="text-white fw-600 fs-22">
            <span className={props.Display_Sr_No}>0{Items.Id}</span>{" "}
            {Items.Title}
          </Accordion.Header>
          <Accordion.Body className='pb-2'>
            <ul type="none" className='mb-0'>
              <li className='py-2'>{Items.SubTitle}</li>
              <li className='py-2'>{Items.SubTitle1}</li>
              <li className='py-2'>{Items.SubTitle2}</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  </Col>
  </Row>
  )
}

export default AccordingQue