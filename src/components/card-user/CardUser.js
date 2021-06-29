import styled from 'styled-components'
import AddIcon from './../../assets/images/add-friend.svg'
import { Avatar } from './../avatar'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

export function CardUser({ name, fonction, color, email }) {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/User/${email}`)
    }

    const addFriend = async () => {
        const body = {
            post_id: uuid(),
            userA: localStorage.getItem('email'),
            userB: email,
        }
        const request = await fetch(`/add_friends`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(body)
          })
          if (request.ok){
            // fetchPosts()
            console.log('Added')
          }
    }

    return (
        <Wrapper className="friend-card my-4 shadow-lg hover:shadow-xl w-full flex flex-row justify-between rounded-xl pointer">
            <div onClick={handleClick} className="flex flex-col justify-center ml-6 w-1/6">
                <Avatar color={color} initial={name} />
            </div>
            <div onClick={handleClick} className="flex flex-col justify-center w-6/12">
                <span className="card-name">{name}</span>
                <span className="card-fonction">{fonction}</span>
            </div>
            <div className="flex justify-center items-center w-1/6">
                <button className="removr-border" onClick={addFriend}>
                    <img className="mr-2" src={AddIcon} alt="add" />
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
`
