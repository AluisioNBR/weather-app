import { StyleSheet, Text, View, TextInput, Button, /*PermissionsAndroid*/ } from 'react-native';
import { styles } from './styles.tsx'

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

          <Button onPress={() => setCityValue(submitCity())} color='gray' title='Selecionar' />
        </View>
      </View>
    )
}

export { CitySelection }