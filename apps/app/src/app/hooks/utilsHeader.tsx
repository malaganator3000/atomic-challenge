import { useDispatch } from 'react-redux';
import { headerActions } from '../store/actions/header.actions';

export type UpdateScrollOffset = (y: number) => void;
export type ResetStateHeader = () => void;
export type SetHeaderHeight = (height: number) => void;
export type SetCurrentHeaderHeight = (height: number) => void;
export type UseUtilsHeaders = () => [
  UpdateScrollOffset,
  ResetStateHeader,
  SetHeaderHeight,
  SetCurrentHeaderHeight
];

export const useUtilsHeaders: UseUtilsHeaders = () => {
  const dispatch = useDispatch();

  const update = (y: number) => {
    dispatch(headerActions.SET_SCROLL_OFFSET(y));
  };

  const reset = () => {
    dispatch(headerActions.RESET());
  };

  const setHeight = (height: number) => {
    dispatch(headerActions.SET_HEADER_HEIGHT(height));
  };

  const setCurrentHeight = (height: number) => {
    dispatch(headerActions.SET_HEADER_CURRENT_HEIGHT(height));
  };
  return [update, reset, setHeight, setCurrentHeight];
};
