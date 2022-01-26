import { createSlice } from '@reduxjs/toolkit'

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quizzes: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      return { ...state, isLoading: true }
    },
    fetchDataSuccess: (state, action) => {
      return { ...state, isLoading: false, quizzes: action.payload }
    },
    fetchDataFail: (state, action) => {
      return { ...state, isLoading: false, error: action.payload }
    },
  },
})

export const { fetchDataStart, fetchDataSuccess, fetchDataFail } =
  quizSlice.actions
export default quizSlice.reducer
