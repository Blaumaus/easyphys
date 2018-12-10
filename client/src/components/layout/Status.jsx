import React from 'react'

function Fail () {
  return (
    <div className="fail">
      <h3 className="text-center mb-4">Це могло статися за декількох причин:</h3>
      <div className="d-flex justify-content-center">
        <ul cstyle={{"display": "block"}}>
          <h5 >
            <li>Данні, що ви ввели не відносяться ні до якої формули</li>
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
}

function Success (props) {
  return (
    <div className="sucess">
      <h2 className="text-center">Значення {'{this.props.value}'} = {'{this.props.result}'}</h2>
      <h2 className="mt-5 text-center">Ми використали формулу: {'{this.props.formula}'}</h2>
    </div>
  )
}

export { Fail, Success }