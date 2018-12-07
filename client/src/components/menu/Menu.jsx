import React, { Component } from 'react'
import axios from 'axios'

export default class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topicName: undefined,
      data: undefined
    }
  }

  onChange = (e) => {
    this.setState({ topicName: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    axios.get(`http://localhost:5000/app/data/${this.state.topicName}`, { headers: { 'Content-Type': 'application/json' } })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
      <div className="card card-body mb-4 p-4">
        <h1 className="display-4 text-center">Оберіть тему</h1>
        <p className="lead text-center">Виберіть назву теми з випадаючого меню</p>
        <form onSubmit={this.onSubmit}>
          <select className="form-control form-control-lg browser-default custom-select mb-4" style={{"height": "45px"}} onChange={this.onChange}>
            <option defaultValue>Не обрано</option>
            <option value="kinematics">Кінематика</option>
          </select>
          <button className="btn btn-primary btn-lg btn-block mb-5 waves-effect" type="submit">Далі</button>
        </form>
      </div>
      </>
    )
  }
}
