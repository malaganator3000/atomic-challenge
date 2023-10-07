import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from '../store/types/Carousel';
import { carouselActions } from '../store/actions/carousel.actions';
import { carouselSelector } from '../store/selectors/carousel.selector';

export type UseStateCarousel = (
  name: string
) => [Carousel, (currentIndex: number) => void];

export const useStateCarousel: UseStateCarousel = (name) => {
  const dispacth = useDispatch();
  const carouselState = useSelector(carouselSelector(name));
  const setData = (index: number) => {
    dispacth(
      carouselActions.SET_INDEX({
        name,
        index,
      })
    );
  };

  return [carouselState, setData];
};
