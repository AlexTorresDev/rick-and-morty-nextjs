const API_URL = 'https://rickandmortyapi.com/api'

export const fetcher = async (url: string) => {
  const response = await fetch(`${API_URL}${url}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${API_URL}${url}`)
  }

  return await response.json()
}