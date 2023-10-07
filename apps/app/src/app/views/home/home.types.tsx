
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/root/root.types';

export type HomeviewNavigationProp = NativeStackScreenProps<
  RootStackParamsList,
  'Home'
>;
export type HomeViewParams = undefined;

export interface HomeViewProps extends HomeviewNavigationProp {}
