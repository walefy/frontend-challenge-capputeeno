import { useQuery } from 'react-query';
import { gql, request } from 'graphql-request';
import { Product } from '../types/types';

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
    return data.allProducts;
  }, {
    staleTime: 1000 * 60 // 1 minute
  });
}
