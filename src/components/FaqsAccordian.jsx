import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const FaqsAccordian = (props) => {
    const AccorianItems = [
        {
            Id: "0",
            Title: "What is Growpital? (In a Nutshell)",
            SubTitle:
                "The all-new Agro investment platform with tax-free income. It’s the new clutter-free, fixed-income platform with ESG benefits for smart investors giving a whopping 8% -16% fixed returns.",
        },
        {
            Id: "2",
            Title: " How does Growpital works?",
            SubTitle:
                "- Choose your investment plan and units of investments in farm projects.- Confirm details and pay securely. Our team handles administration and property management – from crop selection, farm inputs, to working with local farmers and improving soil sustainability. Get your fixed payouts every financial quarter end. You can withdraw this directly in your bank account or even choose to re-invest for more wealth creation.",
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
