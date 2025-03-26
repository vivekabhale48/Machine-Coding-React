import {configureStore} from '@reduxjs/toolkit';
import { CounterSliceReducer } from '../counterSlice';

export const store = configureStore({
  reducer: {
    counter: CounterSliceReducer,
  }
})