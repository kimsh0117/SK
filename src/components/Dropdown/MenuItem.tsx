import React from 'react'
import styled from 'styled-components'

interface MenuItemPropsType {
  onClick?: () => void
}

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-family: ${props => props.theme.fontFamily.sans[14]};
  font-size: ${props => props.theme.fontSize.sm[0]};
  padding: 0 15px;
  &:first-child {
    border-top-left-radius: ${props => props.theme.borderRadius.lg};
    border-top-right-radius: ${props => props.theme.borderRadius.lg};
  }
  &:last-child {
    border-bottom-left-radius: ${props => props.theme.borderRadius.lg};
    border-bottom-right-radius: ${props => props.theme.borderRadius.lg};
  }
  &:not(:last-child) {
    border-bottom: 2px solid ${props => props.theme.colors.disabled.background};
  }
  :hover {
    background-color: ${props => props.theme.colors.disabled.hover};
  }
`
const MenuItem: React.FC<MenuItemPropsType> = ({ onClick, children }) => {
  return <StyledItem onClick={onClick}>{children}</StyledItem>
}

export default MenuItem
