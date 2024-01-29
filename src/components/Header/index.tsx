import { HeaderContainer } from './styles'
import logoSVG from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { totalQuantityItems } = useContext(CartContext)
  return (
    <HeaderContainer>
      <img src={logoSVG} alt="" />
      <div>
        <span>
          <MapPin weight="fill" /> Porto Alegre, RS
        </span>
        <NavLink to={'/checkout'}>
          <ShoppingCart weight="fill" />
          <span>{totalQuantityItems}</span>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
