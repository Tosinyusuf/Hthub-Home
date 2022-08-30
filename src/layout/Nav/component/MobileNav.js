import React, { useState } from 'react'
import { LinkRoute } from '../../../components/LinkRoute'
import Logo from '../../../assets/images/Logo.svg'
import styled from 'styled-components'
import HamburgerMenu from '../../../assets/images/menu.svg'

const Nav = styled.section`
  display: flex;
  justify-content: space-between !important;
  z-index: 100;
  background: #0A2640;
  padding-top:15px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`

const MenuIcon = styled.div`
    font-size: 1rem;
    cursor: pointer;
    padding: 10px;
  img {
      max-width: 100%;
      width:20px;
  }
  @media (min-width: 700px) {
    .navmenu {
      display: none;
    }
`

const NavMenu = styled.div`
  overflow: hidden !important;

  .nav-menu {
    width: 100%;
    position: initial;
    opacity: 1;
    border-top: none;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: -100%;
    border-top: 2px solid blanchedalmond;
    border-bottom: 1px solid blanchedalmond;
    transition: all 0.5s ease;
  }

  .nav-menu.active {
    background: #0A2640;
    left: 0;
    color: white;
    opacity: 1;
    width: 100%;
    height: 100vh;
    z-index: 1;
    position: fixed;
    overflow-y: hidden !important;
  }
`

export const MobileNav = () => {
  const [isopen, setisopen] = useState(false)

  const toggle = () => {
    setisopen(!isopen)
  }

  return (
    <>
      <Nav>
        <LinkRoute to="/">
          <img src={Logo} alt="logo" style={{ height: '40px' }} />
        </LinkRoute>

        <MenuIcon onClick={toggle}>
          <img src={HamburgerMenu} alt="menu" />
        </MenuIcon>
      </Nav>
      <NavMenu>
        <div className={isopen ? 'nav-menu active' : 'nav-menu'}>
          <div className="MobileList">
            <LinkRoute to="/" className="contentListMobile">
              <h4 className="content" onClick={toggle}>
                Product
              </h4>
            </LinkRoute>
            <LinkRoute to="/" className="contentListMobile">
              <h4 className="content" onClick={toggle}>
                Services
              </h4>
            </LinkRoute>
            <LinkRoute to="/" className="contentListMobile">
              <h4 className="content" onClick={toggle}>
                About
              </h4>
            </LinkRoute>
          </div>
        </div>
      </NavMenu>
    </>
  )
}
