import React from 'react'
import { AiFillStar, AiFillShopping } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { setAddItemToCart, setOpenCart } from '../../features/CartSlice';

function Item({id,title,text,rating,btn,img, price,color, shadow}) {
  const dispatch = useDispatch();

  // adding to cart
  const addToCart = () => {
    const item = { id, title, text, img, price, color, shadow };
    dispatch(setAddItemToCart(item));
  };

  // open cart
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div className="grid items-center">
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>

          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80  px-1 rounded blur-effect-theme">
              <h1 className="text-black text-sm font-medium">Ksh{price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <AiFillStar className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={() => addToCart()}
            >
              <AiFillShopping className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
              onClick={() => {addToCart(); onCartToggle()}}
            >
              {btn}
            </button>
          </div>
        </div>
        <div className="flex items-center absolute top-7 right-1">
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className="transitions-theme hover:-rotate-12h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
          />
        </div>
      </div>
    </>
  );
}

export default Item