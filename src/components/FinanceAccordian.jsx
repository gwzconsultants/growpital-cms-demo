import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const FinanceAccordian = (props) => {
    const AccorianItems = [
        {
            Id: "0", 
            Title: "What is the lock-in period after I invest via Growpital?",
            SubTitle:
                "To make your investment experience hassle-free, the project entities just put a minimum Lock-in period. If you withdraw before the lock-in period ends, the project entity would deduct all payouts given to you from the original investment amount and pay the remaining amount to you. This will result in no profit/return to you.However, if you make any withdraw request after the lock in period before the maturity period, the original investment amount shall be paid at that time; no future profits and no pro-rata calculation of payouts will be done.",
        },
        {
            Id: "1",
            Title: " How are the investment structured?",
            SubTitle:
                "For each investment option on Growpital a Farm Projects portfolio in the form of a Limited Liability Partnership is there. The investors investing are considered as partners in the LLP and the amount invested is considered as capital contribution and debt to to the LLP. The asset(farm projects) is owned by the LLP and all the partners in the LLP are considered legal co-owners.",
        },
        {
            Id: "2",
            Title: " Can I get information about other investors in the platform?",
            SubTitle:
                "Yes, you can avail information about other partners in your project upon request. You can drop your request to info@growpital.com",
        },
        {
            Id: "3",
            Title: " Are the returns guaranteed? ",
            SubTitle:
                "The returns are projected revenues from farm project after sales of agri produce. So the revenues of the farm project will deviate from crop to crop, but we keep a satisfactory buffer to provide fixed returns in the form of advance profits.",
        },
       
    ];
    const Accorian2Items = [
       
        {
            Id: "1",
            Title: " What is the Investment process? ",
            SubTitle:
                "Once you complete the KYC process on the platform, we will create a wallet on Growpital to hold your funds which you can use to only invest into the opportunities listed on on the Growpital. You can add funds to your wallet at anytime and can invest your desired amount into the available opportunities over Growpital.",
        },
        {
            Id: "2",
            Title: " How much is the minimum and maximum amount I can invest? ",
            SubTitle:
                "In order to provide this opportunity for as many retail investors as possible, the price of one unit is kept as low as INR 20,000/-. This provides you a fractional ownership of the farm projects under your name as per the amount invested by you.That said, you can buy as many units as you want (subject to availability) and get profits in the same proportion.",
        },
        {
            Id: "3",
            Title: " Is there any fee to invest through Growpital? ",
            SubTitle:
                "No, there are no fees involved when you invest over Growpital. You are also not charged when you withdraw funds.",
        },
        {
            Id: "4",
            Title: " Do I need to wait till a project get completely funded? ",
            SubTitle:
                "No, farming in itself is perpetual. When new investment comes in, operations on new acres are started. This means that you can invest anytime to own a fraction if units are available.",
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

export default FinanceAccordian;
