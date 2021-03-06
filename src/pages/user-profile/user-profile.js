/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import MetaTags from 'react-meta-tags'
import BG from './../../assets/images/bg.jpg'
import { Link } from 'react-router-dom'
import { Navbar, Avatar } from '../../components'

export function UserProfile() {

    const pathArray = window.location.pathname.split('/');
    const param = pathArray[2];

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
        avatar: '',
    })

    useEffect(() => {
        let emailLocal
        if (param === undefined) {
            emailLocal = localStorage.getItem('email')
        } else {
            emailLocal = param
        }

        fetch(`/get_user/${emailLocal}`).then(res => res.json()).then(data => {
            setInitialValues({
                status: data.user.status,
                prenom: data.user.prenom,
                nom: data.user.nom,
                email: data.user.email,
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

    const getUserValues = (attribute, value) => {
        let html = `${attribute} : ${value}`
        return html
    }

    return (
        <>
            <MetaTags>
                <title>Mon profil</title>
            </MetaTags>
            <Wrapper>
                <Navbar />
                <Overlay className="flex justify-center items-center">
                <div className="bg-white w-2/6 flex items-center flex-col rounded-2xl shadow-xl py-8 mt-10">
                    <Avatar color={initialValues.avatar} initial={initialValues.prenom + initialValues.nom} large={true}/>
                    <h2 className="mt-3 mb-6">{param===undefined ? 'Mon profil' : `Profil de ${initialValues.prenom}`}</h2>
                    <div className="flex items-start justify-start flex-col w-4/6 text-justify">
                        <p>{getUserValues('Nom', initialValues.nom)}</p>
                        <p>{getUserValues('Pr??nom', initialValues.prenom)}</p>
                        <p>{getUserValues('Date de naissance', initialValues.birthday)}</p>
                        <p>{getUserValues('Adresse Email', initialValues.email)}</p>
                        <p>{getUserValues('Matricule', initialValues.matricule)}</p>
                        <p>{getUserValues('T??l??phone', initialValues.tel)}</p>
                        <p>{getUserValues('Facult??', initialValues.faculte)}</p>
                        <p>{getUserValues('Cursus', initialValues.cursus)}</p>
                        <p>{getUserValues('Ann??e', initialValues.annee)}</p>
                        <p>{getUserValues('Status', initialValues.status)}</p>
                    </div>
                    <Link to='/Modifier'>
                        {param===undefined &&
                        <button className="button-text border-2 border-black rounded-xl px-12 py-1 mt-4">
                        Modifier mon profil
                        </button>}
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