const BASE_URL = 'https://rickandmortyapi.com/api/location'

export const getLocations = (url = '') => {
  return fetch(BASE_URL + url).then(res => res.json()).then(res => {
    const data = {
      totalCount: res.info.count,
      totalPages: res.info.pages,
      locations: res.results
    }
    return data
  })
}

export const getOneLocation = (id) => {
  return fetch(BASE_URL + `/${id}`).then(res => res.json()).then(res => {
    return res
  })
}