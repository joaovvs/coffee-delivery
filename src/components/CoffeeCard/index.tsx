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
import { useContext, useState } from 'react'
import { CartContext, CartItem } from '../../contexts/CartContext'

interface CoffeeCardProps {
  variant?: 'catalog' | 'cart'
  coffee: (typeof coffees)[number]
}

export default function CoffeeCard({
  variant = 'catalog',
  coffee,
}: CoffeeCardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  const { addCoffeeToCart } = useContext(CartContext)

  function handleIncrementQuantity() {
    setCoffeeQuantity((prevState) => prevState + 1)
  }

  function handleDecrementQuantity() {
    if (coffeeQuantity > 0) {
      setCoffeeQuantity((prevState) => prevState - 1)
    }
  }

  function handleAddToCart() {
    if (coffeeQuantity > 0) {
      const newItem: CartItem = {
        coffeeId: coffee.id,
        price: coffee.price,
        quantity: coffeeQuantity,
        totalPerItem: coffee.price * coffeeQuantity,
      }
      addCoffeeToCart(newItem)
      setCoffeeQuantity(1)
      alert('Item adicionado ao carrinho!')
    }
  }

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
                <button type="button" onClick={handleDecrementQuantity}>
                  <Minus />
                </button>
                <input
                  type="number"
                  name="quantityPicker"
                  step={1}
                  value={coffeeQuantity}
                  readOnly={true}
                />
                <button onClick={handleIncrementQuantity}>
                  <Plus />
                </button>
              </Counter>
              <CartButton name="addCart" onClick={handleAddToCart}>
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
                  <button type="button" onClick={handleDecrementQuantity}>
                    <Minus />
                  </button>
                  <input type="number" step={1} value={coffeeQuantity}></input>
                  <button onClick={handleIncrementQuantity}>
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
