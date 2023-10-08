import { useDispatch, useSelector } from 'react-redux';
import { Equipo } from '../store/types/Equipo';
import {
  equipoSelector,
  loadingEquipoSelector,
} from '../store/selectors/networking.selector';
import { networkingActions } from '../store/actions/networking,actions';

export type UseGetNames = () => [Equipo, boolean, () => void];

export const useGetNames: UseGetNames = () => {
  const dispatch = useDispatch();
  const equipo = useSelector(equipoSelector);
  const loading = useSelector(loadingEquipoSelector);
  const getData = () => {
    dispatch(networkingActions.GET_NAMES());
  };

  return [equipo, loading, getData];
};
