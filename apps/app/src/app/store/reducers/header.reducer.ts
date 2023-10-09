import { createReducer } from '@reduxjs/toolkit';
import { HeaderState } from '../types/HeaderState';
import { headerActions } from '../actions/header.actions';

const initialState: HeaderState = {
  scrollOffset: 0,
  headerHeight: 88,
  currentHeaderHeight: 88,
};

export const headerReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(headerActions.SET_SCROLL_OFFSET, (state, action) => {
      state.scrollOffset = action.payload;
    })
    .addCase(headerActions.SET_HEADER_HEIGHT, (state, action) => {
      state.headerHeight = action.payload;
    })
    .addCase(headerActions.SET_HEADER_CURRENT_HEIGHT, (state, action) => {
      state.currentHeaderHeight = action.payload;
    })
    .addCase(headerActions.RESET, (state, action) => {
      state.currentHeaderHeight = state.headerHeight;
      state.scrollOffset = 0;
    })
);
