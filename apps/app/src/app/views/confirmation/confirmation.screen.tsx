import { FC } from 'react';
import { View, Text, Button } from 'react-native';
import { ConfirmationViewProps } from './confirmation.types';

export const ConfirmacionView: FC<ConfirmationViewProps> = ({
  navigation,
  route,
}) => {
  return (
    <View>
      <Text>Phone view</Text>
      <Button
        title="Go to home"
        onPress={() => {
          navigation.reset({
            index: 1,
            routes: [{ name: 'Home' }],
          });
        }}
      />
    </View>
  );
};
