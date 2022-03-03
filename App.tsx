import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'

function CitySelection({ setTemperatureVisibility, setCityName, setCountry, setTemperatureValue, setWeatherDescription }){
  const [cityValue, setCityValue] = useState('')

  async function WeatherInf(){
    const inf = await fetch(`https://weather-webapp-seven.vercel.app/api/${cityValue}`)
    const infJSON = await inf.json()

    return infJSON
  }
  
  async function submitCity(){
    if(cityValue.trim() == '') setTemperatureVisibility(false)

    else {
      const inf = await WeatherInf()

      setCityName(inf.city)
      setCountry(inf.country)
      setTemperatureValue(inf.temperature)
      setWeatherDescription(inf.description)
      setTemperatureVisibility(true)

      return ''
      console.log(cityValue)
    }
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

          <Button onPress={() => setCityValue(submitCity())} style={[styles.formCityButtonInput]} title='Selecionar
          ' />
        </View>
      </View>
    )
}

function MainTemperature(props){
  if(props.visibility) return (
    <View style={[styles.MainTemperature, { padding: 16 }]}>
      <Text>
        <Text style={styles.local}>
          {props.city}, {props.country}
        </Text>
      </Text>

      <View>
        <View>
          <Text style={styles.currentTemperatureWeatherDescription}>
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
  const [temperatureValue, setTemperatureValue] = useState(30)
  const [weatherDescription, setWeatherDescription] = useState('undefined')

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.main}>
        <CitySelection setTemperatureVisibility={setTemperatureVisibility} setCityName={setCityName} setCountry={setCountry} setTemperatureValue={setTemperatureValue} setWeatherDescription={setWeatherDescription} />
        <MainTemperature city={cityName} country={country} temperature={temperatureValue} description={weatherDescription} visibility={temperatureVisibility} />
      </View>
    </View>
  );
}

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

  formCity: {
    color: '#fdfdfd',
    fontSize: 20
  },

  formCityButtonInput: {
    fontSize: 20,
    padding: 8
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
    textAlign: 'center'
  }
});