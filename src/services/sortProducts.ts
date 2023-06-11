import { Product } from "../types/types";

export const sortByDate = (listOfProducts: Product[]) => {
  const tempProducts = [...listOfProducts];
  tempProducts.sort((productA, productB) => {
    const productADate = new Date(productA.created_at).getTime();
    const productBDate = new Date(productB.created_at).getTime();
    return productADate - productBDate;
  });

  return tempProducts
};

export const sortByPriceDecreasing = (listOfProducts: Product[]) => {
  const tempProducts = [...listOfProducts];
  tempProducts.sort((productA, productB) => productB.price_in_cents - productA.price_in_cents);

  return tempProducts
};

export const sortByPriceIncreasing = (listOfProducts: Product[]) => {
  const tempProducts = [...listOfProducts];
  tempProducts.sort((productA, productB) => productA.price_in_cents - productB.price_in_cents);

  return tempProducts
};
