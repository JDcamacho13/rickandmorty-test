import { Container } from '@nextui-org/react'
import Head from 'next/head'
import { PaginationControl } from '../../components/PaginationControl'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useRouter } from 'next/router'
import { Header } from '../../components/Header'
import { LocationsContainer } from '../../components/LocationsContainer.js'
import { getEpisodes } from '../../services/episodes'
import { EpisodesContainer } from '../../components/EpisodesContainer'


export default function Episodes({ episodes, totalPages, actualPage }) {
  const { width } = useWindowSize()
  const router = useRouter()
  
  const changePage = (page) => {
    router.push(`?page=${page}`)
  }

  return (
    <div >
      <Head>
        <title>Rick and Morty APP || episodes</title>
        <meta name="description" content="App with the characters, locations and episodes of Rick and Morty show"  />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Header currentRoute={router.pathname} />

      <main >
        <Container md>
          <EpisodesContainer episodes={episodes} />
          <PaginationControl totalPages={totalPages} changePage={changePage} size={width > 500 ? 'lg' : 'xs'} initialPage={actualPage}/>
        </Container>
        
      </main>

      
    </div>
  )
}

export async function getServerSideProps({query}) {
  let url = ''
  let actualPage = 1
  if (query.page) {
    url = `?page=${query.page}` 
    actualPage = Number(query.page)
  }

  const {totalCount, totalPages, episodes} = await getEpisodes(url)
  return {
    props: {totalCount, totalPages, episodes, actualPage}
  }
}