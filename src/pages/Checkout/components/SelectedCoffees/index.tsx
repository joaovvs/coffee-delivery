import { useContext, ReactNode } from 'react'
import CoffeeCardCart from '../../../../components/CoffeeCardCart'
import {
  SelectedCoffeesContainer,
  Divider,
  Value,
  ValuesWrapper,
} from './styles'
import { coffees } from '../../../../data/data'
import { CartContext } from '../../../../contexts/CartContext'

interface SelectedCoffeesProps {
  children: ReactNode
}

export default function SelectedCoffees({ children }: SelectedCoffeesProps) {
  const { userCart, totalOrder, deliveryFee, totalItemsValue } =
    useContext(CartContext)
  return (
    <SelectedCoffeesContainer>
      {userCart.map((item) => {
        const selectedCoffee = coffees.find(
          (coffee) => coffee.id === item.coffeeId,
        )
        return (
          <div key={item.coffeeId}>
            {selectedCoffee && (
              <>
                <CoffeeCardCart
                  coffee={selectedCoffee}
                  quantity={item.quantity}
                />
                <Divider />
              </>
            )}
          </div>
        )
      })}
      <ValuesWrapper>
        <Value>
          <span>Total de itens</span>
          <span>
            R${' '}
            {totalItemsValue.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </span>
        </Value>
        <Value>
          <span>Entrega</span>
          <span>
            R${' '}
            {deliveryFee.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </span>
        </Value>
        <Value>
          <span>Total</span>
          <span>
            R${' '}
            {totalOrder.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </span>
        </Value>
      </ValuesWrapper>
      {children}
    </SelectedCoffeesContainer>
  )
}
