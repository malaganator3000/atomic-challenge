import { FC } from 'react';
import { RootStackParamsList } from './root.types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeView } from '../../views/home/home.screen';
import { ConfirmacionView } from '../../views/confirmation/confirmation.screen';
import { RegisterNavigation } from '../register/register.navigator';
import Header from '../../components/header';

export const RootNavigation: FC<{}> = () => {
  const Stack = createNativeStackNavigator<RootStackParamsList>();
  let options = {};

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: (props)=> <Header {...props}/>,
      })}
    >
      <Stack.Screen name="Home" component={HomeView} options={options} />
      <Stack.Screen
        name="Register"
        component={RegisterNavigation}
        options={options}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmacionView}
        options={options}
      />
    </Stack.Navigator>
  );
};
