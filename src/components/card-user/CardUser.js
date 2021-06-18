import styled from 'styled-components'
import Logo from './../../assets/images/add-friend.svg'
import { Avatar } from '../index'
/* import { Link } from 'react-router-dom' */

export function CardUser({ name, fonction }) {
    return (
        <Wrapper className="my-4 shadow-lg w-full flex flex-row justify-between">
            <div className="flex flex-col justify-center ml-6 w-1/6">
                <Avatar initial={name}/>
            </div>
            <div className="flex flex-col justify-center w-6/12">
                <span className="card-name">{name}</span>
                <span className="card-fonction">{fonction}</span>
            </div>
            <div className="flex justify-center items-center w-1/6">
                <button>
                    <img className="mr-2" src={Logo} alt="trombinoscoop" />
                </button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.main`
  height: 72px;
  background-attachment: fixed;
  overflow-y: scroll;
  background-color: #fff;
  border-radius: 12px;
`
