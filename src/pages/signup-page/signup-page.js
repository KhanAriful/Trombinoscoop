/* eslint-disable no-unused-vars */
import { useState } from 'react'
import styled from 'styled-components'
import MetaTags from 'react-meta-tags'
import BG from './../../assets/images/bg.jpg'
import LogoImg from './../../assets/images/logo.png'
import { Input, Select, InputLabel, FormControl, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'

export function SignupPage() {

  const [status, setStatus] = useState("")
  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [birthday, setBirthday] = useState("")
  const [tel, setTel] = useState("")
  const [matricule, setMatricule] = useState("")
  const [faculte, setFaculte] = useState("")
  const [cursus, setCursus] = useState("")
  const [annee, setAnnee] = useState("")

  const [initialValues, setInitialValues] = useState({
    status: '',
    prenom: '',
    nom: '',
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
    status: status,
    prenom: prenom,
    nom: nom,
    email: email,
    password: password,
    birthday: birthday,
    telephone: tel,
    matricule: matricule,
    faculte: faculte,
    cursus: cursus,
    annee: annee
  }]

  const listStatus = [
    'Etudiant', 
    'Formateur'
  ]
  const listFaculte = [
    'Paris', 
    'Lille',
  ]
  const listCursus = [
    'FullStacks',
    'Cybersecurité',
    'DevOps',
    'Reseaux',
    'NewTech',
  ]
  const listAnnee = [
    'Premiere',
    'Deuxieme',
    'Troisieme',
    'Quatrieme',
    'Cinquieme',
  ]

  const redirect_Page = (path, time) => {
      let tID = setTimeout(function () {
          window.location.href = path;
          window.clearTimeout(tID);        // clear time out.
      }, time);
  }

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
        <title>Inscription</title>
      </MetaTags>
      <Wrapper>
        <Overlay className="flex justify-center items-center">
          <div className="bg-white w-4/6 flex items-center flex-col rounded-2xl shadow-xl py-8">
            <Logo className="mb-2" src={LogoImg} alt="trombinoscoop" />
            <h2 className="mb-6">Inscription</h2>
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
                <Input className="w-full px-4 mb-2" placeholder="Mot de passe" name="password" value={initialValues.password} onChange={handleChange}/>
                <FormControl className="w-full">
                  <InputLabel id="faculte" className="mx-4">Faculté</InputLabel>
                  <Select className="w-full px-4 mb-3" defaultValue="" onChange={(e) => {setFaculte(e.target.value)}}>
                    {listFaculte.map((label, index) => (
                      <MenuItem value={label} key={index}>{label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl className="w-full">
                  <InputLabel id="faculte" className="mx-4">Cursus</InputLabel>
                  <Select className="w-full px-4 mb-3" defaultValue="" onChange={(e) => {setCursus(e.target.value)}}>
                    {listCursus.map((label, index) => (
                        <MenuItem value={label} key={index}>{label}</MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <FormControl className="w-full">
                  <InputLabel id="faculte" className="mx-4">Année</InputLabel>
                  <Select className="w-full px-4 mb-3" defaultValue=""  onChange={(e) => {setAnnee(e.target.value)}}>
                    {listAnnee.map((label, index) => (
                        <MenuItem value={label} key={index}>{label}</MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <FormControl className="w-full">
                  <InputLabel id="status" className="mx-4">Je suis:</InputLabel>
                  <Select className="w-full px-4 mb-3" defaultValue="" onChange={(e) => {setStatus(e.target.value)}}>
                    {listStatus.map((label, index) => (
                        <MenuItem value={label} key={index}>{label}</MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <button 
              className="button-text border-2 border-black rounded-xl px-12 py-1 mb-8"
              onClick={() => handleSubmit(listValues)}
            >
                Go
            </button>
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