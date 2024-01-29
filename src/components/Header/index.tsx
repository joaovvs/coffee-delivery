import { CartButton, HeaderContainer } from './styles'
import logoSVG from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { totalQuantityItems } = useContext(CartContext)
  return (
    <HeaderContainer>
      <img src={logoSVG} alt="" />
      <div>
        <span>
          <MapPin weight="fill" /> Porto Alegre, RS
        </span>
        <CartButton>
          <ShoppingCart weight="fill" />
          <span>{totalQuantityItems}</span>
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
