import React from 'react'
import {topratesales} from "../../data/data"
import Items from './Items'; 
//https://splidejs.com/integration/react-splide/
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function TopRatedSales() {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  const {title,items} = topratesales
  return (
    <>
      <div className="nike-container">
        <div className="grid items-center">
          <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg text-center">
            {title}
          </h1>
        </div>
        <div className="mt-7">
          <Splide options={splideOptions}>
            {items?.map((item, id) => (
              <Items {...item} key={id} />
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
}

export default TopRatedSales