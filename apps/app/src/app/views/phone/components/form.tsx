import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useStatusform } from '../../../hooks/statusFrom';
import { NARANJA } from '../../../const/color';
export interface FormPhone {
  phone: string;
}
export interface FormPhoneProps {
  nextStep?: () => void;
}

export const FormPhone = ({ nextStep }: FormPhoneProps) => {
  const [status, setName, setLast, setPhone] = useStatusform();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormPhone>({
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = (data: FormPhone) => {
    setPhone({
      valid: true,
      value: data.phone,
    });
    if (nextStep) {
      nextStep();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Número de Celular</Text>
      <Controller
        control={control}
        rules={{
          required: 'El Número es requerido',
          minLength: {
            value: 10,
            message: 'El Número debe tener exactamente 10 dígitos',
          },
          maxLength: {
            value: 10,
            message: 'El Número debe tener exactamente 10 dígitos',
          },
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'Solo se aceptan números',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="*22291111239"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="phone"
      />
      {errors.phone && (
        <Text style={styles.errorText}>{errors.phone.message}</Text>
      )}

      <View style={styles.buttoncontent}>
        <TouchableOpacity
          // disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
          style={{
            ...styles.buttonSumit,
            opacity: isValid ? 1 : 0.5,
          }}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    marginTop: 30,
  },
  label: {
    marginBottom: 5,
    // fontWeight: 'bold',
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
    color: 'black',
  },
  errorText: {
    color: 'red',
  },
  buttoncontent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  buttonSumit: {
    width: 200,
    height: 44,
    borderRadius: 50,
    backgroundColor: NARANJA,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
