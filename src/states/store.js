import { configureStore } from '@reduxjs/toolkit';
import threadsAndUsersReducer from './threadsAndUsers/reducer';
import authReducer from './auth/reducer';
import detailThreadReducer from './detailThread/reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';

const store = configureStore({
  reducer: {
    threadsAndUsers: threadsAndUsersReducer,
    auth: authReducer,
    threadDetail: detailThreadReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
