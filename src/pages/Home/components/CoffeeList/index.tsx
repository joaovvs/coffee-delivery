import { CoffeeListContainer } from './styles'
import { coffees } from '../../../../data/data'
import CoffeeCardCatalog from '../../../../components/CoffeeCardCatalog'

export default function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>

      <div>
        {coffees.map((coffee) => (
          <CoffeeCardCatalog key={coffee.name} coffee={coffee} />
        ))}
      </div>
    </CoffeeListContainer>
  )
}
