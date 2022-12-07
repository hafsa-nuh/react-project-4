import React from 'react'
import { popularsales, sneaker } from "../../data/data";
import Item from './Item';

function TopSales() {
    const {title, items} = popularsales
    const {heading,titles,text,btn,url,img} = sneaker
  return (
    <>
      <div className="nike-container">
        <div className="grid items-center">
          <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
            {title}
          </h1>
        </div>
        <div className="grid items-center justify-items-center gap-7 lg:gap-5 mt-7 grid-cols-3 xl:grid-cols-2 sm:grid-cols-1">
          {items.map((item, id) => (
            <Item {...item} key={id} />
          ))}
        </div>
      </div>
      {/* <br /> */}
      <div className="flex items-center justify-between lg:flex-col lg:justify-center nike-container">
        <div className="max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center">
          <h1 className="text-4xl sm:text-3xl font-bold text-gradient">
            {heading}
          </h1>
          <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg">
            {titles}
          </h1>
          <p className="xl:text-sm my-4 text-slate-900">{text}</p>
          <a
            href={url}
            className="flex items-center"
            target={"blank"}
            role="button"
          >
            <button
              type="button"
              className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5"
            >
              {btn}
            </button>
          </a>
        </div>
        <div className="flex items-center justify-center max-w-xl relative lg:max-w-none w-full">
          <img
            src={img}
            alt={`img/${heading}`}
            className='w-auto object-fill transitions-theme h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12'
          />
        </div>
      </div>
    </>
  );
}

export default TopSales