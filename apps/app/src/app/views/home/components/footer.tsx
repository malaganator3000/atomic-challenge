import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';

export interface FooterProps {}

export function Footer({}: FooterProps) {
  const handleOpenURL = (url: string) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.derechoscontent}>
          <Text style={styles.derechosText}>
            ©2020 AtomicLabs. Todos los derechos reservados.
          </Text>
        </View>
        <View style={styles.privacidadcontent}>
          <TouchableOpacity onPress={() => handleOpenURL('https://www.atomic32.com/?lang=en')}>
            <Text style={styles.privcadidadText}>Aviso de privacidad</Text>
          </TouchableOpacity>

          <View style={styles.redesContent}>
            <TouchableOpacity
              onPress={() => handleOpenURL('https://www.linkedin.com/company/atomic-32')}
            >
              <Image
                source={require('../../../../assets/linkedin.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleOpenURL('https://twitter.com/Atomic_32')}
            >
              <Image
                source={require('../../../../assets/twitter.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    backgroundColor: '#000000',
  },
  content: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  derechoscontent: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  derechosText: {
    color: 'white',
  },
  privacidadcontent: {
    height: '50%',
    justifyContent:"center",
    alignItems:"center",
    width:"100%"
  },
  privcadidadText: {
    color: 'white',
    textDecorationLine:"underline"
  },
  redesContent: {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '20%',
  },
  icon: {
    width: 30, 
    height: 30,
  },
});
