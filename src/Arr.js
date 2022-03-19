import React from "react";

export default class arr extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskArr: [],
      taskArr1: [],
      taskInput: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      taskInput: e.target.value,
    });
  };

  handlePushTask = () => {
    var temp = this.state.taskArr;
    temp.push(this.state.taskInput);
    this.setState({
      taskArr: temp,
    });
  };

  handleComplete = (single, index) => {
    var temp = this.state.taskArr1;
    temp.push(single);

    var temp2 = this.state.taskArr;
    temp2.splice(index, 1);

    this.setState({
      taskArr: temp2,
      taskArr1: temp,
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.taskInput} onChange={this.handleChange} />

        <button onClick={this.handlePushTask}>Add Task</button>

        <h1>Tasks to do</h1>

        <div>
          <ol>
            {this.state.taskArr.map((single, index) => {
              return (
                <div>
                  <li>{single}</li>
                  <button
                    onClick={() => {
                      this.handleComplete(single, index);
                    }}
                  >
                    Completed
                  </button>
                </div>
              );
            })}
          </ol>
        </div>

        <h1>Completd tasks</h1>
        <div>
          <ol>
            {this.state.taskArr1.map((single, index) => {
              return (
                <div>
                  <li>{single}</li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
