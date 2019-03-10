import React from 'react'
import MathJax from '../../react-mathjax'

const Fail = () => (
  <div className='fail'>
    <h3 className='text-center mb-4'>Це могло статися за декількох причин:</h3>
    <div className='d-flex justify-content-center'>
      <ul style={{ 'display': 'block' }}>
        <h5 >
          <li>Дані, що ви ввели не відносяться ні до якої формули</li>
        </h5>
        <h5 >
          <li>Внутрішня помилка на сервері</li>
        </h5>
        <h5>
          <li>Ми ще не навчилися вирішувати такі задачі</li>
        </h5>
      </ul>
    </div>
  </div>
)

const Success = props => (
  <MathJax.Provider>
    <div className='success'>
      <h2 className='text-center'>
        Значення <MathJax.Node formula={props.data.value} /> = {props.data.result} ({props.data.unit})
      </h2>
      <h2 className='mt-5 text-center'>
        Ми використали формулу: <MathJax.Node formula={props.data.formula} />
      </h2>
    </div>
  </MathJax.Provider>
)

export { Fail, Success }
