import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
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
    margin: 5,
  },
  title: {
    flex: 3,
    alignItems: 'center',
    // marginHorizontal: 10,
    paddingHorizontal: 10,
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 400,
  },
});
