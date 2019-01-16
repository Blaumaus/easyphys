/*
  global alert
*/

import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import Modal from '../layout/Modal'
import axios from 'axios'
import MathJax from '../../react-mathjax'

export default class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // For Sending
      given: [],
      find: undefined,
      subject: undefined,

      isValid: true,
      modalOpen: false,
      targetValue: undefined,
      target: undefined,
      redirect: false,
      location: `${process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''}`
    }
  }

  onSubmit (e) {
    e.preventDefault()

    if (this.state.given.length < 1 || this.state.find === undefined) {
      alert('Перевірте правильність введених даних')
    } else {
      axios
        .post(`${this.state.location}/api/data/send`, { subject: this.props.subject, given: this.state.given, find: this.state.find })
        .then(res => {
          this.props.updateState({ result: res.data })
          this.setState({ redirect: true })
        })
    }
  }

  selectOnChange (e) {
    this.setState({ find: e.target.value })
  }

  openModal (e) {
    this.setState({ targetValue: this.props.data[e.target.value], target: e.target })

    if (e.target.checked) {
      this.setState({ modalOpen: true })
    } else {
      this.setState({ given: this.state.given.filter(item => Number(item.id) !== Number(e.target.value)) })
    }
  }

  closeModal (e) {
    this.setState({ modalOpen: false })
    this.state.target.checked = false
  }

  onModalSubmit (e) {
    e.preventDefault()

    if (!Number(e.target.itemValue.value)) {
      alert('Перевірте правильність даних!')
      e.target.itemValue.value = ''
    } else {
      this.state.given.push(
        {
          'id': this.state.targetValue.id,
          'char': this.state.targetValue.char,
          'value': e.target.itemValue.value
        }
      )

      this.setState({ modalOpen: false })
    }
  }

  render () {
    const { modalOpen, targetValue, redirect } = this.state

    if (redirect) {
      return <Redirect to='/results' />
    }

    if (this.props.data !== undefined) {
      return (
        <MathJax.Provider>
          {modalOpen
            ? <Modal value={targetValue} closeModal={this.closeModal.bind(this)} onModalSubmit={this.onModalSubmit.bind(this)} />
            : ''
          }

          <Link to='/' className='btn btn-dark' >На головну</Link>

          <br /><br />
          <div className='card card-body mb-4 p-4 animated FadeInDown'>
            <h1 className='display-4 text-center' id='test'>Що необхідно знайти?</h1>
            <p className='lead text-center'>Оберіть елемент із випадаючого меню</p>
            <form onSubmit={this.onSubmit.bind(this)}>
              <select
                className='form-control form-control-lg browser-default custom-select mb-4'
                style={{ 'height': '45px' }}
                onChange={this.selectOnChange.bind(this)}
              >
                <option defaultValue>Не обрано</option>

                {this.props.data.map(item => (
                  <option key={item.id} value={item.id}>{item.desc}</option>
                ))}

              </select>
              <h1 className='display-4 text-center'>Що вам відомо?</h1>
              <p className='lead text-center'>Оберіть величини у списку нижче</p>
              <hr/>
              <div className='d-flex justify-content-center'>
                <ul className='inline-ul'>

                  {this.props.data.map(item => (
                    <li className='inline-li mt-2' key={item.id} data-title={item.desc} title={item.desc}>
                      <input
                        key={item.id}
                        type='checkbox'
                        value={item.id}
                        className='checkbox checkbox--blue'
                        onChange={this.openModal.bind(this)}
                      />
                      <h6>{<MathJax.Node formula={item.mathjax_char} />} ({item.desc})</h6>
                    </li>
                  ))}

                </ul>
              </div>
              <hr/>
              <button className='btn btn-primary btn-lg btn-block mt-4 mb-3 waves-effect' type='submit'>Підтвердити</button>
            </form>
          </div>
        </MathJax.Provider>
      )
    }

    return (
      <>
        <Link to='/' className='btn btn-dark' >На головну</Link>
        <br /><br />
        <h1 className='text-'>Вибачте! Сталася помилка з відображенням сторінки :(</h1>
      </>
    )
  }
}
