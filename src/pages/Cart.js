import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0));
    }, [cart]) // changes in cart array
  return (
    <div>
        {
            cart.length > 0 ? 
            (
                <div className='flex justify-between'>
                    <div className="flex flex-col justify-between items-center h-20 max-w-6xl mx-auto">
                        {
                            cart.map((item, index) => {
                                return <CartItem key={item.id} item={item} itemIndex={index}/>
                            })
                        }
                    </div>
                    <div>
                        <div className='flex flex-col mt-10 justify-between items-left text-3xl font-bold text-green-600'>
                            <div>Your Cart</div>
                            <div>Summary</div>
                            <p className='mt-6'>
                                <span>Total Items: {cart.length}</span>
                            </p>
                        </div>

                    <div className=''>
                        <p className='items-left m-10 text-2xl text-green-900 font-bold'>Total Amount: {totalAmount}</p>
                        <button className='outline hover:bg-black hover:text-white font-bold transition-all duration-200 px-3 py-1 rounded-2xl'>Checkout Now</button>
                    </div>
                    </div>

                </div>
            ) :
            (
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-green-600 text-2xl m-6'>Your Cart is Empty</h1>
                    <Link to={"/"}>
                        <button className='outline hover:bg-black hover:text-white font-bold transition-all duration-200 px-3 py-1 rounded-2xl'>Shop Now</button>
                    </Link>
                </div>
            )
        }
    </div>
  )
}

export default Cart