import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/root/root.types';
import { RegisterStackParamsList } from '../../navigators/register/register.types';

export type NameViewNavigationProp = CompositeScreenProps<
	NativeStackScreenProps<RegisterStackParamsList, "Name">,
	NativeStackScreenProps<RootStackParamsList>
>;	

export type NameViewParams = undefined

export interface NameViewProps extends NameViewNavigationProp{
    
}