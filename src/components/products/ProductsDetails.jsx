import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TopRatedSales from "../hot-deals/TopRatedSales";
import Items from "../hot-deals/Items";

function ProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // console.log(product + "is it fetching");

  useEffect(()=>{
    const getProduct = async () => {
    const response = await fetch(`/products/${id}`);
      setProduct(await response.json());
    }
    getProduct();
  })

  return (
    <>
      <div className="grid justify-center grid-cols-2   ">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={product.image_url}
            alt="hopefuly it works"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            {product.name}
          </h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
            {product.description}
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-3xl">
              Price: <b>Ksh {product.price}</b>
            </p>
            <div className="mt-7 text-2xl">
              Size
              <select className="border-[2px] border-silver rounded-md ml-5">
                <option selected>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>
            <div className="mt-7">
              <div>
                <div className="counter flex items-center text-2xl justify-start">
                  Quantity:
                  <div className="ml-5 shadow-md flex">
                    <div className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer">
                      -
                    </div>
                    <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
                      1
                    </div>
                    <div className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer">
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">
              Add to cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <TopRatedSales>
        <Items/>
      </TopRatedSales>

    </>
  );
}

export default ProductsDetails