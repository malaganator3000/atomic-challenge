import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NameViewParams } from "../../views/name/name.types";
import { PhoneViewParams } from "../../views/phone/phone.types";
import { RootStackParamsList } from "../root/root.types";


export type RegisterStackParamsList = {
    Name:NameViewParams,
    Phone:PhoneViewParams,
}

export type RegisterNavigatorNavigationProp = NativeStackScreenProps<
  RootStackParamsList,
  "Register"
>;
export type RegisterNavigatorParams = RegisterStackParamsList;

export interface RegisterNavigatorProps extends RegisterNavigatorNavigationProp {}