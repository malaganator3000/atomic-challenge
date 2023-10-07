import { createReducer } from '@reduxjs/toolkit';
import { NetworkingState } from '../types/SetworkingState';
import { networkingActions } from '../actions/networking,actions';

const initialState: NetworkingState = {
  equipo: [],
  loadingEquipo: true,
  loadingForm: false,
};

export const networkingReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(networkingActions.SET_EQUIPO, (state, action) => {
      state.equipo = action.payload;
      state.loadingEquipo = false
    })
    .addCase(networkingActions.SET_LOADING_EQUIPO, (state, action) => {
      state.loadingEquipo = action.payload;
    })
    .addCase(networkingActions.SET_LOADING_FORM, (state, action) => {
      state.loadingForm = action.payload;
    })
);
