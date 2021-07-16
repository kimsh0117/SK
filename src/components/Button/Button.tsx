import React from 'react'
import styled from 'styled-components'
import Spinner from '../Spinner'

interface ButtonPropsType {
  loading?: boolean
  disabled?: boolean
}

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary.default};
  color: ${props => (props.disabled ? props.theme.colors.disabled.text : props.theme.colors.white)};
  font-family: ${props => props.theme.fontFamily.sans[14]};
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-size: ${props => props.theme.fontSize.sm[0]};
  height: 50px;
  width: 156px;
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
  }
`

const Button: React.FC<ButtonPropsType> = ({ loading, children, disabled }) => {
  return <StyledButton disabled={disabled}>{loading ? <Spinner /> : children}</StyledButton>
}

// loading -> disabled
// 로딩이면서 디세이블 될 수 있도록
// 풀위스랑 아닐 때 구분
// 스토리북에서 팀 프로바이더 제공
export default styled(Button)``
{
  /* <StyledButton disabled={loading || disabled}>{loading ? <Spinner /> : children}</StyledButton> */
}
