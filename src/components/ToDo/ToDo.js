import React from 'react';
import style from './ToDo.module.css';
import generateID from '../../helpers/generateID';
import image from '../../assets/images/avatar.png'

console.log(generateID())

class ToDo extends React.Component {

  state = {
    inpVal: "",
    tasks: [],
  }

  handleChange = (e) => {
    this.setState({
      inpVal: e.target.value,
    })
  }

  handleClick = (e) => {
    let { tasks } = this.state
    let inpVal = this.state.inpVal.trim()

    if (!inpVal) {
      return
    }

    const taskObject = {
      _id: generateID(),
      title: inpVal
    }

    this.setState({
      tasks: [...tasks, taskObject],
      inpVal: "",

    })
  }

  deleteTask = (taskId) => {
    const newTask = this.state.tasks.filter(item => taskId !== item._id);

    this.setState({
      tasks: newTask
    })
  }

  render() {
    const { tasks } = this.state;
    const list = tasks.map((item) => {
      return (
        <div key={item._id} className={style.listItem}>
        <div>
        <img src={image} alt=""/>
        </div>
          <div>
            <span>Task ID:</span>
            {item._id}
          </div>
          <div>
            <span>Task Title:</span>
            {item.title}
          </div>
          <div>
          <span>Description: </span>
          <p>lorem  ipsum dolor amet</p>
          </div>
          <button onClick={() => this.deleteTask(item._id)}>Delete</button>
        </div>
      )
    })

    return (
      <div className={style.frame}>
        <input value={this.state.inpVal} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add Task</button>
        <div className={style.list}>
          {list}
        </div>
      </div>
    );
  }
}

export default ToDo