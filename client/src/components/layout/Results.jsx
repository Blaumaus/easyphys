import React from 'react'
import { Link } from 'react-router-dom'
import { Fail, Success } from './Status'

function Results (props) {
  if (props.data) {
    return (
      <>
        <Link to='/' className='btn btn-dark' >На головну</Link>
        <br /><br />
        <div className='card card-body mb-4 p-4'>
          <h1 className='display-4 text-center'>Результати</h1>
          <p className='lead text-center'>Нам {props.data.success ? '' : 'не'} вдалось допомогти вам</p>
          <hr />

          {props.data.success
            ? <Success data={props.data} />
            : <Fail />
          }

          <hr />
          <Link to='/' className='btn btn-primary btn-lg btn-block mb-3 mt-5 waves-effect' type='submit'>Cпробувати ще раз</Link>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link to='/' className='btn btn-dark' >На головну</Link>
        <br /><br />
        <h1>Вибачте! Сталася помилка з відображенням сторінки :(</h1>
      </>
    )
  }
}

export default Results