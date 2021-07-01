import { useEffect, useState } from 'react'
import styled from 'styled-components'
import BG from './../../assets/images/concrete-wall-2.png'
import { Navbar, CardUser, Avatar } from './../../components'
import { formatDate } from './../../utils'
import { v4 as uuid } from 'uuid'

const Post = props => {
  const { name, content, date, color } = props

  return (
    <div className="flex w-full bg-white rounded-xl shadow-lg my-6 py-6">
      <div className="w-1/6 flex flex-col justify-center items-center">
        <Avatar color={color} initial={name} />
        <span className="post-name mt-2">{name}</span>
      </div>
      <div className="w-5/6 pl-4 pr-6 flex flex-col justify-between">
        <span className="break-words post-contents block">
          {content}
        </span>
        <span className="post-date block text-right">
          Publiée {date.toLowerCase()}
        </span>
      </div>
    </div>
  )
} 

export function PostFeed() {

  const [initialValues, setInitialValues] = useState({
    content: '',
    user_id: '',
    nom: 'Uploading..',
    prenom: 'Uploading..',
    fullName: '',
    avatar: '',
  })

  useEffect(() => {
    const emailLocal = localStorage.getItem('email')

    fetch(`/get_user/${emailLocal}`).then(res => res.json()).then(data => {
      setInitialValues(prev => ({
        ...prev,
        user_id: data.user.user_id,
        nom: data.user.nom,
        prenom: data.user.prenom,
        fullName: data.user.prenom +' '+ data.user.nom,
        avatar: data.user.avatar,
      }))
    })
  }, [])

  const [postes, setPostes] = useState([])
  const [listUsers, setListUsers] = useState([])
  const [listFriends, setListFriends] = useState([])

  const exceptMe = listUsers.filter(data => data.email !== localStorage.getItem('email'))

  let me = localStorage.getItem('email')
  const myFriends = listFriends

  const myFriendsFromA = myFriends.filter(list => list.userA === me)

  const myFriendsFromB = myFriends.filter(list => list.userB === me)

  const ami = []
  myFriendsFromA.forEach(data => {
    ami.push(data.userB)
  })
  myFriendsFromB.forEach(data => {
    ami.push(data.userA)
  })

  const allEmails = []
  exceptMe.map(data => (
    allEmails.push(data.email)
  ))

  const pasAmi = allEmails.filter(data => !ami.includes(data))

  const handleChange = e => {
    setInitialValues(prevValues => ({
      ...prevValues,
      [e.target.name]: e.target.value, 
    }))
  }

  const handlePost = async () => {
    if (initialValues.content!=='') {
      setInitialValues(prev => ({
        ...prev,
        content: '',
      }))
      const request = await fetch(`/add_post`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          post_id: uuid(),
          fullName: initialValues.fullName,
          content: initialValues.content,
          date: Date.now().toString(),
          avatar: initialValues.avatar,
        })
      })
      if (request.ok){
        fetchPosts()
      }
    }
  } 

  const fetchPosts = async () => {
    await fetch(`/get_post`).then(res => res.json()).then(data => {
      setPostes(data.reverse())
    })
  }

  const fetchUsers = async () => {
    await fetch(`/all_user`).then(res => res.json()).then(data => {
      setListUsers(data)
    })
  }

  const fetchFriends = async () => {
    const emailLocal = localStorage.getItem('email')
    await fetch(`/get_friends/${emailLocal}`).then(res => res.json()).then(data => {
      setListFriends(data)
    })
  }

  useEffect(() => {
    fetchPosts()
    fetchUsers()
    fetchFriends()
    setInterval(() => {
      fetchPosts()
    }, 15000)
  }, [])

  return (
    <>
      <Wrapper>
        <Navbar />
        <div className="container mx-auto h-content min-h-screen post-feed-bg shadow-xl flex flex-row mt-20">
          <div className="w-9/12 mr-4 ml-6 pt-8">
            <span className="bonjour">Bonjour,</span>
            <div className="flex items-center mt-3 mb-6">
              <Avatar color={initialValues.avatar} initial={`${initialValues.prenom} + '' + ${initialValues.nom}`}/>
              <span className="name ml-3">{initialValues.fullName}</span>
            </div>
            <div className="w-full bg-white rounded-xl shadow-lg h-24 relative mb-12">
              <textarea name='content' placeholder="Ecrivez ici" className="custom-textarea w-full mt-2 pl-6 pt-4 pr-48" onChange={handleChange} value={initialValues.content} />
              <button className="primary-button post-button rounded-xl px-12 py-2 absolute" 
              onClick={handlePost}>Poster</button>
            </div>
            {postes.map((data) => 
              <Post
                name={data.fullName}
                content={data.content}
                date={formatDate(parseInt(data.date))}
                color={data.avatar}
              />
            )}
          </div>
          <div className="w-3/12 ml-4 mr-6">
            <h3 className="name ml-3 mt-8">Mes amis</h3>
            {ami.map(data => (
              exceptMe.filter(dataFilter => dataFilter.email === data).map(dataMap => (
                <CardUser 
                  name={dataMap.prenom + ' ' + dataMap.nom}
                  fonction={dataMap.cursus}
                  color={dataMap.avatar}
                  email={dataMap.email}
                />
              ))
            ))        
            }
            <h3 className="name ml-3 mt-6">Utilisateurs</h3>
            {pasAmi.map(data => (
              exceptMe.filter(dataFilter => dataFilter.email === data).map(dataMap => (
                <CardUser 
                  name={dataMap.prenom + ' ' + dataMap.nom}
                  fonction={dataMap.cursus}
                  color={dataMap.avatar}
                  email={dataMap.email}
                  button={true}
                />
              ))
            ))        
            }
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  height: 100vh;
  background-image: url(${BG});
  background-attachment: fixed;
  overflow-y: scroll;
`
