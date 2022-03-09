import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#333'
  },

  main: {
    flex: 1,
    alignItems: 'center'
  },

  temperatureContainer: {
    flexDirection: 'column',
    margin: 16
  },

  formCity: {
    color: '#fdfdfd',
    fontSize: 20
  },

  formCityButtonInput: {
    fontSize: 20,
    padding: 8
  },

  MainTemperatureContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  MainTemperature: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: 240,
    height:  240,
    padding: 24,
    borderRadius: 24,
    
    backgroundColor: '#0C42FF',
    color: '#fdfdfd',
    fontSize: 25,

    textAlign: 'center'
  },

  local: {
    color: '#fdfdfd',
    fontSize: 25,
    textAlign: 'center'
  },

  currentTemperatureWeatherDescription: {
    color: '#fdfdfd',
    fontSize: 25,
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },

  currentTemperature:{
    justifyContent: 'center',
    flexDirection: 'row'
  },

  temperatureDetails: {
    flexDirection: 'column',
    justifyContent: 'start',
    margin: 16
  },

  containerDetails: {
    width: 160,
    height: 160,

    padding: 24,
    borderRadius: 16,

    backgroundColor: '#F216AA',
    color: '#fdfdfd'
  },

  minMaxDiv: {
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  categoryValue: {
    textAlign: 'center',
    fontWeight: 400
  }
});

export { styles }