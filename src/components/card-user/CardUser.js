import styled from 'styled-components'
import AddIcon from './../../assets/images/add-friend.svg'
import { Avatar } from './../avatar'
import { Link } from 'react-router-dom'

export function CardUser({ name, fonction, color }) {
    return (
        <Link to="/">
            <Wrapper className="friend-card my-4 shadow-lg hover:shadow-xl w-full flex flex-row justify-between rounded-xl">
                <div className="flex flex-col justify-center ml-6 w-1/6">
                    <Avatar color={color} initial={name} />
                </div>
                <div className="flex flex-col justify-center w-6/12">
                    <span className="card-name">{name}</span>
                    <span className="card-fonction">{fonction}</span>
                </div>
                <div className="flex justify-center items-center w-1/6">
                    <button onClick={() => console.log('Bouton clicker')}>
                        <img className="mr-2" src={AddIcon} alt="trombinoscoop" />
                    </button>
                </div>
            </Wrapper>
        </Link>
        
    )
}

const Wrapper = styled.main`
  height: 72px;
  background-attachment: fixed;
  overflow-y: scroll;
  background-color: #fff;
`
