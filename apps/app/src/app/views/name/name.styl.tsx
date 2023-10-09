import { StyleSheet, Dimensions } from 'react-native';
import { HeaderHeight } from '../../components/header';
export const { height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    height:height-HeaderHeight,
    width: '100%',
    
    // backgroundColor: 'blue',
  },
  content: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  titleContent: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:5
  },
  title: {
    flex: 3,
    alignItems: 'center',
    // marginHorizontal: 10,
    paddingHorizontal:10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titleText: {
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    textTransform: 'uppercase',
    includeFontPadding: false,
    height: 39,
  },
  descriptioncontent: {
    paddingHorizontal: 20,
  },
  descriptionText: {
    color: 'white',
    fontSize: 18,
  },
  containerForm: {
    paddingHorizontal: 20,
  },
  imageContainer: {
    // marginTop: 20,
    flex: 1,
    position:"absolute",
    top:height - HeaderHeight - 150,
    zIndex:0

  },
  image: {
    height: 400,
  },
});
