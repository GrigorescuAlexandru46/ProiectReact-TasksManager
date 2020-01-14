import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";

class PanelContact extends Component {
  render() {
    return (
      <Container>
        <div className="contact_container">
          <Card bg="light">
            <div className="contact_header_container">
              <Card.Header>Contact</Card.Header>
            </div>
            <Card.Body>
              <div className="contact_text_container ">
                <strong>Street: </strong> 1129 Riverwood Drive <br />
                <strong>City: </strong> Los Angeles <br />
                <strong>State: </strong> California <br />
                <strong>Zip code: </strong> 90017 <br />
                <strong>Phone number: </strong> 909-638-1634 <br />
                <strong>Mobile number: </strong> 818-283-4152 <br />
                <strong>E-mail: </strong> task-creator@task.com <br />
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
}
export default PanelContact;
