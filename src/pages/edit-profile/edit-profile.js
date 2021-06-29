import { useState, useEffect } from 'react'
import styled from 'styled-components'
import MetaTags from 'react-meta-tags'
import BG from './../../assets/images/bg.jpg'
import { Input } from '@material-ui/core'
import { Dropdown, Avatar } from '../../components'
import { Link, useHistory } from 'react-router-dom'

export function EditProfile() {

  const history = useHistory()

  const [initialValues, setInitialValues] = useState({
    status: '',
    prenom: 'Uploading...',
    nom: 'Uploading...',
    email: '',
    password: '',
    birthday: '',
    tel: '',
    matricule: '',
    faculte: '',
    cursus: '',
    annee: '',
  })

  useEffect(() => {
    const emailLocal = localStorage.getItem('email')

    fetch(`/get_user/${emailLocal}`).then(res => res.json()).then(data => {
        setInitialValues({
            status: data.user.status,
            prenom: data.user.prenom,
            nom: data.user.nom,
            email: data.user.email,
            password: data.user.password,
            birthday: data.user.birthday,
            tel: data.user.tel,
            matricule: data.user.matricule,
            faculte: data.user.faculte,
            cursus: data.user.cursus,
            annee: data.user.annee,
            avatar: data.user.avatar,
        })
    })
}, [])

  const handleChange = e => {
    setInitialValues(prevValues => ({
      ...prevValues,
      [e.target.name]: e.target.value, 
    }))
  }

  const handleSubmit = async () => {
    const emailLocal = localStorage.getItem('email')
    const request = await fetch(`/update/${emailLocal}`, {
      method: "POST",
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify(initialValues)
    })
    if (request.ok){
      history.push('/User')
    }
  }

  const handleDelete = async () => {
    const emailLocal = localStorage.getItem('email')
    const request = await fetch(`/delete_user/${emailLocal}`, {
      method: "POST",
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify(initialValues)
    })
    if (request.ok){
      localStorage.clear()
      history.push('/Connexion')
    }
  }

  return (
    <>
      <MetaTags>
        <title>Modifier le profile</title>
      </MetaTags>
      <Wrapper>
        <Overlay className="flex justify-center items-center">
          <div className="bg-white w-4/6 flex items-center flex-col rounded-2xl shadow-xl py-8">
            <Avatar initial={initialValues.prenom + initialValues.nom} large={true}/>
            <h2 className="mb-6">Modifier le profile</h2>
            <div className="flex items-center mb-8">
              <div className="w-1/2 mx-14">
                <Input className="w-full px-4 mb-8" placeholder={initialValues.nom} value={initialValues.nom} name="nom" onChange={handleChange}/>
                <Input className="w-full px-4 mb-8" placeholder="Email" name="email" value={initialValues.email} onChange={handleChange}/>
                <Input className="w-full px-4 mb-8" placeholder="Date de naissance" name="birthday" value={initialValues.birthday} onChange={handleChange}/>
                <Input className="w-full px-4 mb-8" placeholder="Matricule" name="matricule" value={initialValues.matricule} onChange={handleChange}/>
                <Input className="w-full px-4 mb-10" placeholder="Téléphone mobile" name="tel" value={initialValues.tel} onChange={handleChange}/>
              </div>
              <div className="w-1/2 mx-14">
                <Input className="w-full px-4 mb-6" placeholder={initialValues.prenom} value={initialValues.prenom} name="prenom"  onChange={handleChange}/>
                <Input className="w-full px-4 mb-2" placeholder="Mot de passe" name="password" type="password" value={initialValues.password} onChange={handleChange}/>
                <Dropdown title='Faculté' name='faculte' oc={handleChange} listdp={1} />
                <Dropdown title='Cursus' name='cursus' oc={handleChange} listdp={2} />
                <Dropdown title='Année' name='annee' oc={handleChange} listdp={3} />
                <Dropdown title='Je suis:' name='status' oc={handleChange} listdp={0} />
              </div>
            </div>
            <div className='flex'>
              <Link to='/User'><button className="button-text border-2 border-black rounded-xl px-12 py-1 mb-8" > retour </button></Link>
              <button 
                className="button-text border-2 border-black rounded-xl px-12 py-1 mb-8"
                onClick={handleDelete}
              >
                  Supprimer mon compte
              </button>
              <button 
                className="button-text border-2 border-black rounded-xl px-12 py-1 mb-8"
                onClick={handleSubmit}
              >
                  Sauvegarder
              </button>
            </div>
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

