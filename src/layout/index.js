import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import Footer from './Footer'

export const Layout = ({ children }) => {
 
  return (
    <div>
      <div>
        <Nav/>
        <div className="pages">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
  changeTheme: PropTypes.func,
}

