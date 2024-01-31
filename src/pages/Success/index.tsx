import { useContext } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderInfo, SuccessContainer, Tag, TextContainer } from './styles'
import illustrationSVG from '../../assets/illustration.svg'
import { CartContext } from '../../contexts/CartContext'
import { NavLink } from 'react-router-dom'
import { AcceptedPayments } from '../../data/data'

export function Success() {
  const { orderData } = useContext(CartContext)

  if (orderData.address) {
    return (
      <SuccessContainer>
        <header>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>
        <main>
          <OrderInfo>
            <div>
              <Tag $variant="purple">
                <MapPin weight="fill" />
              </Tag>
              <TextContainer>
                <p>
                  Entrega em{' '}
                  <strong>{`Rua ${orderData.address.street}, ${orderData.address?.number}`}</strong>{' '}
                  {orderData.address?.complement}
                </p>
                <p>{`${orderData.address?.district} - ${orderData.address.city} - ${orderData.address.country.toLocaleUpperCase()}`}</p>
              </TextContainer>
            </div>
            <div>
              <Tag $variant="yellow">
                <Timer weight="fill" />
              </Tag>
              <TextContainer>
                <p>Previsão de Entrega</p>
                <strong>20 min - 30min</strong>
              </TextContainer>
            </div>
            <div>
              <Tag $variant="yellowDark">
                <CurrencyDollar weight="fill" />
              </Tag>
              <TextContainer>
                <p>Pagamento na Entrega</p>
                <strong>
                  {
                    AcceptedPayments.find(
                      (elem) => elem.value === orderData.paymentMode,
                    )?.label
                  }
                </strong>
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
  } else {
    return (
      <SuccessContainer>
        <h1>Não existem pedidos</h1>
        <NavLink to="/">Voltar para home</NavLink>
      </SuccessContainer>
    )
  }
}
