import { createAction } from '@reduxjs/toolkit';

export enum HeaderActions {
  SET_SCROLL_OFFSET = '[HeaderActions] SET_SCROLL_OFFSET',
  SET_HEADER_HEIGHT = '[HeaderActions] SET_HEADER_HEIGHT',
  SET_HEADER_CURRENT_HEIGHT = '[HeaderActions] SET_HEADER_CURRENT_HEIGHT',
  RESET = '[HeaderActions] RESET',
}

export const headerActions = {
  SET_SCROLL_OFFSET: createAction<number>(HeaderActions.SET_SCROLL_OFFSET),
  SET_HEADER_HEIGHT: createAction<number>(HeaderActions.SET_HEADER_HEIGHT),
  SET_HEADER_CURRENT_HEIGHT: createAction<number>(
    HeaderActions.SET_HEADER_CURRENT_HEIGHT
  ),
  RESET: createAction(HeaderActions.RESET),
};
