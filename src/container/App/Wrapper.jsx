import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: ${props => props.transform || 'none'};
`

export const LogoWrapper = styled.img`
  width: 250px;
`