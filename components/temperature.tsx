import { StyleSheet, Text, View, TextInput, Button, /*PermissionsAndroid*/ } from 'react-native';
import { styles } from './styles.tsx'

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
        <Text style={{ textAlign: center }}>
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
      <Text style={{ textAlign: center }}>
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

      <View style={[styles.containerDetails, styles.minMax]}>
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

export { Temperature }