import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

export default class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      topicName: undefined,
      data: undefined,
      topic_list: undefined,
      redirect: false,
      location: `${process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''}`
    }
  }

  onChange (e) {
    this.setState({ topicName: e.target.value })
  }

  onSubmit (e) {
    e.preventDefault()

    axios
      .get(`${this.state.location}/api/data/${this.state.topicName}`)
      .then(res => {
        this.setState({ data: res.data, redirect: true })
        this.props.updateState({ data: this.state.data, subject: this.state.topicName })
      })
  }

  componentDidMount () {
    axios
      .get(`${this.state.location}/api/data/topics`)
      .then(res => this.setState({ topic_list: res.data }))
  }

  render () {
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to='/form' />
    }

    if (this.state.topic_list === undefined) {
      return <h1 className='text-center'>Сталася помилка при отриманні даних із сервера :(</h1>
    }

    return (
      <>
        <div className='card card-body mb-4 p-4'>
          <h1 className='display-4 text-center'>Оберіть тему</h1>
          <p className='lead text-center'>Виберіть назву теми з випадаючого меню</p>
          <form onSubmit={this.onSubmit.bind(this)}>
            <select className='form-control form-control-lg browser-default custom-select mb-4' style={{ 'height': '45px' }} onChange={this.onChange.bind(this)}>
              <option defaultValue>Не обрано</option>
              {this.state.topic_list.map(item => (
                <option key={item.id} value={item.value}>{item.name}</option>
              ))}
            </select>
            <button className='btn btn-primary btn-lg btn-block mb-5 waves-effect' type='submit'>Далі</button>
          </form>
        </div>
      </>
    )
  }
}
