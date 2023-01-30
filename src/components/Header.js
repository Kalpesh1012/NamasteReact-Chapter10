import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../utils/useLogin";
const Header = () => {
  const isloggedin = useLogin();
  return (
    <div className="flex h-[100px]" key="d1">
      <Link to="/">
        <img
          src="https://content3.jdmagicbox.com/comp/navi-mumbai/l4/022pxx22.xx22.180901093644.i4l4/catalogue/khao-piyo-sojao-nerul-navi-mumbai-home-delivery-restaurants-j7ab4cza91.jpg"
          alt="logo"
          className="h-24 w-auto mt-1 ml-2"
        />
      </Link>
      <ul className="flex p-4 space-x-3 ml-[940px]">
        <li className="p-3">
          <Link to="/">Home</Link>
        </li>
        <li className="p-3">
          <Link to="/about">About</Link>
        </li>
        <li className="p-3">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-3">
          <Link>Cart</Link>
        </li>
        <li className="p-3">
          <Link to="/offer">Offer</Link>
        </li>
      </ul>
      {isloggedin ? (
        <button
          className="mt-6 mr-4 h-8 w-24 border-2 bg-slate-300"
          onClick={!isloggedin}
        >
          Log In
        </button>
      ) : (
        <button
          className="mt-6 mr-4 h-8 w-24 border-2 bg-slate-300"
          onClick={isloggedin}
        >
          Log Out
        </button>
      )}
    </div>
  );
};
export default Header;
