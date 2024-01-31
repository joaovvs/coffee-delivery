import expressoImg from '../assets/expresso.png'
import expressoAmericanoImg from '../assets/americano.png'
import expressoCremosoImg from '../assets/expresso-cremoso.png'
import expressoGeladoImg from '../assets/cafe-gelado.png'
import cafeComLeiteImg from '../assets/cafe-com-leite.png'
import latteImg from '../assets/latte.png'
import capuccinoImg from '../assets/capuccino.png'
import macchiatoImg from '../assets/macchiato.png'
import mocaccinoIMg from '../assets/mochaccino.png'
import chocolateQuenteImg from '../assets/chocolate-quente.png'
import cubanoImg from '../assets/cubano.png'
import havaianoImg from '../assets/havaiano.png'
import arabeImg from '../assets/arabe.png'
import irlandesImg from '../assets/irlandes.png'
import { Bank, CreditCard, Money } from 'phosphor-react'
import React from 'react'

export const coffees = [
  {
    id: 1,
    name: 'expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['tradicional'],
    image: expressoImg,
  },
  {
    id: 2,
    name: 'expresso americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['tradicional'],
    image: expressoAmericanoImg,
  },
  {
    id: 3,
    name: 'expresso cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['tradicional'],
    image: expressoCremosoImg,
  },
  {
    id: 4,
    name: 'expresso gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['tradicional', 'gelado'],
    image: expressoGeladoImg,
  },
  {
    id: 5,
    name: 'café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: cafeComLeiteImg,
  },
  {
    id: 6,
    name: 'latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: latteImg,
  },
  {
    id: 7,
    name: 'capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: capuccinoImg,
  },
  {
    id: 8,
    name: 'macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: macchiatoImg,
  },
  {
    id: 9,
    name: 'mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: mocaccinoIMg,
  },
  {
    id: 10,
    name: 'chocolate quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['especial', 'com leite'],
    image: chocolateQuenteImg,
  },
  {
    id: 11,
    name: 'cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['especial', 'alcoólico', 'gelado'],
    image: cubanoImg,
  },
  {
    id: 12,
    name: 'havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['especial'],
    image: havaianoImg,
  },
  {
    id: 13,
    name: 'árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['especial'],
    image: arabeImg,
  },
  {
    id: 14,
    name: 'irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['especial', 'alcoólico'],
    image: irlandesImg,
  },
] as const

export const AcceptedPayments = [
  {
    value: 'credit',
    label: 'Cartão de crédito',
    icon: React.createElement(CreditCard),
  },
  {
    value: 'debit',
    label: 'Cartão de débito',
    icon: React.createElement(Bank),
  },
  { value: 'cash', label: 'Dinheiro', icon: React.createElement(Money) },
] as const
