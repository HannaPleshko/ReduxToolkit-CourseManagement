import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/course' }),
    endpoints: (builder) => ({
        getCourse: builder.query({
            query: () => ({
                url: '/'
            }),
        }),
        getCourseById: builder.query({
            query: (id) => ({
                url: `/${id}`
            }),
        }),
        createCourse: builder.mutation({
            query: (data) => ({
                url: `/`,
                method: 'POST',
                body: data
            }),
        }),
        updateCourse: builder.mutation({
            query: (id, data) => ({
                url: `/${id}`,
                method: 'PUT',
                body: data
            }),
        }),
    }),
})

export const { useGetCourseQuery, useGetCourseByIdQuery, useCreateCourseMutation, useUpdateCourseMutation } = courseApi