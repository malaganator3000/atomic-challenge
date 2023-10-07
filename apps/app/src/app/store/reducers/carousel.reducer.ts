import { createReducer } from '@reduxjs/toolkit';
import { SectionsSate } from '../types/SectionsState';
import { sectionsActions } from '../actions/sections.actions';
import { CarouselSate } from '../types/CarouselState';
import { carouselActions } from '../actions/carousel.actions';

const initialState: CarouselSate = {
  slider: {
    currentIndex: 0,
  },
};

export const carouselReducer = createReducer(initialState, (builder) =>
  builder.addCase(carouselActions.SET_INDEX, (state, action) => {
    const carouselState = state[action.payload.name];
    if (carouselState) {
      carouselState.currentIndex = action.payload.index;
    }
  })
);
