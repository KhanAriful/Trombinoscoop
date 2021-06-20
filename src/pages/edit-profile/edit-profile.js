import { useState } from 'react'
import styled from 'styled-components'
import MetaTags from 'react-meta-tags'
import BG from './../../assets/images/bg.jpg'
import { Input } from '@material-ui/core'
import { Dropdown, Avatar } from '../../components'

export function EditProfile() {

  const [initialValues, setInitialValues] = useState({
    status: '',
    prenom: 'User',
    nom: 'User',
    email: '',
    password: '',
    birthday: '',
    tel: '',
    matricule: '',
    faculte: '',
    cursus: '',
    annee: '',
  })

  const handleChange = e => {
    setInitialValues(prevValues => ({
      ...prevValues,
      [e.target.name]: e.target.value, 
    }))
  }

  const listValues = [{
    status: initialValues.status,
    prenom: initialValues.prenom,
    nom: initialValues.nom,
    email: initialValues.email,
    password: initialValues.password,
    birthday: initialValues.birthday,
    telephone: initialValues.tel,
    matricule: initialValues.matricule,
    faculte: initialValues.faculte,
    cursus: initialValues.cursus,
    annee: initialValues.annee
  }]

  const handleSubmit = async (state) => {
    console.log(state);
    /* const request = await fetch("/add_user", {
      method: "POST",
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify(state)
    })
    if (request.ok){
      return redirect_Page("/connect", 1000)
    } */

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
                <Input className="w-full px-4 mb-8" placeholder="Nom" name="nom" value={initialValues.nom} onChange={handleChange}/>
                <Input className="w-full px-4 mb-8" placeholder="Email" name="email" value={initialValues.email} onChange={handleChange}/>
                <Input className="w-full px-4 mb-8" placeholder="Date de naissance" name="birthday" value={initialValues.birthday} onChange={handleChange}/>
                <Input className="w-full px-4 mb-8" placeholder="Matricule" name="matricule" value={initialValues.matricule} onChange={handleChange}/>
                <Input className="w-full px-4 mb-10" placeholder="Téléphone mobile" name="tel" value={initialValues.tel} onChange={handleChange}/>
              </div>
              <div className="w-1/2 mx-14">
                <Input className="w-full px-4 mb-6" placeholder="Prenom" name="prenom" value={initialValues.prenom} onChange={handleChange}/>
                <Input className="w-full px-4 mb-2" placeholder="Mot de passe" name="password" type="password" value={initialValues.password} onChange={handleChange}/>
                <Dropdown title='Faculté' name='faculte' oc={handleChange} listdp={1} />
                <Dropdown title='Cursus' name='cursus' oc={handleChange} listdp={2} />
                <Dropdown title='Année' name='annee' oc={handleChange} listdp={3} />
                <Dropdown title='Je suis:' name='status' oc={handleChange} listdp={0} />
              </div>
            </div>
            <button 
              className="button-text border-2 border-black rounded-xl px-12 py-1 mb-8"
              onClick={() => handleSubmit(listValues)}
            >
                Sauvegarder
            </button>
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

