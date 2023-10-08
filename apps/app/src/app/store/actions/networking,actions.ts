import { createAction } from '@reduxjs/toolkit';
import { Equipo } from '../types/Equipo';
import { FormValue } from '../types/NetworkingState';

export enum NetworkingAction {
  GET_NAMES = '[NetworkingAction] GET_NAMES',
  SEND_FORM = '[NetworkingAction] SEND_FORM',
  SET_EQUIPO = '[NetworkingAction] SET_EQUIPO',
  SET_LOADING_EQUIPO = '[NetworkingAction] SET_LOADING_EQUIPO',
  SET_LOADING_FORM = '[NetworkingAction] SET_LOADING_FORM',
  SET_STATUS_NAMES_FORM = '[NetworkingAction] SET_STATUS_NAMES_FORM',
  SET_STATUS_LAST_FORM = '[NetworkingAction] SET_STATUS_LAST_FORM',
  SET_STATUS_PHONE_FORM = '[NetworkingAction] SET_STATUS_PHONE_FORM',
  SET_ERROR_FORM = '[NetworkingAction] SET_ERROR_FORM',
}

export const networkingActions = {
  GET_NAMES: createAction(NetworkingAction.GET_NAMES),
  SEND_FORM: createAction(NetworkingAction.SEND_FORM),
  SET_EQUIPO: createAction<Equipo>(NetworkingAction.SET_EQUIPO),
  SET_LOADING_EQUIPO: createAction<boolean>(
    NetworkingAction.SET_LOADING_EQUIPO
  ),
  SET_LOADING_FORM: createAction<boolean>(NetworkingAction.SET_LOADING_FORM),
  SET_STATUS_NAMES_FORM: createAction<FormValue>(
    NetworkingAction.SET_STATUS_NAMES_FORM
  ),
  SET_STATUS_LAST_FORM: createAction<FormValue>(
    NetworkingAction.SET_STATUS_LAST_FORM
  ),
  SET_STATUS_PHONE_FORM: createAction<FormValue>(
    NetworkingAction.SET_STATUS_PHONE_FORM
  ),
  SET_ERROR_FORM: createAction<any>(NetworkingAction.SET_ERROR_FORM),
};
