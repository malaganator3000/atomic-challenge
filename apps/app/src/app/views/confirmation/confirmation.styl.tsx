import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  titleContent: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  title: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
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
  zoneDescriptions:{
    paddingHorizontal:15
  },
  descriptioncontent: {
    // paddingHorizontal: 5,
    marginVertical: 15,
  },
  descriptionText: {
    color: 'white',
    fontSize: 18,
  },
  imageContainer: {
    marginTop: 20,
  },
  image: {
    height: 250,
  },
});
