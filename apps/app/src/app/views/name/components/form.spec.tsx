import {
  render,
  fireEvent,
  waitFor,
  act,
  userEvent,
} from '@testing-library/react-native';
import { FormNames } from './form';
import { useStatusform } from '../../../hooks/statusFrom';
jest.mock('../../../hooks/statusFrom');
describe('<FormNames />', () => {
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
      <FormNames nextStep={nextStepMock} />
    );
    const inputName = getByPlaceholderText('*Luis...');
    const inputLast = getByPlaceholderText('*Malaga...');
    expect(inputName).toBeTruthy();
    expect(inputLast).toBeTruthy();
  });
  it('Error cuando el campo del nombre esta vacio', async () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText, getByText, queryAllByText } = render(
      <FormNames nextStep={nextStepMock} />
    );
    const input = getByPlaceholderText('*Luis...');
    fireEvent(input, 'onBlur', {
      target: { name: 'firstName' },
      nativeEvent: {},
      persist: jest.fn(),
    });
    await waitFor(() => {
      expect(getByText('El Nombre es requerido')).toBeTruthy();
      expect(nextStepMock).toHaveBeenCalledTimes(0);
    });
  });

  it('Error cuando el campo del nombre es menor a 2 caracteres', async () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText, getByText, queryAllByText } = render(
      <FormNames nextStep={nextStepMock} />
    );
    const input = getByPlaceholderText('*Luis...');
    fireEvent.changeText(input, 'A');
    fireEvent(input, 'onBlur', {
      target: { name: 'firstName' },
      nativeEvent: {},
      persist: jest.fn(),
    });
    await waitFor(() => {
      expect(
        getByText('El Nombre debe tener minimo 2 caracteres')
      ).toBeTruthy();
      expect(nextStepMock).toHaveBeenCalledTimes(0);
    });
  });

  it('Error cuando el campo del nombre tiene caracteres númericos', async () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText, getByText, queryAllByText } = render(
      <FormNames nextStep={nextStepMock} />
    );
    const input = getByPlaceholderText('*Luis...');
    fireEvent.changeText(input, '123');
    fireEvent(input, 'onBlur', {
      target: { name: 'firstName' },
      nativeEvent: {},
      persist: jest.fn(),
    });

    await waitFor(() => {
      expect(getByText('El nombre solo debe contener letras')).toBeTruthy();
      expect(nextStepMock).toHaveBeenCalledTimes(0);
    });
  });

  it('Error cuando el campo del apellido esta vacio', async () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <FormNames nextStep={nextStepMock} />
    );
    const input = getByPlaceholderText('*Malaga...');
    fireEvent(input, 'onBlur', {
      target: { name: 'lastName' },
      nativeEvent: {},
      persist: jest.fn(),
    });
    await waitFor(() => {
      expect(getByText('El Apellido es requerido')).toBeTruthy();
      expect(nextStepMock).toHaveBeenCalledTimes(0);
    });
  });

  it('Error cuando el campo del apellido es menor a 2 caracteres', async () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <FormNames nextStep={nextStepMock} />
    );
    const input = getByPlaceholderText('*Malaga...');
    fireEvent.changeText(input, 'A');
    fireEvent(input, 'onBlur', {
      target: { name: 'lastName' },
      nativeEvent: {},
      persist: jest.fn(),
    });

    await waitFor(() => {
      expect(
        getByText('El apellido debe tener minimo 2 caracteres')
      ).toBeTruthy();
      expect(nextStepMock).toHaveBeenCalledTimes(0);
    });
  });

  it('Error cuando el campo del apellido tiene caracteres númericos', async () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <FormNames nextStep={nextStepMock} />
    );
    const input = getByPlaceholderText('*Malaga...');
    fireEvent.changeText(input, 'Malaga1234');
    fireEvent(input, 'onBlur', {
      target: { name: 'lastName' },
      nativeEvent: {},
      persist: jest.fn(),
    });

    await waitFor(() => {
      expect(getByText('El apellido solo debe contener letras')).toBeTruthy();
      expect(nextStepMock).toHaveBeenCalledTimes(0);
    });
  });

  it('Llamada exitosa cuando los campos de FormName son validos', async () => {
    const nextStepMock = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <FormNames nextStep={nextStepMock} />
    );

    const firstNameInput = getByPlaceholderText('*Luis...');
    const lastNameInput = getByPlaceholderText('*Malaga...');
    const button = getByTestId('Enviar');
    await waitFor(() => {
      fireEvent.changeText(firstNameInput, 'Luis');
      fireEvent.changeText(lastNameInput, 'Malaga');
    });

    act(() => {
      fireEvent.press(button);
    });

    await waitFor(() => {
      expect(nextStepMock).toHaveBeenCalledTimes(1);
    });
  });
});
