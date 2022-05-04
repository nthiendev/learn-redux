import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './message';
import userReducer from './user'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const rootReducer = {
    message: messageReducer,
    user: userReducer
  }

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk]
});