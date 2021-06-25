import React from 'react'
import Logo from './../../assets/images/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export function Navbar() {
  const logout = () => {
    localStorage.clear()
  }
  return (
    <header style={{zIndex: 999}} className="bg-white shadow-xl fixed w-full">
      <div className="container h-20 mx-auto flex justify-between items-center">
        <Link to="/Posts">
          <div className="flex flex-row items-center">
            <img className="h-12 w-12" alt="trombinoscoop" src={Logo} />
            <Title className="ml-3">Trombinoscoop</Title>
          </div>
        </Link>
        <div className="flex flex-row items-center">
          <Link to="/User"><button className="primary-button rounded-xl px-12 py-2">Voir mon profil</button></Link>
          <Link to="/Connexion"><button className="secondary-button rounded-xl px-12 py-2 ml-3" onClick={logout}>Deconnexion</button></Link>
        </div>
      </div>
    </header>
  )
}

const Title = styled.span`
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 39px;
  /* identical to box height */


  color: #474646;
`