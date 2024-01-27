import { CartButton, HeaderContainer } from './styles'
import logoSVG from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSVG} alt="" />
      <div>
        <span>
          <MapPin weight="fill" /> Porto Alegre, RS
        </span>
        <CartButton>
          <ShoppingCart weight="fill" />
          <span>3</span>
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
