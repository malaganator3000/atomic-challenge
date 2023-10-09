import { FC } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { NameViewProps } from './name.types';
import Background from '../../components/background';
import {  styles } from './name.styl';
import { Statusform } from '../../components/StatusForm';
import IconButton from '../../components/IconButton';
import { NARANJA } from '../../const/color';
import { FormNames } from './components/form';
import { Footer } from '../../components/footer';

export const NameView: FC<NameViewProps> = ({ navigation, route }) => {
  const goToPhone = () => {
    navigation.push('Phone');
  };

  return (
    <Background>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Statusform />
          <View style={styles.titleContent}>
            <View style={styles.iconContent}>
              <IconButton
                iconSource={require('../../../assets/1fill.png')}
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
                Te{' '}
              </Text>
              <Text
                style={{
                  ...styles.titleText,
                }}
              >
                Queremos{' '}
              </Text>
              <Text
                style={{
                  ...styles.titleText,
                  color: NARANJA,
                }}
              >
                Conocer{' '}
              </Text>
            </View>
          </View>
          <View style={styles.descriptioncontent}>
            <Text style={styles.descriptionText}>
              Queremos saber que eres tú, por favor ingresa los siguientes
              datos:
            </Text>
          </View>
          <View style={styles.containerForm}>
            <FormNames nextStep={goToPhone} />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/names.png')}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <Footer />
        </View>
      </ScrollView>
    </Background>
  );
};
