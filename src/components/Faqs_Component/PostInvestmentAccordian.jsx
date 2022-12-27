import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const PostInvestmentAccordian= (props) => {
    const AccorianItems = [
        {
            Id: "0",
            Title: "How is my earning Tax Free?",
            SubTitle:
                "There are no tax deduction on the returns received by you as it is the share of profit given by the Farm project entity, which is an LLP, as per section 10(2A). The earnings of the LLP is agriculture income, and is exempted under Section 10(1) of the Income Tax Act,1961 in India.",
        },
        {
            Id: "2",
            Title: "How do I exit/cancel my investment?",
            SubTitle:
                "You can cancel you investment anytime by logging in your Growpital account. Once you do it, the originally invested amount will be transferred immediately to your wallet as per the date of cancellation in lines with terms and condition of lock-in period, which can then be withdrawn into your linked bank account.",
        },
        {
            Id: "3",
            Title: " Who takes care of the maintenance of Assets?",
            SubTitle:
                "Growpital, along with its partners take care of the regular development, maintenance and performance of the farm projects.",
        },
        
       
    ];
    const Accorian2Items = [
        {
            Id: "1",
            Title: " How to show these returns in my ITR? ",
            SubTitle:
                "You will need to additionally fill ITR form 3 when you submit your income tax returns.",
        },
        {
            Id: "2",
            Title: " How are my returns transferred? ",
            SubTitle:
                "You payouts will be transferred to your Growpital wallet as per the schedule/frequency of payout mentioned in the opportunity. You can withdraw your wallet amount anytime to your KYC verified bank account.",
        },
    ];
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}> 
                    <div className="faq-div">
                    <Accordion  className="faqs-accordian" >
                        {AccorianItems.map((Items) => (
                            <Accordion.Item
                                eventKey={Items.Id}
                                key={Items.Id}
                                className="mb-3 que-div"
                            >
                                <Accordion.Header className="text-white fw-600 fs-22">
                                    {/* <span className={props.Display_Sr_No}>0{Items.Id}</span>{" "} */}
                                    {Items.Title}
                                </Accordion.Header>
                                <Accordion.Body>{Items.SubTitle}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                    </div>
                    </Col>
                    <Col md={6}> <Accordion  className="faqs-accordian" >
                        {Accorian2Items.map((Items) => (
                            <Accordion.Item
                                eventKey={Items.Id}
                                key={Items.Id}
                                className="mb-3 bg-transparent"
                            >
                                <Accordion.Header className="text-white fw-600 fs-22">
                                    
                                    {Items.Title}
                                </Accordion.Header>
                                <Accordion.Body>{Items.SubTitle}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion></Col>

                </Row>
            </Container>
        </>
    );
};

export default PostInvestmentAccordian;
