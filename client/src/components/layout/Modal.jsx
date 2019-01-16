import React from 'react'
import MathJax from '../../react-mathjax'

export default function Modal (props) {
  const { onModalSubmit, closeModal, value } = props

  return (
    <MathJax.Provider>
      <div id='modalBg' className='modal-dialoge container-fluid animated fadeIn' role='document'>
        <div id='modalBody' className='modal-content container col-lg-6 col-xl-3 animated fadeInDown'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>Введіть значення {<MathJax.Node formula={value.mathjax_char} />} ({value.unit}):</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={closeModal}>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <form id='modal-form' onSubmit={onModalSubmit.bind(this)}>
              <input className='form-control' type='text' name='itemValue' placeholder={'Значення'} />
            </form>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-dark' data-dismiss='modal' onClick={closeModal}>Закрити</button>
            <button form='modal-form' type='submit' className='btn btn-primary'>Зеберегти</button>
          </div>
        </div>
      </div>
    </MathJax.Provider>
  )
}
