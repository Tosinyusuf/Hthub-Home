import React from 'react'
import { LinkRoute } from '../../components/LinkRoute'
import Logo from '../../assets/images/Logo.svg'
import { Auth } from './component/Auth'
import '../../assets/styles/Nav.css'
import { MobileNav } from './component/MobileNav'

const Nav = () => {
  return (
    <>
    <div className="NavContainer">
      <div className="NavContent">
        <LinkRoute to="/" className="logo">
          <img src={Logo} alt="HomeLogo" />
        </LinkRoute>
        <div className="links">
        <LinkRoute to="/" className="contentList">
          <h4 className="content">Product</h4>
        </LinkRoute>
        <LinkRoute to="/" className="contentList">
          <h4 className="content">Services</h4>
        </LinkRoute>
        <LinkRoute to="/" className="contentList">
          <h4 className="content">About</h4>
        </LinkRoute>
        <Auth />
        </div>
      </div>
    </div>
     <div className="mobile">
     <MobileNav />
      </div>
      </>
  )
}

export default Nav
