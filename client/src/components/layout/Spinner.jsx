import React from 'react'
import spinnerImg from '../../images/spinner.gif'

const Spinner = () => (
  <div className='spinner d-flex justify-content-center'>
    <img
      src={spinnerImg}
      alt='Loading...'
    />
  </div>
)

export default Spinner