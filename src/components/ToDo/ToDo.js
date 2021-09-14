import React from 'react';
import style from './ToDo.module.css'

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
    let {tasks} = this.state
    let inpVal = this.state.inpVal.trim()

    if(!inpVal) {
      return 
    }

    this.setState({
      tasks: [...tasks, inpVal],
      inpVal: "",

    })
  }

  render() {
    const { tasks } = this.state;
    const li = tasks.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      )
    })

    return (
      <div className={style.frame}>
        <input value={this.state.inpVal} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add Task</button>
        <ul className={style.list}>
          {li}
        </ul>
      </div>
    );
  }
}

export default ToDo