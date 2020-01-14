import React from "react";
import { Card, Button } from "react-bootstrap";

function Task(props) {
  return (
    <div className="task_container">
      <Card>
        <div className="task_header">
          <Card.Header>{props.title}</Card.Header>
        </div>

        <Card.Body>
          <Card.Text>{props.text}</Card.Text>
          <Card.Text>
            <Button variant="success" onClick={props.finishTaskEvent}>
              Mark as finished
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Task;
