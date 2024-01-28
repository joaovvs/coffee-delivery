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

export const coffees = [
  {
    name: 'expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['tradicional'],
    image: expressoImg,
  },
  {
    name: 'expresso americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['tradicional'],
    image: expressoAmericanoImg,
  },
  {
    name: 'expresso cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['tradicional'],
    image: expressoCremosoImg,
  },
  {
    name: 'expresso gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['tradicional', 'gelado'],
    image: expressoGeladoImg,
  },
  {
    name: 'café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: cafeComLeiteImg,
  },
  {
    name: 'latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: latteImg,
  },
  {
    name: 'capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: capuccinoImg,
  },
  {
    name: 'macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: macchiatoImg,
  },
  {
    name: 'mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: mocaccinoIMg,
  },
  {
    name: 'chocolate quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['especial', 'com leite'],
    image: chocolateQuenteImg,
  },
  {
    name: 'cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['especial', 'alcoólico', 'gelado'],
    image: cubanoImg,
  },
  {
    name: 'havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['especial'],
    image: havaianoImg,
  },
  {
    name: 'árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['especial'],
    image: arabeImg,
  },
  {
    name: 'irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['especial', 'alcoólico'],
    image: irlandesImg,
  },
] as const
