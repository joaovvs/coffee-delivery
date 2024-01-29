import { Minus, Plus, Trash } from 'phosphor-react'
import { coffees } from '../../data/data'
import {
  Actions,
  CartCard,
  Counter,
  Details,
  Info,
  RemoveButton,
} from './styled'
import { useContext, useEffect, useState } from 'react'
import { CartContext, CartItem } from '../../contexts/CartContext'

interface CoffeeCardProps {
  coffee: (typeof coffees)[number]
  quantity?: number
}

export default function CoffeeCardCart({
  coffee,
  quantity = 1,
}: CoffeeCardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(quantity)

  const { removeCoffeeFromCart, updateCartItem } = useContext(CartContext)

  function handleIncrementQuantity() {
    setCoffeeQuantity((prevState) => prevState + 1)
  }

  function handleDecrementQuantity() {
    if (coffeeQuantity > 0) {
      setCoffeeQuantity((prevState) => prevState - 1)
    }
  }

  function handleRemoveFromCart() {
    removeCoffeeFromCart(coffee.id)
  }

  function cartItemUpdate(updatedItem: CartItem) {
    updateCartItem(updatedItem)
  }

  useEffect(() => {
    const newQuantity = coffeeQuantity

    const updatedItem = {
      coffeeId: coffee.id,
      price: coffee.price,
      quantity: newQuantity,
      totalPerItem: coffee.price * coffeeQuantity,
    }
    cartItemUpdate(updatedItem)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coffee, coffeeQuantity])
  return (
    <CartCard>
      <Info>
        <img src={coffee.image} alt={`foto do café ${coffee.name}`} />
        <Details>
          <span>{coffee.name}</span>
          <Actions>
            <Counter>
              <button type="button" onClick={handleDecrementQuantity}>
                <Minus />
              </button>
              <input
                type="number"
                step={1}
                value={coffeeQuantity}
                readOnly
              ></input>
              <button onClick={handleIncrementQuantity}>
                <Plus />
              </button>
            </Counter>

            <RemoveButton onClick={handleRemoveFromCart}>
              <Trash /> Remover
            </RemoveButton>
          </Actions>
        </Details>
      </Info>
      <span>
        R${' '}
        {(coffee.price * coffeeQuantity).toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        })}
      </span>
    </CartCard>
  )
}
