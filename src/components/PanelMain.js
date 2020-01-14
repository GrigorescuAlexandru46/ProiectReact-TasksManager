import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Task from "./Task";

class PanelMain extends Component {
  state = {
    tasks: [],
    taskToCreate: {
      id: -1,
      title: "",
      text: ""
    }
  };

  // finds if there is a gap between ids
  // example: ids 1,2,3,5,6 => nextAvailableId = 4
  // example: ids 1,2,3,4,5 => nextAvailableId = 6
  getNextAvailableId() {
    let nextAvailableId = 0;
    let isAvailable = true;
    for (
      nextAvailableId = 0;
      nextAvailableId < this.state.tasks.length;
      nextAvailableId++
    ) {
      isAvailable = true;
      for (let i = 0; i < this.state.tasks.length; i++) {
        if (this.state.tasks[i].id === nextAvailableId) {
          isAvailable = false;
          break;
        }
      }
      if (isAvailable) {
        return nextAvailableId;
      }
    }
    return nextAvailableId; // nextAvailableId is the last element of the list
  }

  finishTask(index) {
    const newTasks = Object.assign([], this.state.tasks);
    newTasks.splice(index, 1);
    this.setState({
      tasks: newTasks
    });
  }

  handleCreateChangeTitle(event) {
    let newState = Object.assign({}, this.state);
    newState.taskToCreate.title = event.target.value;
    this.setState(newState);
  }

  handleCreateChangeText(event) {
    let newState = Object.assign({}, this.state);
    newState.taskToCreate.text = event.target.value;
    this.setState(newState);
  }

  handleCreateSubmit(event) {
    if (
      this.state.taskToCreate.title == "" ||
      this.state.taskToCreate.text == ""
    ) {
      alert("Could not create task, you must fill in all the fields");
    } else {
      let nextAvailableId = this.getNextAvailableId();
      const newTasks = Object.assign([], this.state.tasks);
      const newTask = {
        id: nextAvailableId,
        title: this.state.taskToCreate.title,
        text: this.state.taskToCreate.text
      };

      newTasks.splice(nextAvailableId, 0, newTask);
      this.setState({
        tasks: newTasks,
        taskToCreate: {
          id: -1,
          title: "",
          text: ""
        }
      });
    }
    event.preventDefault();
  }

  render() {
    const taskList = this.state.tasks.map((task, index) => (
      <div key={task.id}>
        <Task
          title={task.title}
          text={task.text}
          finishTaskEvent={this.finishTask.bind(this, index)}
        />
      </div>
    ));

    if (this.state.tasks.length > 0) {
      return (
        <Container>
          {taskList}
          <div className="task_container">
            <Card bg="light">
              <div className="task_header_create">
                <Card.Header>Create a task</Card.Header>
              </div>
              <Card.Body>
                <div className="task_create_form_container ">
                  <form>
                    <div className="task_create_container_title">
                      <div className="task_create_label_title">
                        <label>Title:</label>
                      </div>
                      <div>
                        <input
                          className="task_create_input_title"
                          type="Text"
                          value={this.state.taskToCreate.title}
                          onChange={this.handleCreateChangeTitle.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="task_create_container_text">
                      <div className="task_create_label_text">
                        <label>Text:</label>
                      </div>
                      <div>
                        <textarea
                          className="task_create_textarea_text"
                          type="Text"
                          value={this.state.taskToCreate.text}
                          onChange={this.handleCreateChangeText.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="task_create_container_submit">
                      <Button
                        type="Submit"
                        variant="warning"
                        onClick={this.handleCreateSubmit.bind(this)}
                      >
                        Create task
                      </Button>
                    </div>
                  </form>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      );
    } else {
      return (
        <Container>
          <div className="task_container">
            <Card bg="light">
              <Card.Body>
                <div className="no_tasks_text">
                  <Card.Text>There are currently no tasks</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="task_container">
            <Card bg="light">
              <div className="task_header_create">
                <Card.Header>Create a task</Card.Header>
              </div>
              <Card.Body>
                <div className="task_create_form_container ">
                  <form>
                    <div className="task_create_container_title">
                      <div className="task_create_label_title">
                        <label>Title:</label>
                      </div>
                      <div>
                        <input
                          className="task_create_input_title"
                          type="Text"
                          value={this.state.taskToCreate.title}
                          onChange={this.handleCreateChangeTitle.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="task_create_container_text">
                      <div className="task_create_label_text">
                        <label>Text:</label>
                      </div>
                      <div>
                        <textarea
                          className="task_create_textarea_text"
                          type="Text"
                          value={this.state.taskToCreate.text}
                          onChange={this.handleCreateChangeText.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="task_create_container_submit">
                      <Button
                        type="Submit"
                        variant="warning"
                        onClick={this.handleCreateSubmit.bind(this)}
                      >
                        Create task
                      </Button>
                    </div>
                  </form>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      );
    }
  }
}
export default PanelMain;
