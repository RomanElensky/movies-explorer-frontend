import { React, useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './Header.css'
import Navigation from '../Navigation/Navigation'
import NavigationMobile from '../NavigationMobile/NavigationMobile'
import Burger from '../Burger/Burger'
import LogoContainer from '../LogoConteiner/LogoContainer'
import LoginButton from '../LoginButton/LoginButton'
import RegButton from '../RegButton/RegButton'
import ProfileButton from '../ProfileButton/ProfileButton'

function Header({ loggedIn }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const breakpoint = 768;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)
    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [])

  function handleClickBurgerMenu() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }

  function handleCloseBurgerMenu() {
    setIsBurgerMenuOpen(false)
  }

  if (width > breakpoint) {
    return (
      <header className="header">
        <div className="header__content" >
          <Routes>
            <Route path="/" element={
              loggedIn ?
                [<LogoContainer key={'index'} />,
                <Navigation key={'index0'} />] : [<LogoContainer key={'index'} />]}>
            </Route>
            <Route path="/movies" element={[
              <LogoContainer key={'index'} />,
              <Navigation key={'index0'} />]}>
            </Route>
            <Route path="/saved-movies" element={[
              <LogoContainer key={'index'} />,
              <Navigation key={'index0'} />]}>
            </Route>
            <Route path="/profile" element={[
              <LogoContainer key={'index'} />,
              <Navigation key={'index0'} />]}>
            </Route>
          </Routes>
          <div className="header__navigation">
            <Routes>
              <Route path="/" element={
                loggedIn
                  ? [
                    <ProfileButton key={'index1'} />
                  ] : [
                    <RegButton key={'index0'} />,
                    <LoginButton key={'index1'} />
                  ]}>
              </Route>
              <Route path="/movies" element={[
                <ProfileButton key={'index1'} />
              ]}
              ></Route>
              <Route path="/saved-movies" element={[
                <ProfileButton key={'index1'} />
              ]}>
              </Route>
              <Route path="/profile" element={[
                <ProfileButton key={'index1'} />
              ]}>
              </Route>
            </Routes>
          </div>
        </div>
      </header>
    )
  }
  return (
    <header className="header">
      <div className="header__content" >
        <Routes>
          <Route path="/" element={<LogoContainer />}></Route>
          <Route path="/movies" element={<LogoContainer />}></Route>
          <Route path="/saved-movies" element={<LogoContainer />}></Route>
          <Route path="/profile" element={<LogoContainer />}></Route>
        </Routes>
        <div className={`header__navigation header__navigation_${isBurgerMenuOpen ? 'opened' : 'closed'}`}>
          <Routes>
            <Route path="/" element={
              loggedIn ? [
                <Burger isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu} key={'index0'} />,
                <NavigationMobile isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu} onClose={handleCloseBurgerMenu} key={'index1'} />,
              ] : [
                <RegButton key={'index0'} />,
                <LoginButton key={'index1'} />,
              ]}>
            </Route>
            <Route path="/movies" element={[
              <Burger isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu} key={'index0'} />,
              <NavigationMobile isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu} onClose={handleCloseBurgerMenu} key={'index1'} />,
            ]}>
            </Route>
            <Route path="/saved-movies" element={[
              <Burger isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu} key={'index0'} />,
              <NavigationMobile isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu} onClose={handleCloseBurgerMenu} key={'index1'} />,
            ]}>
            </Route>
            <Route path="/profile" element={[
              <Burger isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu} key={'index0'} />,
              <NavigationMobile isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu} onClose={handleCloseBurgerMenu} key={'index1'} />,
            ]}>
            </Route>
          </Routes>
        </div>
      </div>
    </header>
  )
}

export default Header
