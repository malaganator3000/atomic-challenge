import { createLogic } from 'redux-logic';
import { networkingActions } from '../actions/networking,actions';
import { getNamesService } from '../../services/getNames';
import Snackbar from 'react-native-snackbar';

export const fgetNamesLogic = createLogic({
  type: networkingActions.GET_NAMES.type,

  latest: true,
  process({ getState, action }, dispatch, done) {
    getNamesService()
      .then((response) => {
        dispatch(networkingActions.SET_EQUIPO(response));
        //@ts-ignore
        dispatch(networkingActions.SET_LOADING_EQUIPO(false));
      })
      .catch((err) => {
        Snackbar.show({
          text: 'Ocurrio un error al obtener algunos datos',
          action: {
            text: err.toString(),
            textColor: 'red',
          },
          duration:Snackbar.LENGTH_LONG
        });
      })
      .finally(() => {
        done();
      });
  },
});
