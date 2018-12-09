import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import axios from 'axios'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // For Sending
      given: [],
      find: undefined,

      modalOpen: false,
      targetValue: undefined
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (this.state.given.length < 1 || this.state.find === undefined) {
      alert('Перевірте правильність введених даних')
    } else {
      axios
        .post('http://localhost:5000/app/data/send', { given: this.state.given, find: this.state.find })
        .then(res => console.log(res))
    }
  }

  selectOnChange = (e) => {
    this.setState({ find: e.target.value })
  }

  openModal = (e) => {
    this.setState({ targetValue: this.props.data[e.target.value]  })

    if (e.target.checked) {
      this.setState({ modalOpen: true})
    } else {
      this.setState({ given: this.state.given.filter(item => Number(item.id) !== Number(e.target.value)) })
    }
  }

  closeModal = (e) => {
    this.setState({ modalOpen: false });
  }

  onModalSubmit = (e) => {
    e.preventDefault()

    this.state.given.push(
      {
        "id": this.state.targetValue.id, 
        "char": this.state.targetValue.char, 
        "value": e.target.itemValue.value 
      })

    this.setState({ modalOpen: false })
  }

  render() {
    const { modalOpen, targetValue } = this.state

    if (this.props.data !== undefined) {
      return (
        <>
          {modalOpen 
              ? <Modal value={targetValue} closeModal={this.closeModal} onModalSubmit={this.onModalSubmit}/>
              : ''
          }

          <Link to="/" className="btn btn-dark" >На головну</Link>

          <br/><br/>
          <div className="card card-body mb-4 p-4 animated FadeInDown">
            <h1 className="display-4 text-center" id="test">Що необхідно знайти?</h1>
            <p className="lead text-center">Оберіть елемент із випадаючого меню</p>
            <form onSubmit={this.onSubmit}>
              <select className="form-control form-control-lg browser-default custom-select mb-4" style={{ "height": "45px" }} onChange={this.selectOnChange}>
                <option defaultValue>Не обрано</option>

                {this.props.data.map(item => (
                  <option key={item.id} value={item.id}>{item.desc}</option>
                ))}

              </select>
              <h1 className="display-4 text-center">Що вам відомо?</h1>
              <p className="lead text-center">Оберіть величини у списку нижче</p>
              <ul className="inline-ul">

                {this.props.data.map(item => (
                  <li className="inline-li" key={item.id}>
                    <input 
                      key={item.id} 
                      type="checkbox"
                      value={item.id}
                      className="checkbox checkbox--blue"
                      onChange={this.openModal}
                    />
                    {item.char}
                  </li> 
                ))}

              </ul>
              <button className="btn btn-primary btn-lg btn-block mb-3 waves-effect" type="submit">Підтвердити</button>
            </form>
          </div>
        </>
      )
    }

    return (
      <>
        <Link to="/"  className="btn btn-dark" >На головну</Link>
        <br/><br/>
        <h1 className="text-">Вибачте! Сталася помилка з відображенням сторінки :(</h1>
      </>
    )
  }
}
