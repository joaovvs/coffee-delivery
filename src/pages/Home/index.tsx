import { Info, ItemIcon, Table } from './styles'
import coffeeImg from '../../assets/Imagem.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <div>
      <Info>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <Table>
            <tr>
              <td>
                <ItemIcon variant="yellowDark">
                  <ShoppingCart weight="fill" />
                </ItemIcon>
                <span>Compra simples e segura</span>
              </td>

              <td>
                <ItemIcon variant="text">
                  <Package weight="fill" />
                </ItemIcon>
                <span> Embalagem mantém o café intacto</span>
              </td>
            </tr>

            <tr>
              <td>
                <ItemIcon variant="yellow">
                  <Timer weight="fill" />
                </ItemIcon>
                <span>Entrega rápida e rastreada</span>
              </td>

              <td>
                <ItemIcon variant="purple">
                  <Coffee weight="fill" />
                </ItemIcon>
                <span>O café chega fresquinho até você</span>
              </td>
            </tr>
          </Table>
        </div>

        <img
          src={coffeeImg}
          alt="Imagem de copo de café descartável com grãos de café"
        />
      </Info>
    </div>
  )
}
