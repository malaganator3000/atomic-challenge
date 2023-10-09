import { createLogger } from 'redux-logger';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { sectionsReducer } from './reducers/sections.reducer';
import { networkingReducer } from './reducers/networking.reducer';
import logicMiddleware from './logics';
import { carouselReducer } from './reducers/carousel.reducer';
import { headerReducer } from './reducers/header.reducer';

const middleware = [
  // createLogger(),
  logicMiddleware({}),
];
const store = configureStore({
  reducer: combineReducers({
    sections: sectionsReducer,
    networking: networkingReducer,
    carouseles: carouselReducer,
    header: headerReducer,
  }),
  middleware,
});
const state = store.getState;
export type RootSate = ReturnType<typeof state>;
export default store;
