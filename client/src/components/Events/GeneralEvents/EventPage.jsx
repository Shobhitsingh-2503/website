import React from "react";
import Error404 from "../../Error404/Error404";
import { Container, Row, Col } from "reactstrap";

const EventPage = (props) => {
  if (props.eventData === undefined) return <Error404 msg="Unexisting Event" />;

  const src = props.eventData.src;
  const title = props.eventData.title;
  const para = props.eventData.para;
  const date = props.eventData.date;
  const time = props.eventData.time;
  const contact1 = props.eventData.contact1;
  const contact2 = props.eventData.contact2;
  return (
    <Container className="mt-5 mb-5 events-page">
      <Row>
        <Col className="justify-content-center">
          <img className="events-page-image" src={src} />
        </Col>
        <Col>
          <Container className="event-page-content">
            <Row>
              <Col className="text-center">
                <h1>{title}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{para}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <a className="bt bt-blue text-center" href="/">
                    Register Now
                  </a>
                </div>
              </Col>
              <Col className="text-center mt-4">
                <b>
                  <p>time:&nbsp;{time}</p>
                  <p>date:&nbsp;{date}</p>
                  <p>Contact on:</p>
                  <p>{contact1}</p>
                  <p>{contact2}</p>
                </b>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default EventPage;
