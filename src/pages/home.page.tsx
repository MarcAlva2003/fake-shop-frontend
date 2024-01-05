import { useEffect, useState } from "react";

import { Header } from "../components/header/header.component";
import { IProductDetail } from "../interfaces/products.interface";
import { IconsList } from "../UI/icons/icons-list";
import { Input } from "../UI/components/input/input.component";
import { SVGIcon } from "../UI/components/icons/icon.component";
import { getAllProducts } from "../services/products/products.service";

export const HomePage = () => {
  const [products, setProducts] = useState<IProductDetail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const data = async () => {
    setIsLoading(true);
    const asd = await getAllProducts();
    setIsLoading(false);
    setProducts(asd);
  };

  useEffect(() => {
    data();
  }, []);

  const [value, setValue] = useState<string>("");

  return (
    <>
      <Header/>
      <Input
        value={value}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setValue(ev.target.value);
        }}
        size="large"
      />
      <Input
        value={value}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setValue(ev.target.value);
        }}
        size="medium"
      />
      <Input
        value={value}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setValue(ev.target.value);
        }}
        size="small"
      />
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
