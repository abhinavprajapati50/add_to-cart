import { configureStore } from '@reduxjs/toolkit';
import { shopReducers } from './reducers';

const store = configureStore
    (
        {
            reducer: shopReducers
            // rootReducer
        }
    )

export default store;