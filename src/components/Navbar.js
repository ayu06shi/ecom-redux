import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector((state) => state)
  return (
    <div>
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img
              src="https://i.pinimg.com/originals/45/8b/0a/458b0a1ea92c0b7e39d0d427c5262dfb.jpg"
              className="h-[90px]"
            />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart" className='relative flex'>
            <FaShoppingCart className="text-2xl"/>
            {
              cart.length > 0 &&
              <span className="absolute -top-1 -right-2 bg-green-600 
              text-xs w-5 h-5 flex justify-center items-center animate-bounce
              rounded-full text-white">{cart.length}</span>
            }

          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
