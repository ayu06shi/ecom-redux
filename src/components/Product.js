import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add, remove} from "../redux/slices/cartSlice";
import {toast} from 'react-hot-toast';


const Product = ({post}) => {
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item Added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item Removed from Cart");
    }

  return (
    <div className='flex border flex-col items-center justify-between
    hover:scale-105 transition-all duration-200 ease-in gap-3 p-4 mt-10 rounded-xl hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
        <div>
            <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 m-2'>{post.title.split(" ").slice(0, 3).join(" ") + "..."}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px]
            text-left'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        </div>
        <div className='h-[180px]'>
            <img src={post.image} className='h-full w-full'/>
        </div>
        <div className='flex justify-between gap-12 items-center'>
            <div>
                <p className='text-green-600 font-semibold'>${post.price}</p> 
            </div>
            {
                cart.some((p) => p.id === post.id) ? 
                (<button onClick={removeFromCart} className='outline hover:bg-black hover:text-white transition-all duration-200 px-3 py-1 rounded-2xl'>
                    Remove Item
                </button>)
                :
                (
                    <button onClick={addToCart} className='outline hover:bg-black hover:text-white transition-all duration-200 px-3 py-1 rounded-2xl'>
                        Add to Cart
                    </button>
                )
            }
        </div>
    </div>
  )
}

export default Product