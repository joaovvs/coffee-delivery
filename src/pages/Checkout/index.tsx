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
import CoffeeCard from '../../components/CoffeeCard'
import { coffees } from '../../data/data'
import { Input } from '../../components/Input'

export function Checkout() {
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
          {/* add map for cart items */}
          <div>
            <CoffeeCard variant="cart" coffee={coffees[0]} />
            <Divider />
            <CoffeeCard variant="cart" coffee={coffees[1]} />
            <Divider />
          </div>
          <ValuesWrapper>
            <Value>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </Value>
            <Value>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </Value>
            <Value>
              <span>Total</span>
              <span>R$ 33,20</span>
            </Value>
          </ValuesWrapper>
          <ConfirmButton>Confirmar Pedido</ConfirmButton>
        </SelectedCoffees>
      </div>
    </CheckoutContainer>
  )
}
