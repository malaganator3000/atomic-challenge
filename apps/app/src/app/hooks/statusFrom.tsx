import { useDispatch, useSelector } from 'react-redux';
import { FormValue, StatusForm } from '../store/types/NetworkingState';
import { statusformSelector } from '../store/selectors/networking.selector';
import { networkingActions } from '../store/actions/networking,actions';

export type UseStatusForm = () => [
  StatusForm,
  (name: FormValue) => void,
  (last: FormValue) => void,
  (phone: FormValue) => void
];

export const useStatusform: UseStatusForm = () => {
  const dispatch = useDispatch();
  const status = useSelector(statusformSelector);
  const setName = (value: FormValue) => {
    dispatch(networkingActions.SET_STATUS_NAMES_FORM(value));
  };

  const setLast = (value: FormValue) => {
    dispatch(networkingActions.SET_STATUS_LAST_FORM(value));
  };

  const setPhone = (value: FormValue) => {
    dispatch(networkingActions.SET_STATUS_PHONE_FORM(value));
  };

  return [status, setName, setLast, setPhone];
};
