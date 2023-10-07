import { NavigatorScreenParams } from '@react-navigation/native';
import { RegisterNavigatorParams } from '../register/register.types';
import { HomeViewParams } from '../../views/home/home.types';
import { ConfirmationViewParams } from '../../views/confirmation/confirmation.types';

export type RootStackParamsList = {
    Home:HomeViewParams,
    Register:NavigatorScreenParams<RegisterNavigatorParams>,
    Confirmation:ConfirmationViewParams
}