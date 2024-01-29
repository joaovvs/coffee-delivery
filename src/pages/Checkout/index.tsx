import { CheckoutFormContainer, ConfirmButton } from './styles'

import PaymentSelector from './components/PaymentSelector'
import SelectedCoffees from './components/SelectedCoffees'
import { DeliveryAddressInputData } from './components/DeliveryAddressInputData'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NavLink } from 'react-router-dom'

const CEP_REGEX = /\d{5}-\d{3}/
const newOrderFormSchema = zod.object({
  cep: zod
    .string({ required_error: 'Campo obrigatório' })
    .regex(CEP_REGEX, 'Informe um CEP no formato 00000-000'),
  street: zod
    .string()
    .min(3, 'O endereço deve conter no mínimo 3 caracteres')
    .max(100, 'O endereço deve conter no máximo 100 caracteres'),
  number: zod.string(),
  complement: zod.string().optional(),
  district: zod.string(),
  city: zod.string().min(3, 'Campo obrigatório'),
  country: zod.string().min(2, 'Campo obrigatório'),
})

type NewOrderFormData = zod.infer<typeof newOrderFormSchema>

export function Checkout() {
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      country: '',
    },
  })

  const { handleSubmit } = newOrderForm

  function handleOrderCartItems(data: NewOrderFormData) {
    console.log('entrou aqui')
    try {
      newOrderFormSchema.parse(data)
    } catch (error) {
      if (error instanceof zod.ZodError) {
        console.error(error.errors)
      } else {
        console.log(error)
      }
    }
    console.log(data)
  }

  return (
    <CheckoutFormContainer onSubmit={handleSubmit(handleOrderCartItems)}>
      <FormProvider {...newOrderForm}>
        <div>
          <h2>Complete seu pedido</h2>
          <DeliveryAddressInputData />

          <PaymentSelector />
        </div>
        <div>
          <h2>Café selecionados</h2>
          <SelectedCoffees>
            <>
              <ConfirmButton>Confirmar Pedido</ConfirmButton>
              <NavLink to={'/'}>Voltar</NavLink>
            </>
          </SelectedCoffees>
        </div>
      </FormProvider>
    </CheckoutFormContainer>
  )
}
