import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

export default function Header () {
  return (
    <>
      <header className='mb-5'>
        <div className='bg-dark collapse' id='navbarHeader' style={{}}>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8 col-md-7 py-4'>
                <h4 className='text-white'>Про додаток</h4>
                <p className='text-muted'>EasyPhys - універсальний калькулятор фізичних величин, розроблений в якості екзаменаційного проекту.</p>
              </div>
              <div className='col-sm-4 offset-md-1 py-4'>
                <h4 className='text-white'>З чого почати</h4>
                <ul className='list-unstyled'>
                  <li><a href='mailto:in42udev@outlook.com' className='text-white'>Напишіть нам</a></li>
                  <li><a href='https://github.com/ookldev/easyphys' className='text-white'>Вихідний код на GitHub</a></li>
                  <li><a href='https://github.com/ookldev/easyphys/issues' className='text-white'>Знайшли баг? | Є ідеї як покращити додаток?</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='navbar navbar-dark bg-dark box-shadow'>
          <div className='container d-flex justify-content-between'>
            <Link to='/' className='navbar-brand d-flex align-items-center'>
              <span className='navbar-brand mb-0 h1 mx-auto'>
                <img className='mr-1' width='45px' src={logo} alt='' />
                EasyPhys
              </span>
            </Link>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarHeader' aria-controls='navbarHeader' aria-expanded='true' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon' />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
