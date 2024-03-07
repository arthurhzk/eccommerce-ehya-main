import type { CityModel } from '@/domain/types/city-model'

export interface GeoStatisticService {
  getCitiesByState(state: string): Promise<CityModel[]>
}
