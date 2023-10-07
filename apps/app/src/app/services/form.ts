import {
  formInterceptorRequets,
  formInterceptorResponse,
} from '../interceptors/form.interceptor';
import { Fetch } from '../utils/Fetch';
import { api } from './api';

export type RequetsForm = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
};

export interface ResponseForm extends RequetsForm {
  id: number;
}

export const sendFormService = (data: RequetsForm) => {
  const requets = Fetch.interceptResponse(
    Fetch.interceptRequest(
      api.post<ResponseForm, RequetsForm>(`/form`, data),
      formInterceptorRequets
    ),
    formInterceptorResponse
  );

  return requets.exec();
};
