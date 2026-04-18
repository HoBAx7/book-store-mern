import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import baseUrl from "../../../utils/baseUrl";

export const ordersApi = createApi({

    reducerPath: 'ordersApi',

    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl()}/api/orders`,
        credentials: 'include',
        prepareHeaders: (Headers)=>{
            const token = localStorage.getItem('token');
            if(token){
                Headers.set('Authorization', `Bearer ${token}`);
            }
            return Headers;
        },
    }),

    tagTypes:['Orders'],

    endpoints: builder => ({
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: '/',
                method: "POST",
                body: newOrder,
            }),
            invalidatesTags:['Orders']
        }),

        getOrders: builder.query({
            query: email => `/${email}`,
            providesTags:['Orders']
        })
    })

})

export const { useCreateOrderMutation, useGetOrdersQuery } = ordersApi;
export default ordersApi;