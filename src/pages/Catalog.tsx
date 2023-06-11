import { styled } from "styled-components";
import { ProductList } from "../components/ProductList";

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function Catalog() {
  return (
    <ProductListContainer>
      <ProductList />
    </ProductListContainer>
  );
}
