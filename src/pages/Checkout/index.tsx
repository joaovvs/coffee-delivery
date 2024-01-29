import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CheckoutContainer,
  ConfirmButton,
  Divider,
  FormContainer,
  PaymentSelector,
  PaymentsWrapper,
  SelectedCoffees,
  TitleAndSubtitle,
  Value,
  ValuesWrapper,
} from './styles'
import { coffees } from '../../data/data'
import { Input } from '../../components/Input'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CoffeeCardCart from '../../components/CoffeeCardCart'
import { NavLink } from 'react-router-dom'

export function Checkout() {
  const { userCart, totalPurchase, deliveryFee, totalItemsValue } =
    useContext(CartContext)

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <FormContainer>
          <header>
            <MapPinLine />
            <TitleAndSubtitle>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </TitleAndSubtitle>
          </header>
          <form>
            <Input placeholder="CEP" />
            <Input placeholder="Rua" />
            <div>
              <Input placeholder="Número" />
              <Input placeholder="Complemento" optional={true} />
            </div>
            <div>
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" />
            </div>
          </form>
        </FormContainer>

        <PaymentSelector>
          <header>
            <CurrencyDollar />
            <TitleAndSubtitle>
              <h3>Pagamento</h3>
              <p>
                Pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </TitleAndSubtitle>
          </header>
          <PaymentsWrapper>
            <button type="button">
              <CreditCard />
              Cartão de crédito
            </button>
            <button type="button">
              <Bank />
              Cartão de débito
            </button>
            <button type="button">
              <Money />
              Dinheiro
            </button>
          </PaymentsWrapper>
        </PaymentSelector>
      </div>
      <div>
        <h2>Café selecionados</h2>
        <SelectedCoffees>
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
                {totalPurchase.toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </Value>
          </ValuesWrapper>
          <ConfirmButton>Confirmar Pedido</ConfirmButton>
          <NavLink to={'/'}>Voltar</NavLink>
        </SelectedCoffees>
      </div>
    </CheckoutContainer>
  )
}
