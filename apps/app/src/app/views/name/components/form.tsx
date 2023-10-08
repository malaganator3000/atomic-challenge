import {
  Text,
  View,
  TextInput,
  Appearance,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useStatusform } from '../../../hooks/statusFrom';
import { NARANJA } from '../../../const/color';
import { useEffect, useState } from 'react';
export interface FormName {
  firstName: string;
  lastName: string;
}
export interface FormNamesProps {
  nextStep?: () => void;
}

export const FormNames = ({ nextStep }: FormNamesProps) => {
  const [status, setName, setLast, setPhone] = useStatusform();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormName>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  console.log(errors);
  const onSubmit = (data: FormName) => {
    setName({
      valid: true,
      value: data.firstName,
    });
    setLast({
      valid: true,
      value: data.lastName,
    });

    if (nextStep) {
      nextStep();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre(s)</Text>
      <Controller
        control={control}
        rules={{
          required: 'N1ombre es requerido',
          minLength: {
            value: 2,
            message: 'El nombre debe tener minimo 2 caracteres',
          },
          maxLength: {
            value: 100,
            message: 'El nombre no debe exceder los 100 caracteres',
          },
          pattern: {
            value: /^[A-Za-z\s]+$/i,
            message: 'El nombre solo debe contener letras',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="*Luis ..."
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && (
        <Text style={styles.errorText}>{errors.firstName.message}</Text>
      )}

      <Text style={styles.label}>Apellidos</Text>
      <Controller
        control={control}
        rules={{
          required: 'Apellido es requerido',
          minLength: {
            value: 2,
            message: 'El apellido debe tener minimo 2 caracteres',
          },
          maxLength: {
            value: 100,
            message: 'El apellido no debe exceder los 100 caracteres',
          },
          pattern: {
            value: /^[A-Za-z\s]+$/i,
            message: 'El apellido solo debe contener letras',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="*Malaga..."
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {errors.lastName && (
        <Text style={styles.errorText}>{errors.lastName.message}</Text>
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
          <Text style={styles.buttonText}>Enviar</Text>
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
