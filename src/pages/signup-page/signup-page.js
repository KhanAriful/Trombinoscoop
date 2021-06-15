import styled from 'styled-components'
import MetaTags from 'react-meta-tags'
import BG from './../../assets/images/bg.jpg'
import LogoImg from './../../assets/images/logo.png'
import { Input } from '@material-ui/core'
import { Link } from 'react-router-dom'

export function SignupPage() {
  return (
    <>
      <MetaTags>
        <title>Inscription</title>
      </MetaTags>
      <Wrapper>
        <Overlay className="flex justify-center items-center">
          <div className="bg-white w-4/6 flex items-center flex-col rounded-2xl shadow-xl py-8">
            <Logo className="mb-2" src={LogoImg} alt="trombinoscoop" />
            <h2 className="mb-6">Inscription</h2>
            <div className="flex items-center mb-8">
              <div className="w-1/2 mx-14">
                <Input className="w-full px-4 mb-6" placeholder="Email" />
                <Input className="w-full px-4 mb-8" placeholder="Mot de passe" />
                <Input className="w-full px-4 mb-6" placeholder="Email" />
                <Input className="w-full px-4 mb-8" placeholder="Mot de passe" />
                <Input className="w-full px-4 mb-6" placeholder="Email" />
              </div>
              <div className="w-1/2 mx-14">
                <Input className="w-full px-4 mb-6" placeholder="Email" />
                <Input className="w-full px-4 mb-8" placeholder="Mot de passe" />
                <Input className="w-full px-4 mb-6" placeholder="Email" />
                <Input className="w-full px-4 mb-8" placeholder="Mot de passe" />
                <Input className="w-full px-4 mb-6" placeholder="Email" />
              </div>
            </div>
            <button className="button-text border-2 border-black rounded-xl px-12 py-1 mb-8">Go</button>
            <Link to="/Connexion"><span className="link">Je suis déjà inscrit, je me connecte</span></Link>
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