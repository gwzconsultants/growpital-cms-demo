import React from "react";
import { Card, Image } from "react-bootstrap";

const CardDark = (props) => {
  return (
    <>
      <Card className="darkcard mb-5 mb-md-5 p-0 rounded text-start text-white" >
        <Card.Body className="m-1 bg-dark-gradient rounded p-4">
          <div className="darkcard-icon p-3 mx-auto mb-4">
            <Image src={props.Cardicon} className="img-fluid" alt="" />
          </div>
          <Card.Title className="fw-600 fs-24 mb-3 pt-2">{props.Title}</Card.Title>
          <Card.Text className="fw-400 fs-17 lh-24">{props.SubTitle}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardDark;
