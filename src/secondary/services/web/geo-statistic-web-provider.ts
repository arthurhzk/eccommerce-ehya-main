import axios from 'axios'

import type { GeoStatisticService } from '@/secondary/services/abstractions/geo-statistic-service'

import type { CityModel } from '@/domain/types/city-model'
import type { IBGECityDTO } from '@/secondary/services/dtos/ibge-city-dto'

export class GeoStatisticIBGEProvider implements GeoStatisticService {
  getCitiesByState(state: string): Promise<CityModel[]> {
    return axios
      .get<
        IBGECityDTO[]
      >(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/distritos`)
      .then((response) => {
        const states = response.data.map((city) => ({
          name: city.nome,
          id: city.id
        }))
        return states
      })
  }
}
