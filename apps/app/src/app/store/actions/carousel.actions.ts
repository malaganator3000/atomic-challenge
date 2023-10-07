import { createAction } from '@reduxjs/toolkit';

export enum CarouselAction {
  SET_INDEX = '[CarouselAction] SET_INDEX',
}

export const carouselActions = {
    SET_INDEX: createAction<{name:string,index:number}>(CarouselAction.SET_INDEX),
};
