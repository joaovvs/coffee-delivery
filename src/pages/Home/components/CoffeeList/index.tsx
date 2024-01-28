import { CoffeeListContainer } from './styles'
import { coffees } from '../../../../data/data'
import CoffeeCard from '../../../../components/CoffeeCard'

export default function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>

      <div>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.name} coffee={coffee} />
        ))}
      </div>
    </CoffeeListContainer>
  )
}
