import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./indInfo.css";

const InfoCardL = (props) => {
  const title = props.title;
  const para = props.para;
  const src = props.src;
  const id = props.id;
  const cls = props.cls;
  const date = props.date;
  return (
    <div>
      <Container>
        <Row className={cls}>
          <Col>
            <img src={src} alt="" />
          </Col>
          <Col>
            <h2>{title}</h2>
            <p>
              {para}&nbsp;&nbsp;,&nbsp;{date}
            </p>
            <h4>
              <a href={`/resources/ind-info/${id}`}>Read More</a>
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoCardL;
