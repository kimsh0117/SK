import React from 'react'
import styled from 'styled-components'
import Spinner from '../Spinner'

interface ButtonPropsType {
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
}

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary.default};
  color: ${props => (props.disabled ? props.theme.colors.disabled.text : props.theme.colors.white)};
  font-family: ${props => props.theme.fontFamily.sans[14]};
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-size: ${props => props.theme.fontSize.sm[0]};
  height: 50px;
  width: 156px; // 임시
  width: 100%;
  border: ${props => props.theme.borderWidth[0]};
  border-radius: ${props => props.theme.borderRadius.lg};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.colors.primary.hover};
  }

  &:active {
    background-color: ${props => props.theme.colors.primary.active};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.disabled.background};
    cursor: not-allowed;
  }
`

const Button: React.FC<ButtonPropsType> = ({ loading, children, disabled, onClick }) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {loading ? <Spinner /> : children}
  </StyledButton>
)

export default styled(Button)``
{
  /* <StyledButton disabled={loading || disabled}>{loading ? <Spinner /> : children}</StyledButton> */
}
