import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { images } from '../data/images'

// Slice

const emptyArr: any = []
const ObjItem: any = {}

const initialState = {
  cardsList: images,
  answer: '',
  nextPageToken: '',
  detailedInfo: ObjItem,
}

const paintersGameSlice = createSlice({
  name: 'paintersGame',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.answer = action.payload
    },
    setDetailedInfo: (state, action: PayloadAction<any>) => {
      state.detailedInfo = action.payload
    },
  },
})

export const { setSearch, setDetailedInfo } = paintersGameSlice.actions

export default paintersGameSlice.reducer
