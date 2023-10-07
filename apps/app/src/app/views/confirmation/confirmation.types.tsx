
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/root/root.types';

export type ConfirmationviewNavigationProp = NativeStackScreenProps<
  RootStackParamsList,
  "Confirmation"
>;
export type ConfirmationViewParams = undefined;

export interface ConfirmationViewProps extends ConfirmationviewNavigationProp {}
