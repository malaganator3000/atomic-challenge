import { useDispatch, useSelector } from 'react-redux';
import { networkingActions } from '../store/actions/networking,actions';
import {
  errorFormSelector,
  loadingFormSelector,
} from '../store/selectors/networking.selector';

export type UseSendForm = () => [boolean, any, () => void];

export const useSendForm: UseSendForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingFormSelector);
  const err = useSelector(errorFormSelector);
  const send = () => {
    dispatch(networkingActions.SEND_FORM());
  };

  return [loading, err, send];
};
