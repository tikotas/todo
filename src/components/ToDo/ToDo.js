import React from 'react';
import style from './ToDo.module.css'

class ToDo extends React.Component {

  state = {
    inpVal: "",
    tasks: [],
    isChecked: false,
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

    this.setState({
      tasks: [...tasks, inpVal],
      inpVal: "",

    })
  }

  handleChecked = (e) => {
    e.stopPropagation()
    this.setState({
      isChecked: !this.state.isChecked,
    })
    
  }

  render() {
    const { tasks } = this.state;
    const li = tasks.map((item, index) => {
      return (
        <li key={index} className={style.listItem}>
          {item}
          <input id={`chekBox${index + 1}`} onChange={this.handleChecked} checked={this.state.isChecked} type="checkbox" />
        </li>
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