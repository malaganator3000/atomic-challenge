import { createAction } from '@reduxjs/toolkit';
import { Section } from '../types/Section';

export enum SectionsActions {
    ADD_SECTION = "[SectionsActions] ADD_SECTION"
}

export const sectionsActions = {
    ADD_SECTION:createAction<Section>(SectionsActions.ADD_SECTION)
}