import React, { useEffect, useState } from 'react'
import BookCard from '../book/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const Topseller = () => {

    const [selectedCategorey, setSelectedCategorey] = useState('Choose a genre');

    const categories = ['Choose a genre', 'Business', 'Fiction', 'Horror', 'Adventure'];
    
    const {data: books=[]} = useFetchAllBooksQuery();

    const filteredbooks = selectedCategorey === "Choose a genre" ? books : 
    books.filter(book => book.category === selectedCategorey.toLocaleLowerCase())

  return (
    <div className='py-10'>
        <h2 className='text-2xl font-semibold mb-6'>Top Sellers</h2>
        <div className='mb-8 flex items-center'>
            <select onChange={(e) => setSelectedCategorey(e.target.value)} name='category' id='category' 
            className='border border-gray-300 rounded-md 
            px-4 py-2 bg-[#EAEAEA] focus:outline-none'>
                {
                    categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))
                }
            </select>
        </div>

        <Swiper
            // slidesPerView={1}
            // spaceBetween={30}  
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1180: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {
                filteredbooks.length > 0 && filteredbooks.map((books, index) => (
                    <SwiperSlide key={index} >
                        <BookCard book={books}/>
                    </SwiperSlide>    
                ))
            }
        </Swiper>
        
        
    </div>
  )
}

export default Topseller
