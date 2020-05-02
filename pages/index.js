import Layout from '../components/layout'
import unfetch from 'isomorphic-unfetch'
import Link from 'next/link'
import slug from 'slug'
function HomePage({characters}) {
  return (
    <Layout>
      <h1>Welcome to Next.js!</h1>
      <ul>
        {characters.results.map(character => (
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}>
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export async function getStaticProps(context) {
  //data fetch
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()

  return {
    props: {
      characters
      //characters: characters
    }
  }
}
export default HomePage
