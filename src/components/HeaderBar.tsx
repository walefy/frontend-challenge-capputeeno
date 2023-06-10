import { styled } from 'styled-components';
import { InputWithSearchIcon } from './Input';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 160px;
`;

const Logo = styled.a`
  font-family: 'Saira Stencil One';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
  color: #5D5D6D;
  text-decoration: none;
`

export function HeaderBar() {
  return (
    <HeaderContainer>
      <Logo>capputeeno</Logo>
      <InputWithSearchIcon placeholder="Procurando por algo expecífico?" />
    </HeaderContainer>
  );
}