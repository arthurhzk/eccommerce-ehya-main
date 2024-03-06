import type { CityModel } from '@/domain/types/city-model'
import type { GeoStatisticService } from '../abstractions/geo-statistic-service'

export class GeoStatisticMokcProvider implements GeoStatisticService {
  async getCitiesByState(state: string): Promise<CityModel[]> {
    return []
  }
}
