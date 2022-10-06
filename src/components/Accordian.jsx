import React from "react";
import { Accordion } from "react-bootstrap";

const Accordian = (props) => {
  const AccorianItems = [
    {
      Id: "0",
      Title: "Create account and complete KYC",
      SubTitle:
        "KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.",
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
      <Accordion defaultActiveKey="0" className="home-accordian" flush>
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
            <Accordion.Body>{Items.SubTitle}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default Accordian;
