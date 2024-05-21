import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () =>"products",
    }),

    getOneProduct: builder.query({
      query: (id) =>`products/${id}`,
    }),

    getPost:builder.mutation({
        query :(newProduct)=>({
            url:"products",
            method:'POST',
            headers:{'Context-Type':'application/json'},
            body:newProduct,
        }),

    }),
    deleteProduct:builder.mutation({
      query :(id)=>({
        url:`products/${id}`,
        method:'DELETE',
        
    }),
    })
  }),
})


export const { useGetProductQuery,useGetPostMutation ,useDeleteProductMutation,useGetOneProductQuery} = productApi