import { FC } from 'react';
import { View ,Text, Button} from 'react-native';
import { NameViewProps } from './name.types';

export const NameView: FC<NameViewProps> = ({ navigation, route }) => {
    return (
        <View>
          <Text>Name view</Text>
          <Button
            title="Go to phone"
            onPress={() => {
              navigation.push("Phone");
            }}
          />
        </View>
      );
};
