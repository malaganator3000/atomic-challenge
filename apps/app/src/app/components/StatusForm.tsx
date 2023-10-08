import { View, Text, StyleSheet } from 'react-native';
import { NARANJA } from '../const/color';
import IconButton from './IconButton';
import { useStatusform } from '../hooks/statusFrom';
import { StatusForm } from '../store/types/NetworkingState';
const calcularPorcentaje = (status: StatusForm) => {
  if (status.name.valid && status.last.valid && status.phone.valid) {
    return '100%';
  }

  if (status.name.valid && status.last.valid) {
    return '66%';
  }

  if (status.name.valid) {
    return '33%';
  }

  return '0%';
};
export interface StatusformProps {}

export function Statusform({}: StatusformProps) {
  const [status] = useStatusform();

  const porcentaje = calcularPorcentaje(status);

  const step1IconSource =
    status.name.valid && status.last.valid
      ? require('../../assets/checkmark.png')
      : require('../../assets/1fill.png');

  const step2IconSource = status.phone.valid
    ? require('../../assets/checkmark.png')
    : status.name.valid && status.last.valid
    ? require('../../assets/2fill.png')
    : require('../../assets/2.png');
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.stepsContent}>
          <IconButton width={24} height={24} iconSource={step1IconSource} />
          <IconButton width={24} height={24} iconSource={step2IconSource} />
        </View>
        <View style={styles.linecontent}>
          <View
            style={{
              ...styles.line,
              width: porcentaje,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor:"red"
  },
  content: {
    width: '100%',
    // marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  stepsContent: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 35,
  },
  linecontent: {
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'white',
    // marginHorizontal:30
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  line: {
    backgroundColor: NARANJA,
    height: 15,
    borderRadius: 50,
  },
});
