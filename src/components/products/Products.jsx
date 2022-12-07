import React, { useEffect, useState } from 'react'
import {NavLink} from "react-router-dom"
import {
  AiFillShopping,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  border: 2px solid rgb(203 213 225);
  border-radius: 20px;
  outline: none;
  width: 23%;
  padding: 16px 0;
  margin-left: 39%;
  color: black;
  background-color: rgb(203 213 225);
`;

function Products() {
  const [productItems, setProductItems] = useState([]);
  // console.log(productItems)
  const [hoverEffects , setHoverEffect] = useState('opacity-0')
  // to add load more button
  const [visible, setVisible] =useState(3)
    
  // GET Products
  useEffect(() => {
    fetch("/products")
    .then((r) => r.json())
    .then((data) => setProductItems(data));
  }, []);

  // HoverEffect
  function handleHoverEnter() {
    setHoverEffect(" opacity-1 bg-[rgba(0,0,0,0.2)]");
   }

  function handleHoverExit() {
    setHoverEffect(" opacity-0");
  }

  // div style
  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer"
  ;

  // onclick load more button
  const showMoreProducts = ()=>{
    setVisible((preValue)=> preValue + 4)
  }

  return (
    <>
      <div className="nike-container">
        <div className="grid items-center">
          <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg text-center">
            Featured Products
          </h1>
        </div>
        <div className="p-7 flex flex-wrap">
          {productItems.slice(0,visible).map((product, id) => {
            return (
              <>
                <div
                  className="flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative rounded-xl py-4 px-5  bg-slate-300 h-10 w-full "
                  onMouseEnter={handleHoverEnter}
                  onMouseLeave={handleHoverExit}
                  key={id}
                >
                  <Image src={product.image_url} alt="product" />
                  <div
                    className={
                      `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
                      hoverEffects
                    }
                  >
                    <div className={iconStyle}>
                      <AiFillShopping />
                    </div>
                    <div className={iconStyle}>
                      <AiOutlineHeart />
                    </div>
                    <div className={iconStyle}>
                      <NavLink to={`products/${product.id}`} >
                        <AiOutlineSearch />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Button onClick={showMoreProducts} >Load More</Button>
      </div>
    </>
  );
}

export default Products