const BASE_URL = 'https://rickandmortyapi.com/api/episode'

export const getEpisodes = (url = '') => {
  return fetch(BASE_URL + url).then(res => res.json()).then(res => {
    const data = {
      totalCount: res.info.count,
      totalPages: res.info.pages,
      episodes: res.results
    }
    return data
  })
}

export const getOneEpisode = (id) => {
  return fetch(BASE_URL + `/${id}`).then(res => res.json()).then(res => {
    return res
  })
}