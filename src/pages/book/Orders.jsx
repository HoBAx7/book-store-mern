import React from 'react'
import { useGetOrdersQuery } from '../../redux/features/orders/ordersApi'
import { useAuth } from '../../context/AuthContext';

const Orders = () => {
    const { currentUser } = useAuth();
    const { data:orders=[], isLoading, isError } = useGetOrdersQuery(currentUser.email);
    console.log(orders);
    if(isLoading) return <div>Loading . . . </div>
    if(isError) return <div>error geting orders </div>
  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-2xl font-semibold mb-4'>Your Orders</h1>
      {
        orders.length === 0 ?  (<div>No Orders Found!</div>) : 
        (<div>
            {
                orders.map((order, index) => (
                    <div key={order?._id} className='border-b mb-4 pb-4'>
                        <p className='p-1 bg-secondary text-white w-10 rounded'># {index + 1}</p>
                        <h2 className='font-bold'>Order ID: { order._id }</h2>
                        <p className='text-gray-500'>name: {order.name}</p>
                        <p className='text-gray-500'>email: {order.email}</p>
                        <p className='text-gray-500'>phone: {order.phone}</p>
                        <p className='text-gray-500'>total price: ${order.totalPrice}</p>
                        <h3 className='font-semibold mt-2'>Address:</h3>
                        <p className='text-gray-500'>
                            {order.address.city} / {order.address.state} / {order.address.country} / {order.address.zipcode}
                        </p>
                        <h3 className='font-semibold mt-2'>Product ID:</h3>
                        <ul>
                            {
                                order.productIds.map((productId) => (
                                    <li className='text-gray-500' key={productId}>{productId}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>)
      }
    </div>
  )
}

export default Orders
