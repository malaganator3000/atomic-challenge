import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // Asegúrate de usar la ruta correcta
import { useUtilsHeaders } from '../hooks/utilsHeader';

export interface HeaderProps {
  updateScrollOffset: (y: number) => void;
}

export function withScroll<P extends NativeStackScreenProps<any, any>>(
  Component: React.ComponentType<P & HeaderProps>
): React.FC<P> {
  return (props: P) => {
    const [updateScrollOffset, resetScroll] = useUtilsHeaders();

    useEffect(() => {
      resetScroll();
    }, []);

    return <Component {...props} updateScrollOffset={updateScrollOffset} />;
  };
}
