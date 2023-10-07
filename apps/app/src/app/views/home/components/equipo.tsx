import { View, Text, LayoutChangeEvent, StyleSheet } from 'react-native';
import { useAddSection } from '../../../hooks/addSection';
import { SectionProps } from '../types/SectionProps';
import { NARANJA } from '../../../const/color';
import { IntegranteList } from './integranteList';

export interface EquipoProps extends SectionProps {}

export function Equipo({}: EquipoProps) {
  const addSection = useAddSection();

  const onLayout = (event: LayoutChangeEvent) => {
    addSection({
      name: 'Equipo',
      position: event.nativeEvent.layout.y,
    });
  };
  return (
    <View onLayout={onLayout} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContent}>
          <Text style={{ ...styles.baseText }}>Nuestro </Text>
          <Text style={{ ...styles.baseText, color: NARANJA }}>equipo</Text>
        </View>
        <View style={styles.equipoContent}>
          <IntegranteList />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginVertical:30
  },
  baseText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
  },
  equipoContent:{
    width:"100%",
    
  }
});
