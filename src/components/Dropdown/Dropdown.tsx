import React, { useState } from 'react'
import styled from 'styled-components'
import arrow from '../../assets/image/down_arrow.png'

interface DropdownPropsType {
  label?: string
  list: string[]
  error?: boolean
}

const StyledContainer = styled.div`
  width: 100%;
  position: relative;
`
const StyledHeader = styled.button<{ isListOpen: boolean; error?: boolean }>`
  position: relative;
  display: block;
  height: 50px;
  width: 300px;
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
const StyledLabel = styled.div<{ isListOpen: boolean; error?: boolean }>`
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
const StyledArrow = styled.img<{ isListOpen: boolean }>`
  transform: ${props => (props.isListOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  /* transition: transform 0.3s linear; */
`
const StyledErrorMessage = styled.div`
  padding: 0 ${props => props.theme.spacing[6]};
  color: ${props => props.theme.colors.error};
  margin-top: ${props => props.theme.spacing[2]};
  font-family: ${props => props.theme.fontFamily.sans[14]};
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSize.xs[0]};
`

const StyledList = styled.ul`
  position: absolute;
  top: 60px;
  z-index: 999;
  padding: 0;
  margin: 0;
  width: 297px;
  list-style: none;
  border: 2px solid ${props => props.theme.colors.disabled.background};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  background-color: ${props => props.theme.colors.white};
`
const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-family: ${props => props.theme.fontFamily.sans[14]};
  font-size: ${props => props.theme.fontSize.sm[0]};
  &:not(:last-child) {
    border-bottom: 2px solid ${props => props.theme.colors.disabled.background};
  }
  :hover {
    background-color: ${props => props.theme.colors.disabled.hover};
  }
`

const Dropdown: React.FC<DropdownPropsType> = ({ label, error, list }) => {
  const [isListOpen, OpenList] = useState(false)
  const toggleDropdown = (): void => {
    OpenList(!isListOpen)
  }
  const [, setItem] = useState(label)
  const selectItem = (item: string): void => {
    setItem(item)
    OpenList(!isListOpen)
  }
  return (
    <StyledContainer>
      <StyledHeader onClick={toggleDropdown} isListOpen={isListOpen} error={error}>
        <StyledLabel isListOpen={isListOpen} error={error}>
          {label}
        </StyledLabel>
        <StyledArrow src={arrow} isListOpen={isListOpen}></StyledArrow>
      </StyledHeader>
      {error && <StyledErrorMessage>Обязательное поле</StyledErrorMessage>}
      {isListOpen && (
        <StyledList>
          {list.map((item, index) => (
            <StyledItem
              key={index}
              onClick={e => {
                e.stopPropagation()
                selectItem(item)
              }}
            >
              {item}
            </StyledItem>
          ))}
        </StyledList>
      )}
    </StyledContainer>
  )
}

export default styled(Dropdown)``
