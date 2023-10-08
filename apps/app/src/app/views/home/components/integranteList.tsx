import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
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
          <View style={styles.activityContent}>
            <ActivityIndicator />
          </View>
        ) : (
          // <FlatList
          //   nestedScrollEnabled
          //   data={equipo}
          //   keyExtractor={(item) => item.id.toString()}
          //   renderItem={({ item }) => <IntegranteItem integrante={item} />}
          // />

          <>
            {equipo.map((i) => (
              <IntegranteItem integrante={i} key={i.id} />
            ))}
          </>
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
    justifyContent: 'center',
  },
  activityContent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});
