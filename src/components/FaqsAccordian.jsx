import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const FaqsAccordian = (props) => {
    const AccorianItems = [
        {
            Id: "0",
            Title: "How this work?",
            SubTitle:
                "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.",
        },
        {
            Id: "2",
            Title: " Choose investment option",
            SubTitle:
                "KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.",
        },
        {
            Id: "3",
            Title: " Add money and invest",
            SubTitle:
                "KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.",
        },
        {
            Id: "4",
            Title: " Harvest your earnings ",
            SubTitle:
                "KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.",
        },
    ];
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}> <Accordion defaultActiveKey="0" className="faqs-accordian" >
                        {AccorianItems.map((Items) => (
                            <Accordion.Item
                                eventKey={Items.Id}
                                key={Items.Id}
                                className="mb-3 bg-transparent"
                            >
                                <Accordion.Header className="text-white fw-600 fs-22">
                                    {/* <span className={props.Display_Sr_No}>0{Items.Id}</span>{" "} */}
                                    {Items.Title}
                                </Accordion.Header>
                                <Accordion.Body>{Items.SubTitle}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion></Col>
                    <Col md={6}> <Accordion defaultActiveKey="1" className="faqs-accordian" >
                        {AccorianItems.map((Items) => (
                            <Accordion.Item
                                eventKey={Items.Id}
                                key={Items.Id}
                                className="mb-3 bg-transparent"
                            >
                                <Accordion.Header className="text-white fw-600 fs-22">
                                    {/* <span className={props.Display_Sr_No}>0{Items.Id}</span>{" "} */}
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

export default FaqsAccordian;
