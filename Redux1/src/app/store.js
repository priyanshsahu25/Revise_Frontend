import {configureStore} from '@reduxjs/toolkit'

import countReducer from '../app/counterSlices'

export const store = configureStore({
reducer:countReducer
})