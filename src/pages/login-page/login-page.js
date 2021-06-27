import styled from 'styled-components'
import MetaTags from 'react-meta-tags'
import BG from './../../assets/images/bg.jpg'
import LogoImg from './../../assets/images/logo.png'
import { Input } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

export function LoginPage() {

  const history = useHistory()

  const store = (key, value) => {
    localStorage.setItem(key, value)
  }

  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
  })

  const handleChange = e => {
    setInitialValues(prevValues => ({
      ...prevValues,
      [e.target.name]: e.target.value, 
    }))
  }

  const handleSubmit = async () => {
    const request = await fetch("/login", {
      method: "POST",
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify(initialValues)
    })
    if (request.ok) {
      // localStorage.setItem('isLoggedIn', true)
      // localStorage.setItem('email', initialValues.email)
      store('isLoggedIn', true)
      store('email', initialValues.email)
      history.push('/Posts')
    } else if (request.statusText === 'NOT FOUND') {
      // localStorage.setItem('isLoggedIn', false)
      store('isLoggedIn', false)
    }
  }
  return (
    <>
      <MetaTags>
        <title>Connexion</title>
      </MetaTags>
      <Wrapper>
        <Overlay className="flex justify-center items-center">
          <div className="bg-white w-96 flex items-center flex-col rounded-2xl shadow-xl py-8">
            <Logo className="mb-2" src={LogoImg} alt="trombinoscoop" />
            <h2 className="mb-4">Connexion</h2>
            <Input className="w-4/5 px-4 mb-6" placeholder="Email" name="email" value={initialValues.email} onChange={handleChange} />
            <Input className="w-4/5 px-4 mb-8" type='password' placeholder="Mot de passe" name="password" value={initialValues.password} onChange={handleChange} />
            <button onClick={handleSubmit} className="button-text border-2 border-black rounded-xl px-12 py-1 mb-8">Go</button>
            <Link to="/Inscription"><span className="link">Je n’ai pas de compte, je m’inscris</span></Link>
          </div>
        </Overlay>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  height: 100vh;
  background-image: url(${BG});
  background-size: cover;
`
const Overlay = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.07);
  backdrop-filter: blur(6px);
`
const Logo = styled.img`
  width: 66px;
  height: 66px;
`