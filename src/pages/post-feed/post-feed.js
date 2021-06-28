import { useEffect, useState } from 'react'
import styled from 'styled-components'
import BG from './../../assets/images/concrete-wall-2.png'
import { Navbar, CardUser, Avatar } from './../../components'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { Store } from 'tough-cookie'

const Post = props => {
  const { name, content, date } = props

  return (
    <div className="flex w-full bg-white rounded-xl shadow-lg my-6 py-6">
      <div className="w-1/6 flex flex-col justify-center items-center">
        <Avatar initial={name} />
        <span className="post-name mt-2">{name}</span>
      </div>
      <div className="w-5/6 pr-6">
        <span className="post-contents block">
          {content}
        </span>
        <span className="post-date block text-right">
          Publiée le {date}
        </span>
      </div>
    </div>
  )
} 

export function PostFeed() {

  const history = useHistory()

  const [initialValues, setInitialValues] = useState({
    content: '',
    user_id: '',
    nom: 'Uploading..',
    prenom: 'Uploading..',
    fullName: '',
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
      }))
    })
  }, [])

  const [postes, setPostes] = useState([])

  console.log('initialValues', initialValues)

  const handleChange = e => {
    setInitialValues(prevValues => ({
      ...prevValues,
      [e.target.name]: e.target.value, 
    }))
  }

  const handlePost = async () => {
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
      })
    })
    if (request.ok){
      fetchPosts()
    }
  } 

  const fetchPosts = () => {
    fetch(`/get_post`).then(res => res.json()).then(data => {
      setPostes(data)
      console.log(postes)
    })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  console.log(postes)

  return (
    <>
      <Wrapper>
        <Navbar />
        <div className="container mx-auto h-content min-h-screen post-feed-bg shadow-xl flex flex-row mt-20">
          <div className="w-9/12 mr-4 ml-6 pt-8">
            <span className="bonjour">Bonjour,</span>
            <div className="flex items-center mt-3 mb-6">
              <Avatar initial={`${initialValues.prenom} + '' + ${initialValues.nom}`}/>
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
                date={data.date}
              />
            )}
          </div>
          <div className="w-3/12 ml-4 mr-6">
            <CardUser name="Loan CLERIS" fonction="Fullstacks" />
            <CardUser name="Ariful KHAN" fonction="Fullstacks" />
            <CardUser name="Martin CURTET" fonction="Fullstacks" />
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
