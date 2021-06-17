import styled from 'styled-components'
import Logo from './../../assets/images/Vectoradd_user.png'
import { Avatar } from '../index'

export function CardUser({ avatarLetter, name, fonction }) {
    return (
        <Wrapper className="m-4 shadow-lg flex flex-row justify-between">
            <div className="flex flex-col justify-center ml-6 w-1/6">
                <Avatar initial={avatarLetter}/>
            </div>
            <div className="flex flex-col justify-center w-6/12">
                <span className="card-name">{name}</span>
                <span className="card-fonction">{fonction}</span>
            </div>
            <div className="flex justify-center items-center w-1/6">
                <button>
                    <img className="w-7 h-5 mr-2" src={Logo} alt="trombinoscoop" />
                </button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.main`
  height: 72px;
  width: 282px;
  background-attachment: fixed;
  overflow-y: scroll;
  background-color: #fff;
  border-radius: 12px;
`
