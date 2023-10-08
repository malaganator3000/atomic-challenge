import { FC, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import { ConfirmationViewProps } from './confirmation.types';
import Background from '../../components/background';
import { styles } from './confirmation.styl';
import { useSendForm } from '../../hooks/sendForm';
import { NARANJA } from '../../const/color';

export const ConfirmacionView: FC<ConfirmationViewProps> = ({
  navigation,
  route,
}) => {
  const [loading, err, sendForm] = useSendForm();

  useEffect(() => {
    sendForm();
  }, []);

  useEffect(() => {
    const backAction = () => {
      navigation.reset({
        index: 1,
        routes: [{ name: 'Home' }],
      });
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  if (loading) {
    return (
      <Background>
        <View style={styles.container}>
          <View style={styles.content}>
            <ActivityIndicator />
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/confirmacion.png')}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
          </View>
        </View>
      </Background>
    );
  }

  if (err) {
    return (
      <Background>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.titleContent}>
              <View style={styles.title}>
                <Text
                  style={{
                    ...styles.titleText,
                  }}
                >
                  Algo salió mal{' '}
                </Text>

                <Text
                  style={{
                    ...styles.titleText,
                    color: NARANJA,
                  }}
                >
                  :(
                </Text>
              </View>
            </View>
            <View style={styles.zoneDescriptions}>
              <View style={styles.descriptioncontent}>
                <Text style={styles.descriptionText}>Intentalo más tarde.</Text>
              </View>
            </View>

            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/confirmacionerror.png')}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
          </View>
        </View>
      </Background>
    );
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.titleContent}>
            <View style={styles.title}>
              <Text
                style={{
                  ...styles.titleText,
                }}
              >
                Tus datos{' '}
              </Text>

              <Text
                style={{
                  ...styles.titleText,
                }}
              >
                Ha sido{' '}
              </Text>
              <Text
                style={{
                  ...styles.titleText,
                  color: NARANJA,
                }}
              >
                Enviado{' '}
              </Text>
              <Text
                style={{
                  ...styles.titleText,
                  color: NARANJA,
                }}
              >
                con éxito{' '}
              </Text>
            </View>
          </View>
          <View style={styles.zoneDescriptions}>
            <View style={styles.descriptioncontent}>
              <Text style={styles.descriptionText}>
                En breve recibirás un correo de confirmación por parte del
                equipo de AtomicLabs.
              </Text>
            </View>
            <View style={styles.descriptioncontent}>
              <Text style={styles.descriptionText}>
                Recuerda revisar tu bandeja de SPAM ¡Esperamos verte Pronto!
              </Text>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/confirmacionexito.png')}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </Background>
  );
};
