import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  position: absolute;
  top: 60px;
  z-index: 999;
  padding: 0;
  margin: 0;
  margin-top: 5px;
  /* width: 297px; */
  /* width: 100%; */
  box-sizing: border-box;
  list-style: none;
  border: 2px solid ${props => props.theme.colors.disabled.background};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.boxShadow.DEFAULT};
  background-color: ${props => props.theme.colors.white};
`

const Menu: React.FC = ({ children }) => {
  return <StyledList>{children}</StyledList>
}

export default Menu
