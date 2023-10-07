import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

interface IconButtonProps {
  onPress: () => void;
  iconSource: ImageSourcePropType;
  width?: number;
  height?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  iconSource,
  height = 64,
  width = 64,
}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Image
        source={iconSource}
        style={{
          height,
          width,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 78,
    height: 78,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default IconButton;
