import {
  PaymentSelectorContainer,
  PaymentsWrapper,
  TitleAndSubtitle,
} from './styles'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

export default function PaymentSelector() {
  return (
    <PaymentSelectorContainer>
      <header>
        <CurrencyDollar />
        <TitleAndSubtitle>
          <h3>Pagamento</h3>
          <p>Pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
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
    </PaymentSelectorContainer>
  )
}
