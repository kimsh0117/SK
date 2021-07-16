import React from 'react'
import styled from 'styled-components'

interface InputPropsType {
  label?: string
  placeholder?: string
  error?: boolean
}

const StyledFormGroup = styled.div`
  position: relative;
  display: block;
`
const StyledInput = styled.input<{ error?: boolean }>`
  height: 50px;
  border: 2px solid
    ${props => (props.error ? props.theme.colors.error : props.theme.colors.disabled.background)};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-family: ${props => props.theme.fontFamily.sans[14]};
  font-weight: ${props => props.theme.fontWeight.normal};
  padding: 0 ${props => props.theme.spacing[3.5]};

  ::placeholder {
    font-size: ${props => props.theme.fontSize.sm[0]};
    color: ${props => props.theme.colors.text.placeholder};
  }

  :focus {
    outline: none;
    border-color: ${props =>
      props.error ? props.theme.colors.error : props.theme.colors.primary.default};
    transition: border-color 0.3s ease-in-out;
  }
`
const StyledLabel = styled.label<{ error?: boolean }>`
  position: absolute;
  top: -6px;
  left: 10px;
  color: ${props => (props.error ? props.theme.colors.error : props.theme.colors.disabled.text)};
  font-size: ${props => props.theme.fontSize.xs[0]};
  font-family: ${props => props.theme.fontFamily.sans[15]};
  background-color: ${props => props.theme.colors.white};
  padding: 0 ${props => props.theme.spacing[1.5]};

  ${StyledInput}:focus + & {
    color: ${props =>
      props.error ? props.theme.colors.error : props.theme.colors.primary.default};
    transition: color 0.3s ease-in-out;
  }
`
const StyledErrorMessage = styled.div`
  font-family: ${props => props.theme.fontFamily.sans[15]};
  font-weight: ${props => props.theme.fontWeight.normal};
  padding: 0 ${props => props.theme.spacing[4]};
  font-size: ${props => props.theme.fontSize.xs[0]};
  color: ${props => props.theme.colors.error};
  margin-top: ${props => props.theme.spacing[2]};
`

const Input: React.FC<InputPropsType> = ({ label, placeholder, error }) => {
  return (
    <StyledFormGroup>
      {error ? (
        <StyledInput placeholder={placeholder} error></StyledInput>
      ) : (
        <StyledInput placeholder={placeholder}></StyledInput>
      )}
      {error ? <StyledLabel error>{label}</StyledLabel> : <StyledLabel>{label}</StyledLabel>}
      {error && <StyledErrorMessage>Обязательное поле</StyledErrorMessage>}
    </StyledFormGroup>
  )
}

export default styled(Input)``

// error 로 분기문이 정녕 이 방법 밖에 없는 것인가.
