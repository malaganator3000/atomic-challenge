import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useStatusform } from '../../../hooks/statusFrom';
import { NARANJA } from '../../../const/color';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { SOLO_LETRAS } from '../../../utils/regularExp';

const NameSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'El Nombre debe tener minimo 2 caracteres')
    .max(100, 'El nombre no debe exceder los 100 caracteres')
    .matches(SOLO_LETRAS, 'El nombre solo debe contener letras')
    .required('El Nombre es requerido'),
  lastName: Yup.string()
    .min(2, 'El apellido debe tener minimo 2 caracteres')
    .max(100, 'El apellido no debe exceder los 100 caracteres')
    .matches(SOLO_LETRAS, 'El apellido solo debe contener letras')
    .required('El Apellido es requerido'),
});
export interface FormName {
  firstName: string;
  lastName: string;
}
export interface FormNamesProps {
  nextStep?: () => void;
}

export const FormNames = ({ nextStep }: FormNamesProps) => {
  const [status, setName, setLast, setPhone] = useStatusform();
  const onSubmit = (values) => {
    setName({ valid: true, value: values.firstName });
    setLast({ valid: true, value: values.lastName });
    if (nextStep) {
      nextStep();
    }
  };

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '' }}
      validationSchema={NameSchema}
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
          <Text style={styles.label}>Nombre(s)</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
            placeholder="*Luis..."
          />
          {errors.firstName && touched.firstName && (
            <Text style={styles.errorText}>{errors.firstName.toString()}</Text>
          )}

          <Text style={styles.label}>Apellidos</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
            placeholder="*Malaga..."
          />
          {errors.lastName && touched.lastName && (
            <Text style={styles.errorText}>{errors.lastName.toString()}</Text>
          )}

          <View style={styles.buttoncontent}>
            <TouchableOpacity
              testID="Enviar"
              disabled={!isValid}
              onPress={() => handleSubmit()}
              style={{ ...styles.buttonSumit, opacity: isValid ? 1 : 0.5 }}
            >
              <Text style={styles.buttonText}>Enviar</Text>
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
