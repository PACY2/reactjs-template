import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json"
  }
})

export default createApi({
  baseQuery,
  endpoints: () => ({})
})

