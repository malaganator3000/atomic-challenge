import { View, Text, LayoutChangeEvent, Image, StyleSheet } from 'react-native';
import { useAddSection } from '../../../hooks/addSection';
import { SectionProps } from '../types/SectionProps';
import { NARANJA } from '../../../const/color';
import { QuieroSerParte } from './quieroSerParte';
import ArrowRightIcon from '../../../components/arrowIcon';

export interface PasosProps extends SectionProps {
  goRegister: () => void;
}

export function Pasos({ goRegister }: PasosProps) {
  const addSection = useAddSection();

  const onLayout = (event: LayoutChangeEvent) => {
    addSection({
      name: 'Pasos',
      position: event.nativeEvent.layout.y,
    });
  };
  return (
    <View onLayout={onLayout} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContent}>
          <Text style={styles.titleText}>¡Te </Text>
          <Text style={styles.titleText}>Encantará </Text>
          <Text style={{ ...styles.titleText, color: NARANJA }}>Trabajar </Text>
          <Text style={{ ...styles.titleText, color: NARANJA }}>con </Text>
          <Text style={{ ...styles.titleText, color: NARANJA }}>Nosotros!</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../../assets/pasos.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.pasosContent}>
          <View style={styles.pasoTextcontent}>
            <Text style={styles.pasoText}>Contratación remota</Text>
          </View>
          <View style={styles.pasoArrowcontent}>
            <ArrowRightIcon />
          </View>

          <View style={styles.pasoTextcontent}>
            <Text style={styles.pasoText}>Entrevista con el área de RH</Text>
          </View>
          <View style={styles.pasoArrowcontent}>
            <ArrowRightIcon />
          </View>
          <View style={styles.pasoTextcontent}>
            <Text style={styles.pasoText}>Prueba práctica</Text>
          </View>
          <View style={styles.pasoArrowcontent}>
            <ArrowRightIcon />
          </View>
          <View style={styles.pasoTextcontent}>
            <Text style={styles.pasoText}>Entrevista técnica</Text>
          </View>
        </View>
        <View style={styles.botoncontent}>
          <QuieroSerParte onPress={goRegister} />
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
  },
  titleContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  titleText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    textTransform: 'uppercase',
    lineHeight:40
  },
  imageContainer: {
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 160,
  },
  pasosContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pasoTextcontent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  pasoText: {
    color: 'white',
    fontSize: 12,
  },
  pasoArrowcontent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botoncontent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
});
