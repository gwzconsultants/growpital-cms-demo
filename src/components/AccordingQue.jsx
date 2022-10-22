import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap';

const AccordingQue = (props) => {
    const AccorianItems = [
        {
          Id: "0",
          Title: "What is Growpital? (In a Nutshell)",
          SubTitle:
            "The all-new Agro investment platform with tax-free income. It’s the new clutter-free, fixed-income platform with ESG benefits for smart investors giving a whopping 10% -16% fixed returns.",
        },
        {
          Id: "1",
          Title: " What is the lock-in period after I invest via Growpital?",
          SubTitle: "To make your investment experience hassle-free, the project entities just put a minimum Lock-in period. If you withdraw before the lock-in period ends, the project entity would deduct all payouts given to you from the original investment amount and pay the remaining amount to you. This will result in no profit/return to you.",
          SubTitle1: "However, if you make any withdraw request after the lock in period before the maturity period, the original investment amount shall be paid at that time; no future profits and no pro-rata calculation of payouts will be done.",
        },
        {
          Id: "2",
          Title: "Are the returns guaranteed?",
          SubTitle:
            "The returns are projected revenues from farm project after sales of agri produce. So the revenues of the farm project will deviate from crop to crop, but we keep a satisfactory buffer to provide fixed returns in the form of advance profits.",
        },
        {
          Id: "3",
          Title: "How is my earning Tax Free?",
          SubTitle:"There are no tax deduction on the returns received by you as it is the share of profit given by the Farm project entity, which is an LLP, as per section 10(2A).",
          SubTitle1:"The earnings of the LLP is agriculture income, and is exempted under Section 10(1) of the Income Tax Act,1961 in India.",
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