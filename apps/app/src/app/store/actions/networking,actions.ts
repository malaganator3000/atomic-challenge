import { createAction } from '@reduxjs/toolkit';
import { RequetsForm } from '../../services/form';
import { Equipo } from '../types/Equipo';

export enum NetworkingAction {
  GET_NAMES = '[NetworkingAction] GET_NAMES',
  SEND_FORM = '[NetworkingAction] SEND_FORM',
  SET_EQUIPO = '[NetworkingAction] SET_EQUIPO',
  SET_LOADING_EQUIPO = '[NetworkingAction] SET_LOADING_EQUIPO',
  SET_LOADING_FORM = '[NetworkingAction] SET_LOADING_FORM',
}

export const networkingActions = {
  GET_NAMES: createAction(NetworkingAction.GET_NAMES),
  SEND_FORM: createAction<RequetsForm>(NetworkingAction.SEND_FORM),
  SET_EQUIPO: createAction<Equipo>(NetworkingAction.SET_EQUIPO),
  SET_LOADING_EQUIPO: createAction<boolean>(
    NetworkingAction.SET_LOADING_EQUIPO
  ),
  SET_LOADING_FORM: createAction<boolean>(NetworkingAction.SET_LOADING_FORM),
};
