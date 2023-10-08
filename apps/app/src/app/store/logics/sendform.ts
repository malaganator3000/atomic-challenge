import { createLogic } from 'redux-logic';
import { networkingActions } from '../actions/networking,actions';
import { getNamesService } from '../../services/getNames';
import Snackbar from 'react-native-snackbar';
import { RootSate } from '..';
import { sendFormService } from '../../services/form';

export const sendFormLogic = createLogic({
  type: networkingActions.SEND_FORM.type,

  latest: true,

  process({ getState, action }, dispatch, done) {
    const state = getState() as RootSate;
    const statusesForm = state.networking.statusesForm;

    if (
      statusesForm.name.valid &&
      statusesForm.last.valid &&
      statusesForm.phone.valid
    ) {
      sendFormService({
        firstname: statusesForm.name.value,
        lastname: statusesForm.last.value,
        phoneNumber: statusesForm.phone.value,
      })
        .then((response) => {
          console.log(response);
          dispatch(networkingActions.SET_ERROR_FORM(null));
          dispatch(
            networkingActions.SET_STATUS_LAST_FORM({
              valid: false,
              value: null,
            })
          );
          dispatch(
            networkingActions.SET_STATUS_NAMES_FORM({
              valid: false,
              value: null,
            })
          );
          dispatch(
            networkingActions.SET_STATUS_PHONE_FORM({
              valid: false,
              value: null,
            })
          );
        })
        .catch((err) => {
          Snackbar.show({
            text: 'Ocurrio un error al enviar el formulario!',
            action: {
              text: err.toString(),
              textColor: 'red',
            },
          });
          dispatch(networkingActions.SET_ERROR_FORM(err));
        })
        .finally(() => {
          //@ts-ignore
          dispatch(networkingActions.SET_LOADING_FORM(false));
          done();
        });
      return;
    }
    Snackbar.show({
      text: 'El estado del formulario es invalido!',
      action: {
        text: 'Ok',
        textColor: 'red',
      },
    });
    //@ts-ignore
    dispatch(networkingActions.SET_LOADING_FORM(false));
    dispatch(
      networkingActions.SET_ERROR_FORM(
        new Error('Estado del formulario invalido')
      )
    );
    done();
  },
});