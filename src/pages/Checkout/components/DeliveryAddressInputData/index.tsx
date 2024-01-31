import { MapPinLine, Warning } from 'phosphor-react'
import {
  DeliveryAddressInputDataContainer,
  TitleAndSubtitle,
  NumberAndComplement,
  DistrictCityAndCountry,
  ErrorMessage,
} from './styled'
import { InputStyled } from '../../../../components/InputStyled'
import { useFormContext } from 'react-hook-form'

export function DeliveryAddressInputData() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <DeliveryAddressInputDataContainer $hasError={!!errors.address}>
      <header>
        <MapPinLine />
        <TitleAndSubtitle>
          <h3>Endereço de entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </TitleAndSubtitle>
      </header>
      <div>
        <InputStyled
          errorMessage={
            errors.address &&
            'zipCode' in errors.address &&
            errors.address.zipCode
              ? String(errors.address.zipCode.message)
              : null
          }
        >
          <input
            id="zipCode"
            placeholder="CEP"
            {...register('address.zipCode')}
          />
        </InputStyled>
        <InputStyled
          errorMessage={
            errors.address &&
            'street' in errors.address &&
            errors.address.street
              ? String(errors.address.street.message)
              : null
          }
        >
          <input
            id="street"
            placeholder="Rua"
            {...register('address.street')}
          />
        </InputStyled>
        <NumberAndComplement>
          <InputStyled
            errorMessage={
              errors.address &&
              'number' in errors.address &&
              errors.address.number
                ? String(errors.address.number.message)
                : null
            }
          >
            <input
              id="number"
              placeholder="Número"
              {...register('address.number')}
            />
          </InputStyled>
          <InputStyled $optional>
            <input
              id="complement"
              placeholder="Complemento"
              {...register('address.complement')}
            />
          </InputStyled>
        </NumberAndComplement>
        <DistrictCityAndCountry>
          <InputStyled
            errorMessage={
              errors.address &&
              'district' in errors.address &&
              errors.address.district
                ? String(errors.address.district.message)
                : null
            }
          >
            <input
              id="district"
              placeholder="Bairro"
              {...register('address.district')}
            />
          </InputStyled>
          <InputStyled
            errorMessage={
              errors.address && 'city' in errors.address && errors.address.city
                ? String(errors.address.city.message)
                : null
            }
          >
            <input
              id="city"
              placeholder="Cidade"
              {...register('address.city')}
            />
          </InputStyled>
          <InputStyled
            errorMessage={
              errors.address &&
              'country' in errors.address &&
              errors.address.country
                ? String(errors.address.country.message)
                : null
            }
          >
            <input
              id="country"
              placeholder="UF"
              {...register('address.country')}
              autoComplete="country"
            />{' '}
          </InputStyled>
        </DistrictCityAndCountry>
      </div>
      {errors.address && (
        <ErrorMessage title={'Preencha os campos corretamente!'}>
          <Warning />
        </ErrorMessage>
      )}
    </DeliveryAddressInputDataContainer>
  )
}
