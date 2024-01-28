import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react'
import { coffees } from '../../data/data'
import {
  Actions,
  Buy,
  CartButton,
  CartCard,
  CatalogCard,
  Counter,
  Details,
  Info,
  RemoveButton,
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
            <Actions>
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
            </Actions>
          </Buy>
        </CatalogCard>
      )}

      {variant === 'cart' && (
        <CartCard>
          <Info>
            <img src={coffee.image} alt={`foto do café ${coffee.name}`} />
            <Details>
              {coffee.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <Actions>
                <Counter>
                  <button>
                    <Minus />
                  </button>
                  <input type="number" step={1} defaultValue={0}></input>
                  <button>
                    <Plus />
                  </button>
                </Counter>

                <RemoveButton>
                  <Trash /> Remover
                </RemoveButton>
              </Actions>
            </Details>
          </Info>
          <span>
            R${' '}
            {coffee.price.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </span>
        </CartCard>
      )}
    </>
  )
}
