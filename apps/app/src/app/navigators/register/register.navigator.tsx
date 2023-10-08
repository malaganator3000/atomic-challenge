import { FC } from 'react';
import {
  RegisterNavigatorProps,
  RegisterStackParamsList,
} from './register.types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NameView } from '../../views/name/name.screen';
import { PhoneView } from '../../views/phone/phone.screen';
import Header from '../../components/header';

export const RegisterNavigation: FC<RegisterNavigatorProps> = ({
  navigation,
  route,
}) => {
  const Stack = createNativeStackNavigator<RegisterStackParamsList>();
  let options = {};

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        // headerShown: false,
        header: (props) => <Header {...props} />,
      })}
    >
      <Stack.Screen name="Name" component={NameView} options={options} />
      <Stack.Screen name="Phone" component={PhoneView} options={options} />
    </Stack.Navigator>
  );
};
