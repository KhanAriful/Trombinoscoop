import styled from 'styled-components'
import BG from './../../assets/images/concrete-wall-2.png'
import { Navbar, CardUser, Avatar } from './../../components'

const PostData = [
  {name: 'Ariful Khan', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius metus quis ornare interdum. Mauris sit amet urna diam. Ut dolor ipsum, commodo ac odio quis, pharetra ultrices sapien.', date: '13 juin, 2021'},
  {name: 'Loan Cleris', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius metus quis ornare interdum. Mauris sit amet urna diam. Ut dolor ipsum, commodo ac odio quis, pharetra ultrices sapien.', date: '13 juin, 2021'},
  {name: 'Martin Curtet', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius metus quis ornare interdum. Mauris sit amet urna diam. Ut dolor ipsum, commodo ac odio quis, pharetra ultrices sapien.', date: '13 juin, 2021'},
  {name: 'Martin Curtet', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius metus quis ornare interdum. Mauris sit amet urna diam. Ut dolor ipsum, commodo ac odio quis, pharetra ultrices sapien.', date: '13 juin, 2021'},
  {name: 'Martin Curtet', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius metus quis ornare interdum. Mauris sit amet urna diam. Ut dolor ipsum, commodo ac odio quis, pharetra ultrices sapien.', date: '13 juin, 2021'},
  {name: 'Martin Curtet', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius metus quis ornare interdum. Mauris sit amet urna diam. Ut dolor ipsum, commodo ac odio quis, pharetra ultrices sapien.', date: '13 juin, 2021'},
  {name: 'Martin Curtet', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius metus quis ornare interdum. Mauris sit amet urna diam. Ut dolor ipsum, commodo ac odio quis, pharetra ultrices sapien.', date: '13 juin, 2021'}
]

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
            <div className="w-full bg-white rounded-xl shadow-lg h-24 relative mb-12">
              <textarea placeholder="Ecrivez ici" className="custom-textarea w-full mt-2 pl-6 pt-4 pr-48"></textarea>
              <button className="primary-button post-button rounded-xl px-12 py-2 absolute">Poster</button>
            </div>
            {PostData.map(data => <Post
              name={data.name}
              content={data.content}
              date={data.date}
            />)}
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
