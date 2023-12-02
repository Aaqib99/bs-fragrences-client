import { products } from "../constants";
import { useState } from "react";
import { Button, PopularProductCard } from "../components";
import { openUploader } from "../components/Array.jsx";

const PopularProducts = () => {
  const [data, setData] = useState();
  console.log(data);
  const btnhandle = () => {
    openUploader(setData);
    console.log("alskdajl");
  };
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span style={{ color: "#D9BB66" }}> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after perfume
          selections. Discover your scent today! Explore the new fragrances.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {data &&
          products.map((product, index) => (
            <PopularProductCard
              key={product.price}
              {...product}
              data={{ itemName: data[index + 1][1], price: data[index + 1][3] }}
            />
          ))}
      </div>
      <Button onClick={btnhandle} label="Upload CSV" />
      {/* {data} */}
    </section>
  );
};

export default PopularProducts;
