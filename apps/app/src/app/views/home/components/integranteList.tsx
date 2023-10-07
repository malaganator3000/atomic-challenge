import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useGetNames } from '../../../hooks/getNames';
import { useEffect } from 'react';
import { IntegranteItem } from './integranteItem';

export interface IntegranteListProps {}

export function IntegranteList({}: IntegranteListProps) {
  const [equipo, loading, getEquipo] = useGetNames();

  useEffect(() => {
    getEquipo();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {loading ? (
          <Text>Cargando...</Text>
        ) : (
          <FlatList
            data={equipo}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <IntegranteItem integrante={item} />}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    width: '100%',
    justifyContent:"center"
  },
});
