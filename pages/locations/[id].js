import { Container } from '@nextui-org/react'
import Head from 'next/head'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useRouter } from 'next/router'
import { Header } from '../../components/Header'
import { getOneLocation } from '../../services/locations'
import { CardLocation } from '../../components/CardLocation'


export default function Locations({ location }) {
  const router = useRouter()

  return (
    <div >
      <Head>
        <title>Rick and Morty APP || locations</title>
        <meta name="description" content="App with the characters, locations and episodes of Rick and Morty show"  />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Header currentRoute={router.pathname} />

      <main >
        <Container sm css={{pt: '$10'}}>
          <CardLocation location={location} />
        </Container>
      </main>

      
    </div>
  )
}

export async function getServerSideProps({query}) {
  const location = await getOneLocation('/' + query.id)
  return {
    props: {
      location
    }
  }
}