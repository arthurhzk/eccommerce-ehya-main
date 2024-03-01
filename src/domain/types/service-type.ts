export interface Service {
  id: number
  image: string
  title: string
  description: string
  amount: number
}

export interface Task {
  id: number
  title: string
  description: string
  amount: number
  serviceId: number
  service: Service
}
