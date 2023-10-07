import { createSelector } from '@reduxjs/toolkit';
import { RootSate } from '..';

export const carouselSelector = (name: string) =>
  createSelector(
    (state: RootSate) => state.carouseles,
    (carouseles) => carouseles[name]
  );
