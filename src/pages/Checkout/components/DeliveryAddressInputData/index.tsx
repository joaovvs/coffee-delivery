import { MapPinLine } from 'phosphor-react'
import {
  DeliveryAddressInputDataContainer,
  TitleAndSubtitle,
  NumberAndComplement,
  DistrictCityAndCountry,
} from './styled'
import { InputStyled } from '../../../../components/InputStyled'
import { useFormContext } from 'react-hook-form'

export function DeliveryAddressInputData() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <DeliveryAddressInputDataContainer>
      <header>
        <MapPinLine />
        <TitleAndSubtitle>
          <h3>Endereço de entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </TitleAndSubtitle>
      </header>
      <div>
        <InputStyled
          errorMessage={errors.cep ? String(errors.cep.message) : null}
        >
          <input id="cep" placeholder="CEP" {...register('cep')} />
        </InputStyled>
        <InputStyled
          errorMessage={errors.street ? String(errors.street.message) : null}
        >
          <input id="street" placeholder="Rua" {...register('street')} />
        </InputStyled>
        <NumberAndComplement>
          <InputStyled>
            <input id="number" placeholder="Número" {...register('number')} />
          </InputStyled>
          <InputStyled $optional>
            <input
              id="complement"
              placeholder="Complemento"
              {...register('complement')}
            />
          </InputStyled>
        </NumberAndComplement>
        <DistrictCityAndCountry>
          <InputStyled>
            <input
              id="district"
              placeholder="Bairro"
              {...register('district')}
            />
          </InputStyled>
          <InputStyled
            errorMessage={errors.city ? String(errors.city.message) : null}
          >
            <input id="city" placeholder="Cidade" {...register('city')} />
          </InputStyled>
          <InputStyled
            errorMessage={
              errors.country ? String(errors.country.message) : null
            }
          >
            <input
              id="country"
              placeholder="UF"
              {...register('country')}
              autoComplete="country"
            />{' '}
          </InputStyled>
        </DistrictCityAndCountry>
      </div>
    </DeliveryAddressInputDataContainer>
  )
}
