import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid ${props => props.theme.colors.white};
  border-right: 2px solid ${props => props.theme.colors.white};
  border-bottom: 2px solid ${props => props.theme.colors.white};
  border-left: 2px solid ${props => props.theme.colors.primary.default};
  background: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`

export default Spinner
