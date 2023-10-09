import { View, Text, StyleSheet } from 'react-native';
import { Integrante } from '../../../store/types/Equipo';
import { AZUL_CARD } from '../../../const/color';

export interface IntegranteItemProps {
  integrante: Integrante;
}

export function IntegranteItem({ integrante }: IntegranteItemProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.avatarContent}>
          <View style={styles.avatar}></View>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.name}>{integrante.name}</Text>
          <Text style={styles.position}>{integrante.position}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  cardContent: {
    height: 250,
    width: '100%',
    backgroundColor: AZUL_CARD,
    padding: 15,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  avatarContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
  },
  textContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontWeight:"500",
    fontSize:20
  },
  position: {
    color: 'white',
    fontSize:18
  },
});
