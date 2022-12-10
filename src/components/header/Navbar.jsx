import React, { useEffect, useState } from 'react'
import {
  AiFillHome,
  AiOutlineUserSwitch,
  AiFillShopping,
} from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { useDispatch} from "react-redux";
import { currentUserAdded } from "../../features/signinSlice"
import { useNavigate } from "react-router-dom";
import Searchbar from './Search';


const Navbar = ({ currentUser, productItems }) => {
  console.log(currentUser + "username");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSignout() {
    fetch("/signout", {
      method: "delete",
    });
    dispatch(currentUserAdded(null));
    navigate("/signin");
  }

  const [navState, setNavState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50 bg-black pt-4 pb-4"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200]"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${navState && "filter brightness-0"}`}
            />
            <h1
              className={`text-white p-1 ${navState && "filter brightness-0"}`}
            >
              Online Sneakers Shop
            </h1>
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <NavLink to="/">
                <AiFillHome
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
              </NavLink>
            </li>
            <li className="grid items-center">
              <Searchbar productItems={productItems} />
            </li>
            {currentUser !== null && (
              <>
                <h1
                  className={`text-white p-1 ${
                    navState && "filter brightness-0"
                  }`}
                >
                  Hello, <a href="/profile">{currentUser.username} </a>
                </h1>
              </>
            )}
            <li className="grid items-center">
              {currentUser !== null || currentUser === {} ? (
                <NavLink
                  className={`text-white p-1 ${
                    navState && "filter brightness-0"
                  }`}
                  onClick={handleSignout}
                >
                  Signout
                </NavLink>
              ) : (
                <NavLink to="/signin">
                  <AiOutlineUserSwitch
                    className={`icon-style ${
                      navState && "text-slate-900 transition-all duration-300"
                    }`}
                  />
                </NavLink>
              )}
            </li>
            <li className="grid items-center">
              <button
                type="button"
                // onClick={onCartToggle}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <AiFillShopping
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                ></div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar