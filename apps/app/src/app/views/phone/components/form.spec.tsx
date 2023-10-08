import REact from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import { useStatusform } from '../../../hooks/statusFrom';
jest.mock('../../../hooks/statusFrom');
import { FormPhone } from './form';
jest.mock('../../../hooks/statusFrom');
describe('Tests for <FormPhone/>', () => {
  beforeAll(() => {
    //@ts-ignore
    useStatusform.mockReturnValue([
      {
        name: { valid: false, value: '' },
        last: { valid: false, value: '' },
        phone: { valid: false, value: '' },
      },
      jest.fn(), // setName
      jest.fn(), // setLast
      jest.fn(), // setPhone
    ]);
  });
  it('Render correctly', () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText } = render(
      <FormPhone nextStep={nextStepMock} />
    );
    const input = getByPlaceholderText('*22291111239');
    expect(input).toBeTruthy();
  });

  it('Error cuando el input telefono esta vacio', async () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <FormPhone nextStep={nextStepMock} />
    );
    const input = getByPlaceholderText('*22291111239');
    fireEvent(input, 'onBlur', {
      target: { name: 'phone' },
      nativeEvent: {},
      persist: jest.fn(),
    });
    await waitFor(() => {
      expect(getByText('El Número es requerido')).toBeTruthy();
      expect(nextStepMock).toHaveBeenCalledTimes(0);
    });
  });

  it('Error cuando el input es menor a 10 dígitos', async () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <FormPhone nextStep={nextStepMock} />
    );
    const input = getByPlaceholderText('*22291111239');
    fireEvent.changeText(input, '1234');
    fireEvent(input, 'onBlur', {
      target: { name: 'phone' },
      nativeEvent: {},
      persist: jest.fn(),
    });
    await waitFor(() => {
      expect(
        getByText('El Número debe tener exactamente 10 dígitos')
      ).toBeTruthy();
      expect(nextStepMock).toHaveBeenCalledTimes(0);
    });
  });

  it('Error cuando el input es mayor a 10 dígitos', async () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <FormPhone nextStep={nextStepMock} />
    );
    const input = getByPlaceholderText('*22291111239');
    fireEvent.changeText(input, '1234567891011');
    fireEvent(input, 'onBlur', {
      target: { name: 'phone' },
      nativeEvent: {},
      persist: jest.fn(),
    });
    await waitFor(() => {
      expect(
        getByText('El Número debe tener exactamente 10 dígitos')
      ).toBeTruthy();
      expect(nextStepMock).toHaveBeenCalledTimes(0);
    });
  });

  it('Error cuando el numero tiene caracteres no númericos', async () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <FormPhone nextStep={nextStepMock} />
    );
    const input = getByPlaceholderText('*22291111239');
    fireEvent.changeText(input, '12345abcd'); // input with non-numeric characters
    fireEvent(input, 'onBlur', {
      target: { name: 'phone' },
      nativeEvent: {},
      persist: jest.fn(),
    });
    await waitFor(() => {
      expect(
        getByText('Solo se aceptan números y un máximo de 10 dígitos')
      ).toBeTruthy();
      expect(nextStepMock).toHaveBeenCalledTimes(0);
    });
  });

  it('Llamada exitosa cuando los campos de FormPhone son validos', async () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <FormPhone nextStep={nextStepMock} />
    );

    const input = getByPlaceholderText('*22291111239');
    const button = getByTestId('Continuar');

    await waitFor(() => {
      fireEvent.changeText(input, '2291111239');
    });
    act(() => {
      fireEvent.press(button);
    });

    await waitFor(() => {
      expect(nextStepMock).toHaveBeenCalledTimes(1);
    });
  });
});
