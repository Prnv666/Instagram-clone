import {configureStore} from '@reduxjs/toolkit'
import { RootReducer } from './Reducers'

export const Store = configureStore({
    reducer : {
        data : RootReducer,
    },
})