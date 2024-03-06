import axios from 'axios'
import type { GeoStatisticService } from '../abstractions/geo-statistic-service'
import type { CityModel } from '@/domain/types/city-model'
import type { IBGECityDTO } from '../dtos/ibge-city-dto'

export class GeoStatisticIBGEProvider implements GeoStatisticService {
  getCitiesByState(state: string): Promise<CityModel[]> {
    return axios
      .get<IBGECityDTO[]>(`/api/v1/localidades/estados/${state}/distritos`)
      .then((response) =>
        response.data.map((city) => ({
          name: city.nome,
          id: city.id,
        })),
      )
  }
}
