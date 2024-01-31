import { CheckoutFormContainer, ConfirmButton } from './styles'

import PaymentSelector from './components/PaymentSelector'
import SelectedCoffees from './components/SelectedCoffees'
import { DeliveryAddressInputData } from './components/DeliveryAddressInputData'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const CEP_REGEX = /\d{5}-\d{3}/

const productsSchema = zod.object({
  coffeeId: zod.number(),
  quantity: zod.number(),
  price: zod.number(),
  totalPerItem: zod.number(),
})

const addressSchema = zod.object({
  zipCode: zod
    .string({ required_error: 'Campo obrigatório' })
    .regex(CEP_REGEX, 'Informe um CEP no formato 00000-000'),
  street: zod
    .string()
    .min(3, 'O endereço deve conter no mínimo 3 caracteres')
    .max(100, 'O endereço deve conter no máximo 100 caracteres'),
  number: zod.string().min(1, 'Campo obrigatório'),
  complement: zod.string().optional(),
  district: zod.string().min(3, 'Campo deve ter no mínimo 3 caracteres'),
  city: zod.string().min(3, 'Campo deve conter no mínimo 3 caracteres'),
  country: zod.string().min(2, 'Campo deve conter no mínimo 2 caracteres'),
})

const paymentModes = {
  credit: 'credit',
  debit: 'debit',
  cash: 'cash',
} as const

const newOrderFormSchema = zod.object({
  address: addressSchema,
  paymentMode: zod.nativeEnum(paymentModes, {
    errorMap: (issue) => {
      if (issue.code === 'invalid_enum_value') {
        return { message: 'Selecione uma das opções' }
      } else return { message: 'Campo inválido' }
    },
  }),
  products: zod
    .array(productsSchema)
    .min(1, 'Não existem produtos no carrinho'),
})

export type newOrderFormType = zod.infer<typeof newOrderFormSchema>

export function Checkout() {
  const newOrderForm = useForm<newOrderFormType>({
    resolver: zodResolver(newOrderFormSchema),
    defaultValues: {
      address: {
        zipCode: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        country: '',
      },
      paymentMode: undefined,
    },
  })

  const navigate = useNavigate()

  const { createOrder } = useContext(CartContext)

  const {
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = newOrderForm

  function handleOrderCartItems(data: newOrderFormType) {
    try {
      newOrderFormSchema.parse(data)
      createOrder(data)
      navigate('/success')
      reset()
    } catch (error) {
      if (error instanceof zod.ZodError) {
        return console.error('submit error', error.errors)
      } else {
        return console.log(error)
      }
    }
  }

  const selectedOption = watch('paymentMode')

  console.log('OPÇÃO SELECIONADA', selectedOption)
  console.log('Erros', errors)

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
