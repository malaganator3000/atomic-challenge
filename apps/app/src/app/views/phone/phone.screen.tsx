import { FC } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { PhoneViewProps } from './phone.types';
import Background from '../../components/background';
import { height, styles } from './phone.styl';
import { Statusform } from '../../components/StatusForm';
import IconButton from '../../components/IconButton';
import { NARANJA } from '../../const/color';
import { FormPhone } from './components/form';
import { DeviceSize, getDeviceSize } from '../../utils/deviceSize';

export const PhoneView: FC<PhoneViewProps> = ({ navigation, route }) => {
  const goToConfirm = () => {
    navigation.navigate('Confirmation');
  };
  return (
    <Background>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Statusform />
          <View style={styles.titleContent}>
            <View style={styles.iconContent}>
              <IconButton
                iconSource={require('../../../assets/2fill.png')}
                width={42}
                height={42}
              />
            </View>
            <View style={styles.title}>
              <Text
                style={{
                  ...styles.titleText,
                }}
              >
                Valida{' '}
              </Text>
              <Text
                style={{
                  ...styles.titleText,
                }}
              >
                tu{' '}
              </Text>
              <Text
                style={{
                  ...styles.titleText,
                  color: NARANJA,
                }}
              >
                Celular{' '}
              </Text>
            </View>
          </View>
          <View style={styles.descriptioncontent}>
            <Text style={styles.descriptionText}>
              Necesitamos validar tu número para continuar
            </Text>
            <Text style={styles.descriptionText}>
              Ingresa tu número de 10 dígitos y te enviaremos un código SMS.
            </Text>
          </View>
          <View style={styles.containerForm}>
            <FormPhone nextStep={goToConfirm} />
          </View>
        </View>
      </ScrollView>
      {getDeviceSize(height) != DeviceSize.Pequeno && (
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/phone.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
      )}
    </Background>
  );
};
