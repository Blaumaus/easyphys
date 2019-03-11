import React from 'react'
import MathJax from '../../react-mathjax'

const Modal = props => (
  <div id='modalBg' className='modal-dialoge container-fluid' role='document'>
    <div id='modalBody' className='modal-content container col-lg-6 col-xl-3'>
      <div className='modal-header'>
        <h5 className='modal-title' id='exampleModalLabel'>
          Введіть значення {<MathJax.Node formula={props.value.mathjax_char} />} ({props.value.unit}):
        </h5>
        <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={props.closeModal}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div className='modal-body'>
        <form id='modal-form' onSubmit={props.onModalSubmit}>
          <input className='form-control' type='text' name='itemValue' placeholder={'Значення'} autoFocus/>
        </form>
      </div>
      <div className='modal-footer'>
        <button type='button' className='btn btn-dark' data-dismiss='modal' onClick={props.closeModal}>Закрити</button>
        <button form='modal-form' type='submit' className='btn btn-primary'>Зеберегти</button>
      </div>
    </div>
  </div>
)

export default Modal