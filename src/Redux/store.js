import { configureStore } from '@reduxjs/toolkit';
import { shopReducers } from './reducers';

const store = configureStore
    (
        {
            reducer: shopReducers
        }
    )

export default store;