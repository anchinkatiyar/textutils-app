import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href =  "#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href =  "#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href =  "#">{props.aboutText}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href =  "#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href =  "#">Action</a></li>
            <li><a className="dropdown-item" href =  "#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href =  "#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className={`btn btn-${props.mode==='light'?'primary':'light '} mx-2`} type="submit">Search</button>
      </form>
    </div>
  </div>
  {/* <div className={`form-check form-switch mx-4 text-${props.textColor}`}>  */}
  <div className={`form-check form-switch mx-4 text-${props.mode === 'light'? 'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" role="switch" onChange={props.toggleMode} checked={props.mode === 'dark'} id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.darkModeHead}</label>
    </div>
</nav>
  )
}
// Navbar.defaultProps = {title:'TextUtils',
//   aboutText:'About'
// }
Navbar.propTypes = {title : PropTypes.string,
  aboutText: PropTypes.string.isRequired
}
//we can use PropTypes.string.isRequired to make this data mandatory to fill
//https://chatgpt.com/share/5a91a6b1-54d3-4187-b9c1-89180e442c2c