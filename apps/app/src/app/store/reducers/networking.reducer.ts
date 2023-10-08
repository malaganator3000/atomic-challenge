import { createReducer } from '@reduxjs/toolkit';
import { NetworkingState } from '../types/NetworkingState';
import { networkingActions } from '../actions/networking,actions';

const initialState: NetworkingState = {
  equipo: [],
  loadingEquipo: true,
  loadingForm: true,
  statusesForm: {
    name: {
      valid: false,
      value: null,
    },
    last: {
      valid: false,
      value: null,
    },
    phone: {
      valid: false,
      value: null,
    },
  },
  errForm: null,
};

export const networkingReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(networkingActions.SET_EQUIPO, (state, action) => {
      state.equipo = action.payload;
    })
    .addCase(networkingActions.SET_LOADING_EQUIPO, (state, action) => {
      state.loadingEquipo = action.payload;
    })
    .addCase(networkingActions.SET_LOADING_FORM, (state, action) => {
      state.loadingForm = action.payload;
    })
    .addCase(networkingActions.SET_STATUS_NAMES_FORM, (state, action) => {
      state.statusesForm.name = action.payload;
    })
    .addCase(networkingActions.SET_STATUS_LAST_FORM, (state, action) => {
      state.statusesForm.last = action.payload;
    })
    .addCase(networkingActions.SET_STATUS_PHONE_FORM, (state, action) => {
      state.statusesForm.phone = action.payload;
    })
    .addCase(networkingActions.SET_ERROR_FORM, (state, action) => {
      state.errForm = action.payload;
    })
);
