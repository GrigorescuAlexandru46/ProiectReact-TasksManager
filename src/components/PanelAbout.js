import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";

class PanelAbout extends Component {
  render() {
    return (
      <Container>
        <div className="contact_container">
          <Card bg="light">
            <div className="about_header_container">
              <Card.Header>About</Card.Header>
            </div>
            <Card.Body>
              <div className="about_text_container ">
                <p>
                  Thank you for visiting our page. We are a company that will
                  make organizing your tasks easier. We will keep track of the
                  tasks that you create and remove it as soon as you mark it as
                  finished. You can do all of right here, on our page.
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
}
export default PanelAbout;
