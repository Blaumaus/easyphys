/*
  global alert
*/

import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import Modal from '../layout/Modal'
import axios from 'axios'
import MathJax from '../../react-mathjax'
import Spinner from '../layout/Spinner'

export default function Form (props) {
  const location = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3002' : ''}`

  // Data for sending to server
  const [given, setGiven] = useState([])
  const [toFind, setToFind] = useState(null)

  // App state hooks
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [targetValue, setTargetValue] = useState(null)
  const [target, setTarget] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const onSubmit = e => {
    e.preventDefault()

    if (given.length < 1 || toFind === null) {
      alert('Перевірте правильність введених даних')
    } else {
      axios
        .post(`${location}/api/data/send`, { 
          subject: props.subject,
          given: given, 
          find: toFind 
        })
        .then(res => {
          props.updateResult(res.data)
          setRedirect(true)
        })
    }
  }

  // Select what to find
  const selectOnChange = e => {
    setToFind(e.target.value)
  }

  const openModal = e => {
    setTargetValue(props.data[e.target.value])
    setTarget(e.target)

    if (e.target.checked) {
      setIsModalOpen(true)
    } else {
      // Remove item from array of given values after the second click on the checkbox
      setGiven(given.filter(item => Number(item.id) !== Number(e.target.value)))
    }
  }

  const closeModal = e => {
    setIsModalOpen(false)
    setTarget(target.checked = false)
  }

  const onModalSubmit = e => {
    e.preventDefault()

    if (!Number(e.target.itemValue.value)) {
      alert('Перевірте правильність даних!')
      e.target.itemValue.value = ''
    } else {
      setGiven(
        [...given,  
          {
            'id': targetValue.id,
            'char': targetValue.char,
            'value': e.target.itemValue.value
          }
        ]
      )

      setIsModalOpen(false)
    }
  }

  if (redirect) {
    return <Redirect to='/results' />
  }

  if (props.data !== null) {
    return (
      <MathJax.Provider>
        {isModalOpen
          ? <Modal 
              value={targetValue} 
              closeModal={closeModal} 
              onModalSubmit={onModalSubmit} 
            />
          : ''
        }

        <Link to='/' className='btn btn-dark' >На головну</Link>

        <br /><br />
        <div className='card card-body mb-4 p-4 animated FadeInDown'>
          <h1 className='display-4 text-center' id='test'>Що необхідно знайти?</h1>
          <p className='lead text-center'>Оберіть елемент із випадаючого меню</p>
          <form onSubmit={onSubmit}>
            <select
              className='form-control form-control-lg browser-default custom-select mb-4'
              style={{ 'height': '45px' }}
              onChange={selectOnChange}
            >
              <option defaultValue>Не обрано</option>

              {props.data.map(item => (
                <option key={item.id} value={item.id}>{item.desc}</option>
              ))}

            </select>
            <h1 className='display-4 text-center'>Що вам відомо?</h1>
            <p className='lead text-center'>Оберіть величини у списку нижче</p>
            <hr/>
            <div className='d-flex justify-content-center'>
              <ul className='inline-ul'>

                {props.data.map(item => (
                  <li 
                    className='inline-li mt-2' 
                    key={item.id} 
                    data-title={item.desc} 
                    title={item.desc}
                  >
                    <input
                      key={item.id}
                      type='checkbox'
                      value={item.id}
                      className='checkbox checkbox--blue'
                      onChange={openModal}
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
      <Spinner />
    </>
  )
}
