import styled from 'styled-components'
import BG from './../../assets/images/concrete-wall-2.png'
import { Navbar, CardUser, Avatar } from './../../components'

export function PostFeed() {
  
  return (
    <>
      <Wrapper>
        <Navbar />
        <div className="container mx-auto h-content min-h-screen post-feed-bg shadow-xl flex flex-row mt-20">
          <div className="w-9/12 mr-4 ml-6 pt-8">
            <span className="bonjour">Bonjour,</span>
            <div className="flex items-center mt-3 mb-6">
              <Avatar initial="Ariful Khan" />
              <span className="name ml-3">Ariful Khan</span>
            </div>
            <div className="w-full bg-white rounded-xl shadow-lg h-24 relative">
              <textarea placeholder="Ecrivez ici" className="custom-textarea w-full mt-2 pl-6 pt-4 pr-48"></textarea>
              <button className="primary-button post-button rounded-xl px-12 py-2 absolute">Poster</button>
            </div>
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
