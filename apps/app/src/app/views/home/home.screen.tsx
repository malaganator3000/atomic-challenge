import { FC, useRef } from 'react';
import { HomeViewProps } from './home.types';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import Background from '../../components/background';
import { Inicio } from './components/inicio';
import { Caracteristicas } from './components/caracteristicas';
import { Pasos } from './components/pasos';
import { Equipo } from './components/equipo';
import { Footer } from '../../components/footer';
import { HeaderProps, withScroll } from '../../components/WithScrollWrapper';

const HomeView: FC<HomeViewProps & HeaderProps> = ({
  navigation,
  route,
  updateScrollOffset,
}) => {
  const scrollViewRef = useRef<ScrollView>(null);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    updateScrollOffset(event.nativeEvent.contentOffset.y);
  };

  const go = (y: number) => {
    scrollViewRef.current?.scrollTo({ x: 0, y, animated: true });
  };

  const goRegister = () => {
    navigation.push('Register');
  };
  return (
    <Background>
      <ScrollView ref={scrollViewRef} onScroll={onScroll}>
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
const EnhancedHomeView = withScroll(HomeView);
export { EnhancedHomeView as HomeView };
