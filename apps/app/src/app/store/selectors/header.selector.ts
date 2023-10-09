import { createSelector } from '@reduxjs/toolkit';
import { RootSate } from '..';

export const scrollOffsetSelector = createSelector(
  (state: RootSate) => state.header,
  (header) => header.scrollOffset
);

export const headerHeightSelector = createSelector(
  (state: RootSate) => state.header,
  (header) => header.headerHeight
);

export const currentHeaderHeightSelector = createSelector(
  (state: RootSate) => state.header,
  (header) => header.currentHeaderHeight
);
