import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'
import { Link, useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchOneBookQuery } from '../../redux/features/books/booksApi';

const SingleBook = () => {
    const dispatch = useDispatch();
    const handleAddToCart = (bookitem) => {
        dispatch(addToCart(bookitem));
    }
    const {id} = useParams();
    const { data: book, isLoading, isError } = useFetchOneBookQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

  return (
    <div className="md:w-3/4 rounded-lg transition-shadow duration-300 hover:shadow-sm p-2 border border-gray-200">
        <div className="flex flex-col sm:flex-row  gap-4">
            {/* image */}
            <div className="sm:shrink-0 border border-gray-300 rounded-md">
                <Link to={`/book/${book._id}`}>
                    <img
                     src={`${getImgUrl(book.coverImage)}`}
                     alt=""
                     className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                    />
                </Link>
            </div>

            {/* text */}
            <div className="flex flex-col justify-center p-2">
                <strong className='text-lg'>{book?.title}</strong>
                {/* Top content */}
                <div>
                    <p className="sm:text-sm text-lg line-clamp-2">
                        <strong>Author: </strong>{ book?.author || 'admin' }
                    </p>
                    
                    <p className="sm:text-sm text-lg mt-2">
                        <strong>Published: </strong>{ new Date(book?.createdAt).toLocaleDateString() }
                    </p>

                    <p className="sm:text-sm text-lg mt-2 line-clamp-3">
                        <strong>Category: </strong> {book?.category}
                    </p>

                    <p className="sm:text-sm text-lg mt-2 line-clamp-3">
                        <strong>Description: </strong> { book?.description }
                    </p>

                </div>
                {/* Bottom ثابت */}
                <div className='mt-4'>
                    <p className="font-medium mb-4">
                        ${book?.oldPrice}
                        <span className="line-through font-normal ml-2">
                            ${book?.newPrice}
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

export default SingleBook
