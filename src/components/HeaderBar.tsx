import { styled } from 'styled-components';
import { InputWithSearchIcon } from './Input';
import { ShoppingBagIcon } from './IconsComponets';

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

const InputAndBagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 24px;
`;

const BagButton = styled.button`
  line-height: 0;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DotCount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: var(--delete-color);
  top: 80%;
  right: -30%;
  padding: 5px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 100%;

  font-family: Saira;
  font-size: 10px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  color: white;
`;

export function HeaderBar() {
  const products = [1, 2, 3,  4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <HeaderContainer>
      <Logo>capputeeno</Logo>
      <InputAndBagContainer>
        <InputWithSearchIcon placeholder="Procurando por algo expecífico?" />
        <BagButton>
          <ShoppingBagIcon />
          {(products?.length ?? 0) > 0 && <DotCount>{products?.length}</DotCount>}
        </BagButton>
      </InputAndBagContainer>
    </HeaderContainer>
  );
}