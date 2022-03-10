import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, /*PermissionsAndroid*/ } from 'react-native';
import { useState } from 'react'

import { styles } from './styles.tsx'
import { CitySelection } from './components/citySelection.tsx'
import { Temperature } from './components/temperature.tsx'

/*
const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
      {
        title: "Permissão de localização",
        message:
          "Weather Report precisa acessar sua localização para um atendimento imediato.",
        buttonNeutral: "Pergunte depois",
        buttonNegative: "Não autorizar",
        buttonPositive: "Autorizar"
      }
    )

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Permissão de localização conced
      a!");
    }

    else {
      console.log("Permissão de localização negada!");
    }
  }

  catch (err) {
    console.warn(err);
  }
}
*/

export default function App() {
  const [temperatureVisibility, setTemperatureVisibility] = useState(false)

  const [cityName, setCityName] = useState('undefined')
  const [country, setCountry] = useState('undefined')
  const [weatherIcon, setWeatherIcon] = useState('undefined.png')
  const [temperatureValue, setTemperatureValue] = useState(30)
  const [weatherDescription, setWeatherDescription] = useState('undefined')
  
  const [feels_likeValue, setfeels_likeValue] = useState(30)
  const [temperatureMax, setTemperatureMax] = useState(30)
  const [temperatureMin, setTemperatureMin] = useState(30)
  const [humidityValue, setHumidityValue] = useState(0)

  const [msgValue, setMsgValue] = useState('Informe sua cidade para começarmos!')

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.main}>
        <CitySelection
          setMsgValue={setMsgValue}
          setTemperatureVisibility={setTemperatureVisibility}
          setCityName={setCityName}
          setCountry={setCountry}
          setTemperatureValue={setTemperatureValue}
          setWeatherDescription={setWeatherDescription}
          setWeatherIcon={setWeatherIcon}
          setfeels_likeValue={setfeels_likeValue}
          setTemperatureMax={setTemperatureMax}
          setTemperatureMin={setTemperatureMin}
          setHumidityValue={setHumidityValue}
        />
        
        <Temperature
          msg={msgValue}
          city={cityName}
          country={country}
          icon={weatherIcon}
          temperature={temperatureValue}
          description={weatherDescription}
          feels_like={feels_likeValue}
          temp_max={temperatureMax}
          temp_min={temperatureMin}
          humidity={humidityValue}
          visibility={temperatureVisibility}
        />
      </View>
    </View>
  );
}