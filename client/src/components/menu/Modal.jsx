import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const { closeModal } = this.props;

    return (
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ведіть значення this.props.name:</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <input class="form-control" type="text" name="value" placeholder="Значення this.props.name (this.props.measure)"/>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal" onClick={this.props.closeModal}>Закрити</button>
            <button type="button" class="btn btn-primary">Зеберегти</button>
          </div>
        </div>
      </div>
    )
  }
}
