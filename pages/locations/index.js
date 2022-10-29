import { Container } from '@nextui-org/react'
import Head from 'next/head'
import { PaginationControl } from '../../components/PaginationControl'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useRouter } from 'next/router'
import { Header } from '../../components/Header'
import { getLocations } from '../../services/locations'
import { LocationsContainer } from '../../components/LocationsContainer.js'


export default function Locations({ locations, totalPages, actualPage }) {
  const { width } = useWindowSize()
  const router = useRouter()

  const changePage = (page) => {
    router.push(`?page=${page}`)
  }

  return (
    <div >
      <Head>
        <title>Rick and Morty APP || locations</title>
        <meta name="description" content="App with the characters, locations and episodes of Rick and Morty show"  />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Header currentRoute={router.pathname} />

      <main >
        <Container md>
          <LocationsContainer locations={locations} />
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
    //transform the string to number 
    actualPage = Number(query.page)
  }

  const {totalCount, totalPages, locations} = await getLocations(url)
  return {
    props: {totalCount, totalPages, locations, actualPage}
  }
}