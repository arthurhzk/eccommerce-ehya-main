import axios from 'axios'

async function fetchCitiesByState(state: any) {
  try {
    const response = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/distritos`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching cities:', error)
    throw error
  }
}

export { fetchCitiesByState }
