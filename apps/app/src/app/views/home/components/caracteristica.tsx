import { View, Text, StyleSheet, Image } from 'react-native';
import { Caracteristica } from '../../../const/caracteristicas';
import { NARANJA } from '../../../const/color';
export interface CaracteristicaProps {
  item: Caracteristica;
}

export function CaracteristicaView({ item }: CaracteristicaProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.dividerContent}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerSemiLine} />
          <View style={styles.dividerLine} />
        </View>
        <Text style={styles.titulo}>{item.titulo.toUpperCase()}</Text>
        <View style={styles.list}>
          {item.detalles.map((detalle) => (
            <View style={styles.listItem} key={(Math.random() * 2).toString()}>
              <View style={styles.dot} />
              <View style={styles.textContent}>
                {detalle.map((d) => (
                  <Text
                    key={d.id}
                    style={{ ...styles.textList, fontWeight: d.fontWeight }}
                  >
                    {d.text}
                  </Text>
                ))}
              </View>
            </View>
          ))}
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
    height: '100%',
    width: '95%',
    backgroundColor: NARANJA,
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
  },
  image: {
    alignSelf: 'center',
    height: 200,  
    width: 200,  
    marginBottom: 15,
  },
  dividerContent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  dividerLine: {
    width: 50,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  dividerSemiLine: {
    width: 10,
    height: 3,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 20,
  },
  titulo: {
    fontSize: 32,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  list: {
    paddingHorizontal: 10,
    width: '70%',
  },
  listItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    padding:0,
    margin:0
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 20,
  },
  textList: {
    fontSize: 20,
    color: 'white',
    padding:0,
    margin:0
  },
  textContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding:0
  },
});
