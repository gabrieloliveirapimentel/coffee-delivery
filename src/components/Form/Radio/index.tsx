import { forwardRef } from 'react'

import { Container } from './styles'
import { InputRadioProps } from '../../../@types/types'

export const Radio = forwardRef(function Radio(
  { children, isSelected, ...rest }: InputRadioProps) {
  return (
    <Container data-state={isSelected}>
      <input type="radio" {...rest} />
      {children}
    </Container>
  )
})