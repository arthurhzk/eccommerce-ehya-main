import type Service from '@/domain/types/category-type'

const services: Service[] = [
  {
    id: 1,
    title: 'Estoque sempre Renovado',
    image: '/wallet.svg',
    description: 'Temos muito estoque até o próximo ano para suprir suas necessidades.'
  },
  {
    id: 2,
    title: '100% Seguro',
    image: '/secure.svg',
    description: 'Você não precisa se preocupar ao fazer transações em nossa plataforma agora.'
  },
  {
    id: 3,
    title: 'Suporte 24/7',
    image: '/call.svg',
    description:
      'Se houver algum problema ao usar nossa plataforma, você pode entrar em contato conosco gratuitamente.'
  },
  {
    id: 4,
    title: 'Frete Grátis',
    image: '/delivery.svg',
    description:
      'Onde quer que você esteja, nós garantimos que você receba o serviço de entrega gratuito.'
  }
]

export default services
