import { useContext, ReactNode, useEffect } from 'react'
import CoffeeCardCart from '../../../../components/CoffeeCardCart'
import {
  SelectedCoffeesContainer,
  Divider,
  Value,
  ValuesWrapper,
  ErrorMessage,
} from './styles'
import { coffees } from '../../../../data/data'
import { CartContext } from '../../../../contexts/CartContext'
import { useFormContext } from 'react-hook-form'
import { Warning } from 'phosphor-react'

interface SelectedCoffeesProps {
  children: ReactNode
}

export default function SelectedCoffees({ children }: SelectedCoffeesProps) {
  const { userCart, totalOrder, deliveryFee, totalItemsValue } =
    useContext(CartContext)

  const {
    setValue,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    setValue('products', userCart, { shouldValidate: true })
  }, [setValue, userCart])

  return (
    <SelectedCoffeesContainer $hasError={!!errors.products}>
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

      {errors.products && (
        <ErrorMessage title={String(errors.products.message)}>
          <Warning />
        </ErrorMessage>
      )}
    </SelectedCoffeesContainer>
  )
}
