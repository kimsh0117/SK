import React from 'react'
import styled from 'styled-components'
import { Path, UseFormRegister } from 'react-hook-form'
import { IFormValue } from '../../page/Home'

interface InputPropsType {
  label: Path<IFormValue>
  register: UseFormRegister<IFormValue>
  placeholder?: string
  error?: any
  rules?: any
  // rules?: {
  //   required?: boolean
  //   min?: number
  //   max?: number
  //   minLength?: number
  //   maxLength?: number
  //   pattern?: RegExp
  // }
}
const StyledFormGroup = styled.div`
  position: relative;
  width: 100%;
`
const StyledInput = styled.input<{ error?: any }>`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 2px solid
    ${props => (props.error ? props.theme.colors.error : props.theme.colors.disabled.background)};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-family: ${props => props.theme.fontFamily.sans[14]};
  font-weight: ${props => props.theme.fontWeight.normal};
  padding: 0 15px;

  ::placeholder {
    font-size: ${props => props.theme.fontSize.sm[0]};
    font-weight: ${props => props.theme.fontWeight.normal};
    color: ${props => props.theme.colors.text.placeholder};
  }

  :focus {
    outline: none;
    border-color: ${props =>
      props.error ? props.theme.colors.error : props.theme.colors.primary.default};
    transition: border-color 0.3s ease-in-out;
  }
`
const StyledLabel = styled.label<{ error?: any }>`
  position: absolute;
  top: -6px;
  left: 12px;
  color: ${props => (props.error ? props.theme.colors.error : props.theme.colors.disabled.text)};
  font-size: ${props => props.theme.fontSize.xs[0]};
  font-family: ${props => props.theme.fontFamily.sans[15]};
  background-color: ${props => props.theme.colors.white};
  padding: 0 ${props => props.theme.spacing[1.5]};
  letter-spacing: 0.25px;

  ${StyledInput}:focus + & {
    color: ${props =>
      props.error ? props.theme.colors.error : props.theme.colors.primary.default};
    transition: color 0.3s ease-in-out;
  }
`

const Input: React.FC<InputPropsType> = ({ label, placeholder, error, register, rules }) => {
  return (
    <StyledFormGroup>
      <StyledInput
        placeholder={placeholder}
        error={error}
        {...register(label, rules)}
      ></StyledInput>
      <StyledLabel error={error}>{label}</StyledLabel>
    </StyledFormGroup>
  )
}

export default styled(Input)``
