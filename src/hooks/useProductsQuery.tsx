import { useQuery } from 'react-query';
import { gql, request } from 'graphql-request';
import { Product, ProductWithId } from '../types/types';
import { nanoid } from 'nanoid';

type ProductResponse = {
  allProducts: Product[];
};

export function useProductsQuery() {
  const query = gql`
    {
      allProducts {
        name
        description
        image_url
        category
        price_in_cents
      }
    }
  `;

  return useQuery('products', async () => {
    const data: ProductResponse = await request('http://localhost:3333/', query);
    const allProducts: ProductWithId[] = data.allProducts.map((product) => ({ ...product, id: nanoid() }));
    return allProducts;
  }, {
    staleTime: 1000 * 60 // 1 minute
  });
}
