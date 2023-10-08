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
import * as Yup from 'yup';
import { Formik } from 'formik';
import { SOLO_NUMEROS } from '../../../utils/regularExp';
const PhoneSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(SOLO_NUMEROS, 'Solo se aceptan números y un máximo de 10 dígitos')
    .min(10, 'El Número debe tener exactamente 10 dígitos')
    .max(10, 'El Número debe tener exactamente 10 dígitos')
    .required('El Número es requerido'),
});
export interface FormPhone {
  phone: string;
}
export interface FormPhoneProps {
  nextStep?: () => void;
}

export const FormPhone = ({ nextStep }: FormPhoneProps) => {
  const initialValues: FormPhone = { phone: '' };
  const [status, setName, setLast, setPhone] = useStatusform();
  const onSubmit = (values) => {
    setPhone({ valid: true, value: values.phone });
    if (nextStep) {
      nextStep();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PhoneSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <View style={styles.container}>
          <Text style={styles.label}>Número de Celular</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            placeholder="*22291111239"
          />
          {errors.phone && touched.phone && (
            <Text style={styles.errorText}>{errors.phone.toString()}</Text>
          )}

          <View style={styles.buttoncontent}>
            <TouchableOpacity
              testID="Continuar"
              disabled={!isValid}
              onPress={() => handleSubmit()}
              style={{ ...styles.buttonSumit, opacity: isValid ? 1 : 0.5 }}
            >
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
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
