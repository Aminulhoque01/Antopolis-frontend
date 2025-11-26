import { baseApi } from "../api/baseApi";


const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/category",
        method: "POST",
        body:data
      }),
      invalidatesTags:["product"]
    }),

    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
        
      }),
      providesTags: ["product"],
    }),
  })
})


export const {useAddCategoryMutation, useGetCategoryQuery}=categoryApi;