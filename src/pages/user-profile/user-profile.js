/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import MetaTags from 'react-meta-tags'
import BG from './../../assets/images/bg.jpg'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components'
import { Avatar } from '../../components'

export function UserProfile() {

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

    useEffect(() => {
        fetch('/get_user').then(res => res.json()).then(data => {
            setInitialValues(data)
        })
    }, [])

    const getUserValues = (attribute, value) => {
        let html = `${attribute} : ${value}`
        return html
    }

    return (
        <>
            <MetaTags>
                <title>Mon profile</title>
            </MetaTags>
            <Wrapper>
                <Navbar />
                <Overlay className="flex justify-center items-center">
                <div className="bg-white w-2/6 flex items-center flex-col rounded-2xl shadow-xl py-8 mt-10">
                    <Avatar initial={initialValues.prenom + initialValues.nom} large={true}/>
                    <h2 className="mb-6">Mon profile</h2>
                    <div className="flex items-start mb-8 justify-start flex-col w-4/6 text-justify">
                        <p>{getUserValues('Nom', initialValues.nom)}</p>
                        <p>{getUserValues('Prénom', initialValues.prenom)}</p>
                        <p>{getUserValues('Date de naissance', initialValues.birthday)}</p>
                        <p>{getUserValues('Adresse Email', initialValues.email)}</p>
                        <p>{getUserValues('Matricule', initialValues.matricule)}</p>
                        <p>{getUserValues('Téléphone', initialValues.tel)}</p>
                        <p>{getUserValues('Faculté', initialValues.faculte)}</p>
                        <p>{getUserValues('Cursus', initialValues.cursus)}</p>
                        <p>{getUserValues('Année', initialValues.annee)}</p>
                        <p>{getUserValues('Status', initialValues.status)}</p>
                    </div>
                    <Link to='/Modifier'>
                        <button className="button-text border-2 border-black rounded-xl px-12 py-1 mb-8">
                            Modifier mon profile
                        </button>
                    </Link>
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