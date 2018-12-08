import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      find: undefined,
      modal: false,
    }
  }

  selectOnChange = (e) => {
    this.setState({ find: e.target.value })
  }

  checkOnChange = (e) => {
    this.setState({ modal: true })
  }

  render() {
    const { modal } = this.state

    if (this.props.data !== undefined) {
      return (
      <>
        {
          this.state.modal === true
          
          ?

          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>  

        :

        <></>
        }

        <Link to="/" className="btn btn-dark" >На головну</Link>
        <br/><br/>
        <div className="card card-body mb-4 p-4">
          <h1 className="display-4 text-center">Що необхідно знайти?</h1>
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
                    className="checkbox checkbox--blue"
                    onChange={this.checkOnChange} 
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
