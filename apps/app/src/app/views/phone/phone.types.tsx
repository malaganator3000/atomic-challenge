import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/root/root.types';
import { RegisterStackParamsList } from '../../navigators/register/register.types';

export type PhoneViewNavigationProp = CompositeScreenProps<
	NativeStackScreenProps<RegisterStackParamsList, "Phone">,
	NativeStackScreenProps<RootStackParamsList>
>;	

export type PhoneViewParams = undefined

export interface PhoneViewProps extends PhoneViewNavigationProp{
    
}