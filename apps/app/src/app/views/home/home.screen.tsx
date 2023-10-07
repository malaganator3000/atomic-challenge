import { FC, useEffect, useRef } from 'react';
import { HomeViewProps } from './home.types';
import { View, Text, Button, ScrollView } from 'react-native';
import Background from '../../components/background';
import { Inicio } from './components/inicio';
import { Caracteristicas } from './components/caracteristicas';
import { Pasos } from './components/pasos';
import { Equipo } from './components/equipo';
import { Footer } from './components/footer';

export const HomeView: FC<HomeViewProps> = ({ navigation, route }) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const go = (y: number) => {
    scrollViewRef.current?.scrollTo({ x: 0, y, animated: true });
  };

  const goRegister = () => {
    navigation.push('Register');
  };
  return (
    <Background>
      <ScrollView ref={scrollViewRef}>
        <Inicio
          name="Inicio"
          handleGoTo={{
            go,
            name: 'Caracteristicas',
          }}
          goRegister={goRegister}
        />
        <Caracteristicas name="Caracteristicas" />
        <Pasos name="Pasos" goRegister={goRegister} />
        <Equipo name="Equipo" />
        <Footer />
      </ScrollView>
    </Background>
  );
};
