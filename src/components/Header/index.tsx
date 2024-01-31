import { HeaderContainer } from './styles'
import logoSVG from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { totalQuantityItems } = useContext(CartContext)

  const navigate = useNavigate()

  function handleNavigateToCart() {
    navigate('/checkout')
  }
  return (
    <HeaderContainer>
      <img src={logoSVG} alt="" />
      <div>
        <span>
          <MapPin weight="fill" /> Porto Alegre, RS
        </span>
        <button
          onClick={handleNavigateToCart}
          disabled={!(totalQuantityItems > 0)}
          title={
            totalQuantityItems > 0
              ? 'Carrinho de compras'
              : 'Selecione um ou mais itens para acessar o carrinho'
          }
        >
          <ShoppingCart weight="fill" />
          {totalQuantityItems > 0 && <span>{totalQuantityItems}</span>}
        </button>
      </div>
    </HeaderContainer>
  )
}
