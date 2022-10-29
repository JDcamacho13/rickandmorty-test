import { Container } from '@nextui-org/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header } from '../../components/Header'
import { getOneEpisode } from '../../services/episodes'
import { CardEpisode } from '../../components/CardEpisode'


export default function Episodes({ episode }) {
  const router = useRouter()

  return (
    <div >
      <Head>
        <title>Rick and Morty APP || episodes</title>
        <meta name="description" content="App with the characters, locations and episodes of Rick and Morty show"  />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Header currentRoute={router.pathname} />

      <main >
        <Container md css={{pt: "$10"}}>
          <CardEpisode episode={episode} />
        </Container>
        
      </main>

      
    </div>
  )
}

export async function getServerSideProps({query}) {
  const episode = await getOneEpisode('/' + query.id)
  return {
    props: {episode}
  }
}