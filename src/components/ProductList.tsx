import { styled } from 'styled-components';
import { ProductCard } from './ProductCard';
import { ProductWithId } from '../types/types';

const ListOfProducts = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 24px;
  column-gap: 32px;

  li {
    list-style: none;
  }
`;

type ProductListProps = {
  products: ProductWithId[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <ListOfProducts>
      {
        products.map((product) => (
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
