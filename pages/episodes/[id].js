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
        <title>Rick and Morty APP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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