import { inject, type App } from 'vue'
import { GeoStatisticIBGEProvider } from '@/secondary/services/web/geo-statistic-web-provider'

export const registerServices = (app: App) => {
  app.provide('GeoStatisticService', new GeoStatisticIBGEProvider())
}

export const injectSafe = <T>(key: string): T => {
  const service = inject<T>(key)
  if (!service) {
    throw new Error('Service not found')
  }
  return service
}
