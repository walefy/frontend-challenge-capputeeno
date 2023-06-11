import { styled } from 'styled-components';
import { useProductsQuery } from '../hooks/useProductsQuery';
import { ProductCard } from './ProductCard';

const ListOfProducts = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 24px;

  li {
    list-style: none;
  }
`;

export function ProductList() {
  const { data: products, isFetching, isError } = useProductsQuery();

  return (
    <ListOfProducts>
      {
        products?.map((product) => (
          <li>
            <ProductCard
              imageUrl={ product.image_url }
              name={ product.name }
              price={ product.price_in_cents }
              key={ product.id }
            />
          </li>
        ))
      }
    </ListOfProducts>
  );
}
