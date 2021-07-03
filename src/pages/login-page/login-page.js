import styled from 'styled-components'
import MetaTags from 'react-meta-tags'
import BG from './../../assets/images/bg.jpg'
import LogoImg from './../../assets/images/logo.png'
import { Input } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import Loader from "react-loader-spinner"

export function LoginPage() {

  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
    const request = await fetch("https://trombiapi.herokuapp.com/login", {
      method: "POST",
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify(initialValues)
    })
    if (request.ok) {
      store('isLoggedIn', true)
      store('email', initialValues.email)
      store('avatar', initialValues.avatar)
      setIsLoading(false)
      history.push('/Posts')
    } else if (request.statusText === 'NOT FOUND') {
      store('isLoggedIn', false)
      setIsLoading(false)
    }
  }

  const handleKey = (e) => {
    if(e.key === 'Enter') {
      handleSubmit()
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
            <Input className="w-4/5 px-4 mb-6" placeholder="Email" name="email" value={initialValues.email} onChange={handleChange} onKeyPress={handleKey}/>
            <Input className="w-4/5 px-4 mb-8" type='password' placeholder="Mot de passe" name="password" value={initialValues.password} onChange={handleChange} onKeyPress={handleKey}/>
            <button onClick={handleSubmit} className="button-text border-2 border-black rounded-xl px-12 py-1 mb-8">Go</button>
            <Link to="/Inscription"><span className="link">Je n’ai pas de compte, je m’inscris</span></Link>
          </div>
        </Overlay>
      </Wrapper>
      {isLoading &&
      <LoaderBg>
        <Loader
          type="Puff"
          color="#2275A0"
          height={100}
          width={100}
        />
      </LoaderBg>}
    </>
  )
}

const LoaderBg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

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