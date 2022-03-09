import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, /*PermissionsAndroid*/ } from 'react-native';
import { useState } from 'react'

import { styles } from './styles.tsx'

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

function CitySelection({
  setMsgValue,
  setTemperatureVisibility,
  setCityName,
  setCountry,
  setTemperatureValue,
  setWeatherDescription,
  setWeatherIcon,
  setfeels_likeValue,
  setTemperatureMax,
  setTemperatureMin,
  setHumidityValue
}){
  const [cityValue, setCityValue] = useState('')

  async function WeatherInf(){
    const inf = await fetch(`https://weather-webapp-seven.vercel.app/api/${cityValue}`)
    const infJSON = await inf.json()

    return infJSON
  }
  
  async function submitCity(){
      const inf = await WeatherInf()

      if(inf.cod == 200){
        setCityName(inf.city)
        setCountry(inf.country)
        setWeatherIcon(inf.icon)
        setTemperatureValue(inf.main.temperature)
        setWeatherDescription(inf.description)

        console.log(inf.main.feels_like)
        setfeels_likeValue(inf.main.feels_like)
        setTemperatureMax(inf.main.temp_max)
        setTemperatureMin(inf.main.temp_min)
        setHumidityValue(inf.main.humidity)

        setTemperatureVisibility(true)
      }

      else {
        setMsgValue(inf.msg)
        setTemperatureVisibility(false)
      }

      return ''
  }

  return(
      <View style={{ width: '80%',padding: 16 }}>
        <View>
          <View>
            <Text style={{ color: '#fdfdfd', fontSize: 20 }}>
              Informe sua cidade:
            </Text>
          </View>
          <TextInput required defaultValue={cityValue} onChangeText={(newText) => setCityValue(newText)} style={[styles.formCityButtonInput, { backgroundColor: '#fdfdfd', borderWidth: 2 }]}/>

          <Button onPress={() => setCityValue(submitCity())} color='gray' title='Selecionar
          ' />
        </View>
      </View>
    )
}

function MainTemperature(props){
  return (
    <View style={[styles.MainTemperature, { padding: 16 }]}>
        <Text>
          <Text style={styles.local}>
            {props.city}, {props.country}
          </Text>
        </Text>

        <View>
          <View>
            <Text style={[styles.currentTemperatureWeatherDescription, styles.currentTemperature]}>
              {props.temperature}°C
            </Text>
          </View>

          <View>
            <Text style={styles.currentTemperatureWeatherDescription}>
              {props.description}
            </Text>
          </View>
        </View>
      </View>
  )
}

function TemperatureDetails(props){
  return(
    <View style={styles.temperatureDetails}>
      <View style={styles.containerDetails}>
        <Text style={{ textAlign: center }}>
          Sensação Térmica
        </Text>

        <View style={styles.categoryValue}>
          <Text>
            {props.feels_like}°C
          </Text>
        </View>
      </View>

      <View style={[styles.containerDetails, styles.minMax]}>
        <View style={styles.minMaxDiv}>
          <Text style={{ textAlign: center }}>
            Max:
          </Text>

          <View style={styles.categoryValue}>
            <Text>
              {props.temp_max}°C
            </Text>
          </View>
        </View>
        
        <View style={styles.minMaxDiv}>
          <Text style={{ textAlign: center }}>
            Min:
          </Text>

          <View style={styles.categoryValue}>
            <Text>
              {props.temp_min}°C
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.containerDetails}>
        <Text style={{ textAlign: center }}>
          Humidade
        </Text>

        <View style={styles.categoryValue}>
          <Text>
            {props.humidity}%
          </Text>
        </View>
      </View>
    </View>
  )
}

function Temperature(props){
  if(props.visibility) return (
    <View>
      <MainTemperature
        city={props.city}
        country={props.country}
        icon={props.icon}
        temperature={props.temperature}
        description={props.description}
      />

      <TemperatureDetails
        feels_like={props.feels_like}
        temp_max={props.temp_max}
        temp_min={props.temp_min}
        humidity={props.humidity}
      />
    </View>
    )

  else return(
      <View style={{ alignItems: 'center', justifyContent: 'center',padding: 8 }}>
        <Text style={styles.MainTemperature}>
          Informe sua cidade para começarmos!
        </Text>
      </View>
    )
}

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