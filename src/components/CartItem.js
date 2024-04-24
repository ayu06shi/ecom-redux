import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { remove } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed From Cart");
    }

  return (
    <div className="max-w-6xl border p-2 mx-auto m-8 space-y-10 space-x-5">
      <div>
        <div className='h-[180px]'>
          <img src={item.image}  className='h-full w-full' />
        </div>
        <div>
          <h1 className='text-gray-700 font-semibold text-lg text-left truncate w-40 m-2'>{item.title}</h1>
          <h1 className='w-40 text-gray-400 font-normal text-[10px]
            text-left'>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
          <div className="flex justify-between">
          <div className='text-green-600 font-semibold'>
            ${item.price}
          </div>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase  className="text-2xl"/>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CartItem;
