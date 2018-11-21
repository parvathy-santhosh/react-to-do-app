import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          item: "Sample item",
          checked: false
        },
        {
          item: "Another sample item",
          checked: false
        }
      ],
    }
  }

  newTask() {
    let newItem = prompt("What do you want to add?");
    let taskArray = this.state.tasks;
    if (taskArray.filter((i) => {return (i.item === prompt)}).length === 0) {
      taskArray.push({
        item: newItem,
        checked: false
      });
    }
    this.setState(taskArray);
  }

  delTask(x) {
    let taskArray = this.state.tasks;
    taskArray.map((i) => {
      if (x.item === i.item) {
        taskArray.splice(taskArray.indexOf(i), 1);
      }
    });
    this.setState(taskArray);
  }

  toggleTask(x) {
    let taskArray = this.state.tasks;
    taskArray.map((i) => {
      if (x.item === i.item) {
        i.checked = !(i.checked);
      }
    });
    this.setState(taskArray);
  }

  render() {
    return (
      <div className="container center">
        <h1 className="center title">To Do with ReactJS</h1>
        <hr className="hr"/>
        <div className="flow-right controls">
          <span>All tasks added: {this.state.tasks.length} </span>
          <span>Tasks remaining: {this.state.tasks.filter((i) => { return !(i.checked) }).length} </span>
        </div>
        <hr className="hr"/>
        <div>
          <ul id="todo-list" className="todo-list">
            {this.state.tasks.map((x) => {
              return (
                <li>
                  <input type="checkbox"
                         onChange={() => this.toggleTask(x)}
                         id={x.item}/>
                  {x.item}
                  <button className="del button"
                          onClick={() => this.delTask(x)}>
                    Delete this task
                  </button>
                </li>
              );
            })
          }
          </ul>
          <button onClick={this.newTask.bind(this)} className="new button">ADD TASK</button>
        </div>
      </div>
    )
  }
}

export default App;
