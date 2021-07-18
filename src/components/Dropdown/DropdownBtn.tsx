import React from 'react'
import styled from 'styled-components'
import arrow from '../../assets/image/down_arrow.png'

interface DropdownPropsType {
  label?: string
  error?: any
  onClick?: () => void
  isListOpen: boolean
  selected?: string | null
}

const StyledButton = styled.button<{ isListOpen: boolean; error?: any }>`
  position: relative;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 2px solid
    ${props =>
      props.isListOpen
        ? props.theme.colors.primary.default
        : props.error
        ? props.theme.colors.error
        : props.theme.colors.disabled.background};
  transition: border-color 0.3s ease-in-out;
  display: flex;
  justify-content: ${props => (props.isListOpen ? 'flex-end' : 'space-between')};
  align-items: center;
  padding: 0 0.938rem;
  font-family: ${props => props.theme.fontFamily.sans[14]};
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSize.sm[0]};
`
const StyledLabel = styled.div<{ isListOpen: boolean; error?: any }>`
  position: ${props => (props.isListOpen ? 'absolute' : 'static')};
  top: -9px;
  left: 10px;
  background-color: inherit;
  padding: 0 ${props => props.theme.spacing[1.5]};
  font-size: ${props => (props.isListOpen ? props.theme.fontSize.xs[0] : 'inherit')};
  /* transition: font-size 0.3s; */
  color: ${props =>
    props.isListOpen
      ? props.theme.colors.primary.default
      : props.error
      ? props.theme.colors.error
      : '#353238'};
`
// 이놈만 따로 익스포트 해서 사용하는건 괜찮은 방법일까?
const StyledArrow = styled.img<{ isListOpen: boolean }>`
  transform: ${props => (props.isListOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  /* transition: transform 0.3s linear; */
`

const DropdownBtn: React.FC<DropdownPropsType> = ({
  label,
  error,
  onClick,
  isListOpen,
  selected,
}) => (
  <StyledButton onClick={onClick} isListOpen={isListOpen} error={error}>
    <StyledLabel isListOpen={isListOpen} error={error}>
      {selected ? selected : label}
    </StyledLabel>
    <StyledArrow src={arrow} isListOpen={isListOpen}></StyledArrow>
  </StyledButton>
)

export default styled(DropdownBtn)``
