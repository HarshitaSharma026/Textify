import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
            
            </ul>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </div>
  </nav>
  )
}

// propTypes are used to specify the type of props we are getting from App.js
// if we pass wrong prop types, then nothing will be displayed on the webpage, but when you do inspect -> console, the error will be displayed here
Navbar.propTypes = {
    // title: PropTypes.string.isRequired -------> means this prop can't be remain empty
    // isRequired: can be used in places where we want our props not to be undefined, like title of my website
    title: PropTypes.string,
    aboutText: PropTypes.string
}

// defaultProps: are used to specify the default values of the props
// anyways i'm going to give values for the props, but if in case i miss it, then these values will be displayed in place of value of these props
// SHOULD MENTION default props
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About title here'
}
