import { useSelector } from 'react-redux';
import { Section } from '../store/types/Section';
import { sectionsSelector } from '../store/selectors/sections.selector';

export type UseGetSections = () => Section[];

export const useGetSections: UseGetSections = () => {
  const sections = useSelector(sectionsSelector);

  return sections;
};
