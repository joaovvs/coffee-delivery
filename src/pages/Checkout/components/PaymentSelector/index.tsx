import {
  ErrorMessage,
  PaymentContainer,
  PaymentsWrapper,
  SelectButton,
  TitleAndSubtitle,
} from './styles'
import { CurrencyDollar, Warning } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { AcceptedPayments } from '../../../../data/data'

export default function PaymentSelector() {
  const {
    setValue,
    watch,
    register,
    formState: { errors },
  } = useFormContext()

  const selectedOption = watch('paymentMode')

  function handleButtonClick(value: string) {
    setValue('paymentMode', value, { shouldValidate: true })
  }

  return (
    <PaymentContainer $hasError={!!errors.paymentMode}>
      <header>
        <CurrencyDollar />
        <TitleAndSubtitle>
          <h3>Pagamento</h3>
          <p>Pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </TitleAndSubtitle>
      </header>
      <PaymentsWrapper>
        {AcceptedPayments.map((option) => (
          <SelectButton
            key={option.value}
            type="button"
            $isSelected={selectedOption === option.value}
            onClick={() => {
              handleButtonClick(option.value)
            }}
          >
            {option.icon}
            {option.label}
          </SelectButton>
        ))}

        <input type="hidden" {...register('paymentMode')} required />
        {errors.paymentMode && (
          <ErrorMessage title={String(errors.paymentMode.message)}>
            <Warning />
          </ErrorMessage>
        )}
      </PaymentsWrapper>
    </PaymentContainer>
  )
}
