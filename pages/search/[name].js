import { Container, Text } from '@nextui-org/react'
import Head from 'next/head'
import { CharactersContainer } from '../../components/CharactersContainer'
import { PaginationControl } from '../../components/PaginationControl'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useRouter } from 'next/router'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { searchCharacters } from '../../services/characters'


export default function Home({ characters, totalPages, actualPage, name, totalCount, status }) {
  const { width } = useWindowSize()
  const router = useRouter()


  const changePage = (page) => {
    const queryStatus = status ? `&status=${status}` : '' 
    router.push(`/search/${name}?page=${page}` + queryStatus)
  }

  return (
    <div >
      <Head>
        <title>Rick and Morty APP</title>
        <meta name="description" content="App with the characters, locations and episodes of Rick and Morty show"  />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Header currentRoute={router.pathname} />
      <main >
        <Container md>
          <Search width={width} initialValue={name} statusValue={status === '' ? 'all' : status} />
          {
            totalCount === 0 
            ? <Text h2>No results</Text>
            : (<>
              <CharactersContainer characters={characters} total={totalCount} />
              <PaginationControl totalPages={totalPages} changePage={changePage} size={width > 500 ? 'lg' : 'xs'} initialPage={actualPage} />
            </>)
          }
        </Container>
        
      </main>

      
    </div>
  )
}

export async function getServerSideProps({query}) {
  let actualPage = 1
  if (query.page) {
    actualPage = Number(query.page)
  }
  
  const {totalCount, totalPages, characters} = await searchCharacters(query.name, actualPage, query.status)
  
  
  return {
    props: {
      totalCount, 
      totalPages, 
      characters, 
      actualPage, 
      name: query.name, 
      status: query.status === undefined ? '' : query.status
    }
  }
}