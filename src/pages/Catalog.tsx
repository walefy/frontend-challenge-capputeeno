import { useState } from "react";
import { useProductsQuery } from "../hooks/useProductsQuery";
import { styled } from "styled-components";
import { ProductList } from "../components/ProductList";
import { ProductWithId } from "../types/types";

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Navigation = styled.nav`
  li {
    list-style: none;
  }

  ul {
    display: flex;
    column-gap: 40px;
  }
`;

const LowHeaderConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 34px 0 88px 0;
`;

const CatalogConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Select = styled.select`
  // height: 15px;
`;

const ButtonScreen = styled.button`
  border: none;
  outline: none;
  line-height: 0;
  cursor: pointer;
  background-color: transparent;

  font-family: Saira;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-transform: uppercase;
`;

export function Catalog() {
  const [productsWithFilter, setProductsWithFilter] = useState<ProductWithId[]>([]);
  const { data: products = [] } = useProductsQuery();

  const handleClickButtonScreen = (filter: string) => {
    const tempProducts = [...products];
    if (filter === 'all') {
      setProductsWithFilter(tempProducts);
      return;
    }

    setProductsWithFilter(tempProducts.filter((product) => product.category === filter));
  };

  return (
    <CatalogConatiner>
      <LowHeaderConatiner>
        <Navigation>
          <ul>
            <li>
              <ButtonScreen
                onClick={() => handleClickButtonScreen('all')}
              >
                Todos os produtos
              </ButtonScreen>
            </li>
            <li>
              <ButtonScreen
                onClick={() => handleClickButtonScreen('t-shirts')}
              >
                Camisetas
              </ButtonScreen>
            </li>
            <li>
              <ButtonScreen
                onClick={() => handleClickButtonScreen('mugs')}
              >
                Canecas
              </ButtonScreen>
            </li>
          </ul>
        </Navigation>
        <Select>
          <option value="test">test</option>
        </Select>
      </LowHeaderConatiner>
      <ProductListContainer>
        <ProductList products={ productsWithFilter.length > 0 ? productsWithFilter : products } />
      </ProductListContainer>
    </CatalogConatiner>
  );
}
