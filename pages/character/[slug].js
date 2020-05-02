import Layout from '../../components/layout'
import unfetch from 'isomorphic-unfetch'
import Link from 'next/link'
import slug from 'slug'
function CharacterDetail({character}) {
  return (
    <Layout>
      <h1>Character Detail</h1>
      <div>{character.name}</div>
      <figure>
        <img src={character.image} alt={character.name}/>
      </figure>
    </Layout>
  )
}
export async function getStaticPaths() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()

  return {
    paths: characters.results.map(character =>{
      return {params: { slug:`${slug(character.name)}-${character.id}` }}
    }),
      //{ params: { id: '1' } },

    fallback: false // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  //data fetch
  //console.log(params.id)
  const id = params.slug.split('-').slice(-1)[0]
  const data = await unfetch(`https://rickandmortyapi.com/api/character/${id}`)
  const character = await data.json()
  console.log(character)
  return {
    props: {
      character
    }
  }
}

export default CharacterDetail
