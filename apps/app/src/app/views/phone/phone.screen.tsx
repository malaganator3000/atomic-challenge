import { FC } from 'react';
import { View,Text, Button } from 'react-native';
import { PhoneViewProps } from './phone.types';

export const PhoneView: FC<PhoneViewProps> = ({ navigation, route }) => {
    return (
        <View>
          <Text>Phone view</Text>
          <Button
            title="Go to confirt"
            onPress={() => {
              navigation.navigate("Confirmation");
            }}
          />
        </View>
      );
};
