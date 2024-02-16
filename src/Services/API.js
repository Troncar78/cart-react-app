import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getProductComments: builder.query({
      query: (id) => `/products/${id}/comments`,
    }),
    createProductComment: builder.mutation({
      query: ({ id, username, comment }) => ({
        url: `/products/${id}/comments`,
        method: 'POST',
        body: {
          username,
          comment
        }
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery, useGetProductCommentsQuery, useCreateProductCommentMutation } = productsApi;
