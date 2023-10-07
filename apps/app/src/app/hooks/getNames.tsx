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
    if (equipo && equipo.length > 0) {
      dispatch(networkingActions.SET_LOADING_EQUIPO(false))
      return
    }

    dispatch(networkingActions.GET_NAMES());
  };

  return [equipo, loading, getData];
};
