import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice';

const BookCard = ({book}) => {
    const dispatch = useDispatch();
    const handleAddToCart = (bookitem) => {
        dispatch(addToCart(bookitem));
    }
  return (
    <div className=" rounded-lg transition-shadow duration-300 ">
        <div className="flex flex-col sm:flex-row  sm:h-72  sm:justify-center gap-1">
            {/* image */}
            <div className="sm:h-60 sm:w-45 sm:shrink-0 border border-gray-300 rounded-md">
                <Link to={`/book/${book._id}`}>
                    <img
                     src={`${getImgUrl(book.coverImage)}`}
                     alt=""
                     className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                    />
                </Link>
            </div>

            {/* text */}
            <div className="h-60 flex flex-col justify-between">

                {/* Top content */}
                <div>
                    <Link to={`/book/${book._id}`}>
                    <h3 className="lg:text-lg text-xl font-semibold hover:text-blue-600 line-clamp-2">
                        {book?.title}
                    </h3>
                    </Link>

                    <p className="text-gray-600 lg:text-sm  text-lg mt-2 line-clamp-3">
                    {book?.description?.length > 80
                        ? `${book.description.slice(0, 80)}...`
                        : book?.description}
                    </p>
                </div>
                {/* Bottom ثابت */}
                <div>
                    <p className="font-medium mb-4">
                        ${book?.newPrice}
                        <span className="line-through font-normal ml-2">
                            ${book?.oldPrice}
                        </span>
                    </p>

                    <button onClick={() => handleAddToCart(book)} className="btn-primary mt-2 flex items-center gap-1">
                        <FiShoppingCart />
                        <span>Add to Cart</span>
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default BookCard
