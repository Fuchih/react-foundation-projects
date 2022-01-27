import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: { openModal: false, percentage: 0 },
  reducers: {
    handleModalOpen: (state, action) => {
      state.openModal = action.payload
    },
    CalculatePercentage: (state, action) => {
      state.percentage = action.payload
    },
  },
})

export const { handleModalOpen, CalculatePercentage } = modalSlice.actions
export default modalSlice.reducer
