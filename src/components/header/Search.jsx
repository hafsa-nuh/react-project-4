import React, { useState } from 'react'
import styled from "styled-components";
import {AiOutlineSearch, AiOutlineClose} from "react-icons/ai";
import {NavLink } from "react-router-dom";
import "./search.css"

const Search = styled.div`
  position: relative;
  width: ${props => props.isSearching ? 360 : 25}px;
  height: 30px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  transition: all 0.3s ease;

`;

const SearchInput = styled.input`
  padding-left: 48px;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  border: 1px solid transparent;

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }
`;
const IconButton = styled.button`
  position: relative;
  height: 36px;
  width: 36px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background: none;

  &:hover {
    color: white;
    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    background: #000;
    transition: 0.2s ease;
    transform: scale(0.6);
    opacity: 0;
  }
`;


function Searchbar({ productItems }) {
  const [isActive, setIsActive] = useState(false);

   const [query, setQuery] = useState("");

  const taggleSearch = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section>
        <Search isSearching={isActive}>
          <IconButton onClick={taggleSearch}>
            {isActive ? (
              <AiOutlineClose size={18} />
            ) : (
              <AiOutlineSearch size={22} />
            )}
          </IconButton>
          <SearchInput />
        </Search>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "100",
          }}
        >
          <ul style={{ zIndex: "5" }}>
            {productItems
              .filter((product) => {
                if (query === "") {
                  return null;
                } else if (
                  product.name.toLowerCase().includes(query.toLowerCase())
                ) {
                  //returns filtered array
                  return product;
                }
              })
              .map((items, id) => {
                return (
                  <div className="box">
                    <div className="product mtop" key={id}>
                      <div className="product-details">
                        {/**start of products details div */}
                        <div style={{ display: "flex" }}>
                          <img
                            style={{ width: "250px", height: "200px" }}
                            src={items.image_url}
                            alt={items.name}
                          />
                          <div className="paragra">
                            <p>{items.description}</p>
                          </div>
                          <div className="price">
                            <h4>Ksh {items.price}.00 </h4>
                          </div>
                          <NavLink to={`product/${items.id}`}>
                            <button
                              onClick={() => {
                                setQuery("");
                              }}
                              className="btn"
                            >
                              Buy Now
                            </button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Searchbar