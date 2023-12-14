import { useEffect, useState } from "react";

import { IProductDetail } from "../interfaces/products.interface";
import { IconsList } from "../UI/icons/icons-list";
import { SVGIcon } from "../UI/components/icons/icon.component";
import { getAllProducts } from "../services/products/products.service";

export const HomePage = () => {
  const [products, setProducts] = useState<IProductDetail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const data = async () => {
    setIsLoading(true);
    const asd = await getAllProducts();
    console.log({ asd });
    setIsLoading(false);
    setProducts(asd);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      asd
      <SVGIcon icon={IconsList.actions.closeRoundFill} size="40px" />
      {isLoading ? (
        <>Loading...</>
      ) : products.length > 0 ? (
        products.map((item: IProductDetail) => (
          <div>
            <p>{item.title}</p>
            <img src={item.image} alt="" />
          </div>
        ))
      ) : (
        <>No products foubs</>
      )}
    </>
  );
};
