import { ResponseNames } from '../services/getNames';
import { Integrante } from '../store/types/Equipo';
import { InterceptResponseType } from '../utils/Fetch';

export const nameInterceptor: InterceptResponseType<
  ResponseNames,
  Integrante[]
> = (result: ResponseNames) => {
  return result.map((integrante) => ({
    id: integrante.id,
    name: integrante.name,
    position: integrante.position,
  }));
};
