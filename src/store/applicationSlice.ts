import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// type definition
type ApplicationState = {
  loading: boolean
}
// Initial State
const initialState: ApplicationState = {
  loading: false,
}
// thunk API
export const postApplication = createAsyncThunk('POST_APPLICATION', (userData: any) => {
  return new Promise(resolve => setTimeout(resolve, 2000, userData))
})
// Slice
const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Pending
    builder.addCase(postApplication.pending, state => {
      state.loading = true
    })
    // Done
    builder.addCase(postApplication.fulfilled, (state, action) => {
      state.loading = false
      console.log(action.payload)
    })
  },
})

export default applicationSlice.reducer
