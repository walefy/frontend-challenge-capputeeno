import { useState } from "react";
import { useProductsQuery } from "../hooks/useProductsQuery";
import { styled } from "styled-components";
import { ProductList } from "../components/ProductList";
import { Product } from "../types/types";
import { sortByDate, sortByPriceDecreasing, sortByPriceIncreasing } from "../services/sortProducts";

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

type ProductsWithFilter = {
  products: Product[];
  filter: string;
}

const INITIAL_HIGTHLIGHT = {
  'all': false,
  't-shirts': false,
  'mugs': false,
};

const functionsOrderBy = {
  normal(ListOfProducts: Product[]) { return ListOfProducts },
  news: sortByDate,
  decreasing: sortByPriceDecreasing,
  increasing: sortByPriceIncreasing,
}

export function Catalog() {
  const [productsWithFilter, setProductsWithFilter] = useState<ProductsWithFilter>({
    products: [],
    filter: 'normal',
  });
  const [higthligth, setHigthligth] = useState({ ...INITIAL_HIGTHLIGHT, all: true } );
  const { data: products = [] } = useProductsQuery();

  const handleClickButtonScreen = (filter: string) => {
    const key = productsWithFilter.filter as keyof typeof functionsOrderBy;
    const orderFunc = functionsOrderBy[key];
    const tempProducts = orderFunc([...products]);
    setHigthligth({ ...INITIAL_HIGTHLIGHT, [filter]: true });
    
    if (filter === 'all') {
      setProductsWithFilter({ ...productsWithFilter, products: tempProducts });
      return;
    }

    setProductsWithFilter({
      ...productsWithFilter,
      products: tempProducts.filter((product) => product.category === filter)
    });
  };

  const handleChangeSelect = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const key = target.value as keyof typeof functionsOrderBy;
    const orderFunc = functionsOrderBy[key || 'normal'];
    const tempProducts = productsWithFilter.products.length > 0
      ? orderFunc([...productsWithFilter.products])
      : orderFunc([...products]);
    setProductsWithFilter({ products: tempProducts, filter: target.value });
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
        <Select onChange={ handleChangeSelect } defaultValue="">
        <option value="" disabled>Ordernar por</option>
          <option value="news">Novidades</option>
          <option value="decreasing">Preço: Maior - menor</option>
          <option value="increasing">Preço: Menor - maior</option>
        </Select>
      </LowHeaderConatiner>
      <ProductListContainer>
        <ProductList products={ productsWithFilter.products.length > 0
          ? productsWithFilter.products
          : products }
        />
      </ProductListContainer>
    </CatalogConatiner>
  );
}
