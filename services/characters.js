const BASE_URL = 'https://rickandmortyapi.com/api/character'

export const getCharacters = (url = '') => {
  return fetch(BASE_URL + url).then(res => res.json()).then(res => {
    const data = {
      totalCount: res.info.count,
      totalPages: res.info.pages,
      characters: res.results
    }
    return data
  })
}

export const searchCharacters = (name, page) => {
  return fetch(BASE_URL + `/?name=${name}&page=${page}`).then(res => res.json()).then(res => {
    const data = {
      totalCount: res.info.count,
      totalPages: res.info.pages,
      characters: res.results
    }
    return data
  })
}