import { ImageSourcePropType } from "react-native";

export interface Caracteristica {
  id: string;
  titulo: string;
  image: ImageSourcePropType;
  detalles: { id: string; text: string; fontWeight: "bold" | "normal" }[][];
}

export const CARACTERISTICAS: Caracteristica[] = [
  {
    id: '1',
    titulo: 'Imagina',
    image: require('../../assets/logo.png'),
    detalles: [
      [
        { id: '1-1', text: 'Estrategia', fontWeight: 'bold' },
        { id: '1-2', text: ' digital', fontWeight: 'normal' },
      ],
      [
        { id: '1-3', text: 'Big data &', fontWeight: 'normal' },
        { id: '1-4', text: ' Analysis', fontWeight: 'bold' },
      ],
      [
        { id: '1-5', text: 'Consultoría', fontWeight: 'bold' },
        { id: '1-6', text: ' Tecnologíca', fontWeight: 'normal' },
      ],
      [
        { id: '1-7', text: 'Reducción', fontWeight: 'bold' },
        { id: '1-9', text: ' de costos Tí', fontWeight: 'normal' },
      ],
    ],
  },
  {
    id: '2',
    titulo: 'Explora',
    image: require('../../assets/explora.png'),
    detalles: [
      [
        { id: '2-1', text: 'Innovación', fontWeight: 'normal' },
        { id: '2-4', text: ' y ', fontWeight: 'bold' },
        { id: '2-2', text: 'creación tecnologíca', fontWeight: 'bold' },
      ],
      [{ id: '2-3', text: 'UI / UX', fontWeight: 'bold' }],
      [{ id: '2-5', text: 'Innovación', fontWeight: 'bold' }],
    ],
  },
  {
    id: '3',
    titulo: 'Conquista',
    image: require('../../assets/conquista.png'),
    detalles: [
      [
        { id: '3-1', text: 'Desarrollo ', fontWeight: 'normal' },
        { id: '3-2', text: 'tecnologíco ', fontWeight: 'normal' },
        { id: '3-5', text: 'y creación ', fontWeight: 'bold' },
        { id: '3-6', text: 'tecnologíca', fontWeight: 'bold' },
      ],
      [{ id: '3-3', text: 'Ciberseguridad', fontWeight: 'bold' }],
      [{ id: '3-4', text: 'Servicios de la Nube', fontWeight: 'bold' }],
    ],
  },
];
