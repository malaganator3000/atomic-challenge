import { createSelector } from '@reduxjs/toolkit';
import { RootSate } from '..';

export const equipoSelector = createSelector(
  (state: RootSate) => state.networking,
  (networking) => networking.equipo
);

export const loadingEquipoSelector = createSelector(
  (state: RootSate) => state.networking,
  (networking) => networking.loadingEquipo
);

export const loadingFormSelector = createSelector(
  (state: RootSate) => state.networking,
  (networking) => networking.loadingForm
);
