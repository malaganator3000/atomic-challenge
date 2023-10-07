import { Fetch } from '../utils/Fetch';
import { api } from './api';
import { nameInterceptor } from '../interceptors/names.interceptor';

export type ResponseNames = {
    id: number;
    name: string;
    position: string;
  }[];

export const getNamesService = () => {
  const requets = Fetch.interceptResponse(
    api.get<ResponseNames>(`/names`),
    nameInterceptor
  );

  return requets.exec()
};
