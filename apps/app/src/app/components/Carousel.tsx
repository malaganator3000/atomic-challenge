import React, { useRef } from 'react';
import { View, StyleSheet, ListRenderItem } from 'react-native';
import Carousel, {
  AdditionalParallaxProps,
  Pagination,
} from 'react-native-snap-carousel';
import { useStateCarousel } from '../hooks/stateCarousel';
import { NARANJA } from '../const/color';

export interface ItemCaruselProps<T> {
  name: string;
  items: T[];
  sliderWidth: number;
  itemWidth: number;
  render: ListRenderItem<T> &
    ((
      item: {
        item: T;
        index: number;
      },
      parallaxProps?: AdditionalParallaxProps | undefined
    ) => React.ReactNode);
}
const CarouselView: React.FC<ItemCaruselProps<any>> = ({
  items,
  render,
  name,
  sliderWidth,
  itemWidth,
}) => {
  const [state, setIndex] = useStateCarousel(name);
  const carousel = useRef<Carousel<any>>();
  console.log(state);
  return (
    <View>
      <Carousel
        style={styles.carrusel}
        layoutCardOffset={18}
        ref={carousel}
        data={items}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        autoplay={false}
        autoplayInterval={2000}
        renderItem={render}
        onBeforeSnapToItem={setIndex}
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={state.currentIndex}
        dotStyle={{
          width: 20,
          height: 20,
          borderRadius: 20,
          marginHorizontal: 8,
          backgroundColor: NARANJA,
        }}
        inactiveDotStyle={{
          backgroundColor: 'white',
          marginHorizontal: 8,
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carrusel: {
  },
});

export default CarouselView;
