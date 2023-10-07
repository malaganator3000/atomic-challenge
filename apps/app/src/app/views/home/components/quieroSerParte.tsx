import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AZUL } from '../../../const/color';

export interface QuieroSerParteProps {
  onPress: () => void;
}

export function QuieroSerParte({ onPress }: QuieroSerParteProps) {
  return (
    <TouchableOpacity style={styles.joinButton} onPress={onPress}>
      <Text style={styles.joinButtonText}>¡Quiero ser parte!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  joinButton: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    width: 200,
  },
  joinButtonText: {
    color: AZUL,
    fontSize: 18,
    fontWeight: '500',
  },
});
