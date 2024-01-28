import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react'
import { coffees } from '../../data/data'
import {
  Buy,
  CartButton,
  CartCard,
  CatalogCard,
  Counter,
  TagWrapper,
} from './styled'

interface CoffeeCardProps {
  variant?: 'catalog' | 'cart'
  coffee: (typeof coffees)[number]
}

export default function CoffeeCard({
  variant = 'catalog',
  coffee,
}: CoffeeCardProps) {
  return (
    <>
      {variant === 'catalog' && (
        <CatalogCard>
          <img src={coffee.image} alt={`foto do café ${coffee.name}`} />
          <TagWrapper>
            {variant === 'catalog' &&
              coffee.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </TagWrapper>
          <h2>{coffee.name}</h2>
          <p>{coffee.description}</p>

          <Buy>
            <span>
              R$
              <span>
                {coffee.price.toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </span>
            <div>
              <Counter>
                <button>
                  <Minus />
                </button>
                <input type="number" step={1} defaultValue={0}></input>
                <button>
                  <Plus />
                </button>
              </Counter>
              <CartButton name="addCart">
                <ShoppingCart weight="fill" />
              </CartButton>
            </div>
          </Buy>
        </CatalogCard>
      )}

      {variant === 'cart' && (
        <CartCard>
          <img src={coffee.image} alt={`foto do café ${coffee.name}`} />
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          <button>
            <Trash /> Remover
          </button>
        </CartCard>
      )}
    </>
  )
}
