import React from 'react'

export default function Header () {
  return (
    <>
      <header>
        <div className="collapse" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">О приложении</h4>
                <p className="description">Лорем Ипсум морковь усиливается скидки. Был выбран для полета, и удовольствиями этих симптомов принимать какие-либо из обязанностей человека не должны ненавидеть встречи, чтобы сделать его отвергнет тех, кто отрекся, однако, тяжелый труд, и сразу не принимать никакой разницы между! Умно!</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">С чего начать</h4>
                <ul className="list-unstyled">
                  <li><a href="https://github.com/ookldev/easyphys/issues" className="text-white">Обратная связь</a></li>
                  <li><a href="https://github.com/ookldev/easyphys" className="text-white">Мы на Github</a></li>
                  <li><a href="mailto:in42udev@outlook.com" className="text-white">Наш Email</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <strong><img id="header-img" src="https://cdn.icon-icons.com/icons2/1194/PNG/128/1490886336-22-atom_82489.png" />EasyPhys</strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
