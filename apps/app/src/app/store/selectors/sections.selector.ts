import { createSelector } from '@reduxjs/toolkit';
import { RootSate } from '..';

export const sectionsSelector = createSelector(
  (state: RootSate) => state.sections,
  (sections) => sections.sections
);

