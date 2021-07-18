import React from 'react'
import styled from 'styled-components'

const StyledErrorMessage = styled.div`
  font-family: ${props => props.theme.fontFamily.sans[15]};
  font-weight: ${props => props.theme.fontWeight.normal};
  padding: 0 ${props => props.theme.spacing[4]};
  font-size: ${props => props.theme.fontSize.xs[0]};
  color: ${props => props.theme.colors.error};
  margin-top: ${props => props.theme.spacing[2]};
  overflow: hidden;
  text-overflow: ellipsis;
`

const ErrorMessage: React.FC = ({ children }) => <StyledErrorMessage>{children}</StyledErrorMessage>

export default styled(ErrorMessage)``
