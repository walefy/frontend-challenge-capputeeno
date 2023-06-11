import { useState } from "react";
import { useProductsQuery } from "../hooks/useProductsQuery";
import { styled } from "styled-components";
import { ProductList } from "../components/ProductList";
import { Product } from "../types/types";

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

  .highlight {
    font-family: 'Saira';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #41414D;
    border-bottom: 4px solid #FFA585;
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
  display: flex;
  gap: 8px;
  padding: 0 16px 0 0;
  background: transparent;
  border: none;
  outline: none;
  color: var(--dark-color);
`;

const ButtonScreen = styled.button`
  border: none;
  outline: none;
  line-height: 0;
  cursor: pointer;
  background-color: transparent;
  color: var(--dark-color);

  font-family: Saira;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-transform: uppercase;
`;

const INITIAL_HIGTHLIGHT = {
  'all': false,
  't-shirts': false,
  'mugs': false,
};

export function Catalog() {
  const [productsWithFilter, setProductsWithFilter] = useState<Product[]>([]);
  const [higthligth, setHigthligth] = useState({ ...INITIAL_HIGTHLIGHT, all: true } );
  const { data: products = [] } = useProductsQuery();

  const handleClickButtonScreen = (filter: string) => {
    const tempProducts = [...products];
    setHigthligth({ ...INITIAL_HIGTHLIGHT, [filter]: true });
    
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
                className={ higthligth.all ? 'highlight' : '' }
              >
                Todos os produtos
              </ButtonScreen>
            </li>
            <li>
              <ButtonScreen
                onClick={() => handleClickButtonScreen('t-shirts')}
                className={ higthligth["t-shirts"] ? 'highlight' : '' }
              >
                Camisetas
              </ButtonScreen>
            </li>
            <li>
              <ButtonScreen
                onClick={() => handleClickButtonScreen('mugs')}
                className={ higthligth.mugs ? 'highlight' : '' }
              >
                Canecas
              </ButtonScreen>
            </li>
          </ul>
        </Navigation>
        <Select>
          <option value="news">Novidades</option>
          <option value="decreasing">Preço: Maior - menor</option>
          <option value="increasing">Preço: Menor - maior</option>
        </Select>
      </LowHeaderConatiner>
      <ProductListContainer>
        <ProductList products={ productsWithFilter.length > 0 ? productsWithFilter : products } />
      </ProductListContainer>
    </CatalogConatiner>
  );
}
