import styled from 'styled-components'
import MetaTags from 'react-meta-tags'
import BG from './../../assets/images/bg.jpg'
import LogoImg from './../../assets/images/logo.png'
import { Input } from '@material-ui/core'

export function LoginPage() {
  return (
    <>
      <MetaTags>
        <title>Connexion</title>
      </MetaTags>
      <Wrapper>
        <Overlay className="flex justify-center items-center">
          <div className="bg-white w-96 flex items-center flex-col rounded-2xl py-8">
            <Logo className="mb-2" src={LogoImg} alt="trombinoscoop" />
            <h2 className="mb-4">Connexion</h2>
            <Input className="w-4/5 px-4 mb-6" placeholder="Email" />
            <Input className="w-4/5 px-4 mb-8" placeholder="Mot de passe" />
            <button className="button-text border-2 border-black rounded-xl px-12 py-1 mb-8">Go</button>
            <a className="link" href="#">Je n’ai pas de compte, je m’inscris</a>
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