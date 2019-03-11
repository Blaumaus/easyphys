import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import Spinner from '../layout/Spinner'
import axios from 'axios'

function Menu (props) {
  const location = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3002' : ''}`

  const [topicList, setTopicList] = useState(null)
  const [topicName, setTopicName] = useState(null)
  const [redirect, setRedirect] = useState(false)

  const springProps = useSpring({ 
    opacity: 1,
    marginTop: 0,
    from: { 
      opacity: 0,
      marginTop: -50
    } 
  })

  const onChange = e => {
    setTopicName(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()

    axios
      .get(`${location}/api/data/${topicName}`)
      .then(res => {
        setRedirect(true)

        props.updateData(res.data)
        props.updateSubject(topicName)
      })
  }

  useEffect(() => {
    axios
      .get(`${location}/api/data/topics`)
      .then(res => setTopicList(res.data))
  }, [])

  if (redirect) {
    return <Redirect to='/form' />
  }

  if (topicList === null) {
    return (
      <>
        <Link to='/' className='btn btn-dark' >На головну</Link>
        <br /><br />
        <Spinner />
      </>
    )
  }
  
  return (
    <animated.div style={springProps}>
      <div className='card card-body mb-4 p-4'>
        <h1 className='display-4 text-center'>Оберіть тему</h1>
        <p className='lead text-center'>Виберіть назву теми з випадаючого меню</p>
        <form onSubmit={onSubmit}>
          <select className='form-control form-control-lg browser-default custom-select mb-4' style={{ 'height': '45px' }} onChange={onChange}>
            <option defaultValue>Не обрано</option>
            {topicList.map(item => (
              <option key={item.id} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <button className='btn btn-primary btn-lg btn-block mb-5 waves-effect' type='submit'>Далі</button>
        </form>
      </div>
    </animated.div>
  )
}

export default Menu