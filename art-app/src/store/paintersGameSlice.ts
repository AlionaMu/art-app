import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { images } from '../data/images'

// Slice

const emptyArr: any = []
// const ObjItem: any = {}

const initialState = {
  arr: emptyArr,
  answer: '',
  nextPageToken: '',
  roundNumber: 1,
}

const paintersGameSlice = createSlice({
  name: 'paintersGame',
  initialState,
  reducers: {
    setGame: (state, action: PayloadAction<any>) => {
      state.arr = action.payload
    },
    create: (state, action: PayloadAction<any>) => {
      state.arr = action.payload
    },
  },
})

export const { setGame, create } = paintersGameSlice.actions

export default paintersGameSlice.reducer
