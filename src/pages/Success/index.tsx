import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderInfo, SuccessContainer, Tag, TextContainer } from './styles'
import illustrationSVG from '../../assets/illustration.svg'

export function Success() {
  return (
    <SuccessContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <main>
        <OrderInfo>
          <div>
            <Tag variant="purple">
              <MapPin weight="fill" />
            </Tag>
            <TextContainer>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre - RS</p>
            </TextContainer>
          </div>
          <div>
            <Tag variant="yellow">
              <Timer weight="fill" />
            </Tag>
            <TextContainer>
              <p>Previsão de Entrega</p>
              <strong>20 min - 30min</strong>
            </TextContainer>
          </div>
          <div>
            <Tag variant="yellowDark">
              <CurrencyDollar weight="fill" />
            </Tag>
            <TextContainer>
              <p>Pagamento na Entrega</p>
              <strong>Cartão de crédito</strong>
            </TextContainer>
          </div>
        </OrderInfo>
        <img
          src={illustrationSVG}
          alt="Homem de camisa amarela e calça verde numa lambreta roxa uma caixa na garupa com o símbolo do café"
        />
      </main>
    </SuccessContainer>
  )
}
