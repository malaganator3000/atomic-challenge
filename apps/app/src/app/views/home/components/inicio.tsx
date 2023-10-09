import {
  View,
  Text,
  LayoutChangeEvent,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useAddSection } from '../../../hooks/addSection';
import { HeaderHeight } from '../../../components/header';
import { SectionProps } from '../types/SectionProps';
import IconButton from '../../../components/IconButton';
import { useGetSections } from '../../../hooks/getSections';
import { AZUL, NARANJA } from '../../../const/color';
import { QuieroSerParte } from './quieroSerParte';
import { DeviceSize, getDeviceSize } from '../../../utils/deviceSize';
const { height } = Dimensions.get('screen');
export interface InicioProps extends SectionProps {
  goRegister: () => void;
}

export function Inicio({ name, handleGoTo, goRegister }: InicioProps) {
  const addSection = useAddSection();
  const sections = useGetSections();
  const onLayout = (event: LayoutChangeEvent) => {
    addSection({
      name,
      position: event.nativeEvent.layout.y,
    });
  };

  const gotTo = () => {
    if (handleGoTo) {
      const { go, name } = handleGoTo;
      const section = sections.find((n) => n.name == name);
      if (section) {
        go(section.position);
      }
    }
  };

  return (
    <View onLayout={onLayout} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContent}>
          <View style={styles.titltTextContent}>
            <Text style={{ ...styles.titltText }}>Desarrolla todo</Text>
          </View>
          <View style={styles.titltTextContent}>
            <Text style={{ ...styles.titltText, color: NARANJA }}>
              tu POTENCIAL
            </Text>
          </View>
          <View style={styles.titltTextContent}>
            <Text style={{ ...styles.titltText }}>dentro del equipo</Text>
          </View>
          <View style={styles.titltTextContent}>
            <Text style={{ ...styles.titltText, color: NARANJA }}> ATOMIC</Text>
            <Text style={{ ...styles.titltText }}>LABS</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <IconButton
            onPress={gotTo}
            iconSource={require('../../../../assets/icon1.png')}
            
          />
          <Text style={styles.moreText}>Quiero saber más</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../../assets/inicio.png')}
            resizeMode="contain"
            style={{
              ...styles.image,
              ...(getDeviceSize(height) == DeviceSize.Pequeno
                ? {
                    height: 100,
                  }
                : {}),
            }}
          />
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
    minHeight: height - HeaderHeight,
    width: '100%',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  titltTextContent: {
    flexDirection:"row",
    flexWrap: 'wrap',
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  titltText: {
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold',
    textAlign:"center",
    // width:"100%"
    // lineHeight: 40,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  moreText: {
    color: 'white',
    fontSize: 18,
    padding: 0,
  },
  imageContainer: {
    marginTop: 20,
  },
  image: {
    height: 300,
  },
  botoncontent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
