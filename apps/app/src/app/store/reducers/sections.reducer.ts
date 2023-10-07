import { createReducer } from '@reduxjs/toolkit';
import { SectionsSate } from '../types/SectionsState';
import { sectionsActions } from '../actions/sections.actions';

const initialState: SectionsSate = {
  sections: [],
};

export const sectionsReducer = createReducer(initialState, (builder) =>
  builder.addCase(sectionsActions.ADD_SECTION, (state, action) => {
    state.sections = [...state.sections, action.payload];
  })
);
