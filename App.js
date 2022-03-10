import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button /*PermissionsAndroid*/ } from 'react-native';
import { useState } from 'react'

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
  }

  return(
      <View style={{ width: '80%',padding: 16 }}>
        <View>
          <View>
            <Text style={{ color: '#fdfdfd', fontSize: 20 }}>
              Informe sua cidade:
            </Text>
          </View>
          <TextInput defaultValue={cityValue} onChangeText={(newText) => setCityValue(newText)} style={[styles.formCityButtonInput, { backgroundColor: '#fdfdfd', borderWidth: 2 }]}/>

          <Button onPress={() => { setCityValue(''); submitCity() }} color='gray' title='Selecionar' />
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

function FeelsLikeHumidity(props){
	return(
	  <View style={styles.containerDetails}>
        <Text style={{ textAlign: 'center' }}>
          {props.name}
        </Text>

        <View>
          <Text style={styles.categoryValue}>
            {props.value}
          </Text>
        </View>
      </View>
	)
}

function TempMinMax(props){
	return (
    <View style={styles.minMaxDiv}>
      <Text style={{ textAlign: 'center' }}>
        {name}:
      </Text>

      <View>
        <Text style={styles.categoryValue}>
          {props.temp}°C
        </Text>
      </View>
    </View>
	)
}

function TemperatureDetails(props){
  return(
    <View style={styles.temperatureDetails}>
      <FeelsLikeHumidity name='Sensação Térmica' value={`${props.feels_like}°C`}/>

      <View style={[styles.containerDetails, styles.minMaxDiv]}>
      	<TempMinMax temp={props.temp_max} name='Max'/>
      	<TempMinMax temp={props.temp_min} name='Min'/>
      </View>

      <FeelsLikeHumidity name='Humidade' value={`${props.humidity}%`}/>
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
    justifyContent: 'flex-start',
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
    fontWeight: '400'
  }
});