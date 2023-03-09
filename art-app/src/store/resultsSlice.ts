import { resultsGame } from './../types/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const emptyArr: resultsGame[] = []

const initialState = {
  arr: emptyArr,
}

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<resultsGame>) => {
      state.arr.push(action.payload)
    },
  },
})

export const { setResult } = resultsSlice.actions
export default resultsSlice.reducer
