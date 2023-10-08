import {
  View,
  Text,
  LayoutChangeEvent,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useAddSection } from '../../../hooks/addSection';
import { SectionProps } from '../types/SectionProps';
import CarouselView from '../../../components/Carousel';
import { CARACTERISTICAS } from '../../../const/caracteristicas';
import { CaracteristicaView } from './caracteristica';
import { NARANJA } from '../../../const/color';
import { HeaderHeight } from '../../../components/header';
const { width, height } = Dimensions.get('screen');
export interface CaracteristicasProps extends SectionProps {}

export function Caracteristicas({}: CaracteristicasProps) {
  const addSection = useAddSection();

  const onLayout = (event: LayoutChangeEvent) => {
    addSection({
      name: 'Caracteristicas',
      position: event.nativeEvent.layout.y,
    });
  };
  return (
    <View onLayout={onLayout} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContent}>
          <Text style={{ ...styles.baseText }}>somos </Text>
          <Text style={{ ...styles.baseText }}>el </Text>
          <Text style={{ ...styles.baseText }}>brazo </Text>
          <Text style={{ ...styles.baseText }}>derecho </Text>
          <Text style={{ ...styles.baseText, color: NARANJA }}>de </Text>
          <Text style={{ ...styles.baseText, color: NARANJA }}>
            la tecnología
          </Text>
        </View>
        <View style={styles.carouselContent}>
          <CarouselView
            name="slider"
            items={CARACTERISTICAS}
            render={({ item }) => (
              <CaracteristicaView item={item} key={item.id} />
            )}
            sliderWidth={width}
            itemWidth={width - 20}
          />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding:10
  },
  titleContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  baseText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    textTransform: 'uppercase',
    lineHeight:40
  },
  carouselContent: {
    maxHeight: height - 250 - HeaderHeight,
    justifyContent: 'center',
    alignItems: 'center',
    // padding:10
  },
});
