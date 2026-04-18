import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import baseUrl from '../../../utils/baseUrl';

export const booksApi = createApi({

    reducerPath: 'booksApi',

    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl()}/api/books`,
        credentials:'include',
        
        prepareHeaders: (Headers)=>{
            const token = localStorage.getItem('token');
            if(token){
                Headers.set('Authorization', `Bearer ${token}`);
            }
            return Headers;
        },
    }),

    tagTypes:['Books'],

    endpoints: builder => ({
        fetchAllBooks: builder.query({
            query: () => '/',
            providesTags:["Books"], //return result as a book
        }),

        fetchOneBook: builder.query({
            query: (id) => `/${id}`,
            providesTags:(results, error, id)=> [{type: 'Books', id}]
        }),

        addBook: builder.mutation({
            query: (newBook) => ({
                url: '/',
                method: "POST",
                body: newBook
            }),
            invalidatesTags:["Books"]
        }),

        updateBook: builder.mutation({
            query:({id, ...updatedBookData}) => ({
                url: `/${id}`,
                method: "PUT",
                body: updatedBookData,
                headers: { 'Content-Type': "application/json" }
            }),
            invalidatesTags: (results, error, {id})=>[{type: 'Books', id}]
        }),

        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (results, error, id) => [{type: 'Books', id}]
        })
    })

})

export const {

    useFetchAllBooksQuery, // all 
    useFetchOneBookQuery, // one 
    useAddBookMutation, // add 
    useUpdateBookMutation, // update
    useDeleteBookMutation // delete

} = booksApi 

export default booksApi;

