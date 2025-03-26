import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  'fetch/data',
  async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json()
  }
)

const initialState = {
  count: 0,
  inputName: '',
  data: [],
  loading: false,
  error: null
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementState: (state) => {
      state.count = state.count + 1;
    },
    decrementState: (state) => {
      state.count = state.count - 1;
    },
    setInputName: (state, action) => {
      state.inputName = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
  }
})

export const {incrementState, decrementState, setInputName} = counterSlice.actions;

export const CounterSliceReducer = counterSlice.reducer;