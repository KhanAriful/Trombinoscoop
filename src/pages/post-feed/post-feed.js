import styled from 'styled-components'
import BG from './../../assets/images/concrete-wall-2.png'
import { Navbar } from './../../components'

export function PostFeed() {
  return (
    <Wrapper>
      <Navbar />
      <div className="container mx-auto h-content min-h-screen post-feed-bg shadow-xl flex flex-row">
        <div className="w-9/12 bg-gray-800 h-screen mr-4 ml-6">

        </div>
        <div className="w-3/12 bg-red-400 h-screen ml-4 mr-6">

        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  height: 100vh;
  background-image: url(${BG});
  background-attachment: fixed;
  overflow-y: scroll;
`
