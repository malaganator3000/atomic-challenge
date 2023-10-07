import { RequetsForm, ResponseForm } from '../services/form';
import { Contacto } from '../store/types/Contacto';
import { InterceptRequestType, InterceptResponseType } from '../utils/Fetch';

export const formInterceptorRequets: InterceptRequestType<RequetsForm> = (
  headers,
  data
) => {
  const newData = {
    firstname: data.firstname,
    lastname: data.lastname,
    phoneNumber: data.phoneNumber,
  };

  data = newData;
};

export const formInterceptorResponse: InterceptResponseType<
  ResponseForm,
  Contacto
> = (result) => {
  return {
    id: result.id,
    firstname: result.firstname,
    lastname: result.lastname,
    phoneNumber: result.phoneNumber,
  };
};
