import { API_URL, BASE_URL } from "../../constants/API_URL";

import { IProductDetail } from "../../interfaces/products.interface";

export const getAllProducts = async () => {
  const data = await fetch(BASE_URL+API_URL.products)
  .then(res=>res.json())
  return data as IProductDetail[];
}