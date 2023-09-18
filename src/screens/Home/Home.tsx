import {
  useState,
  useEffect,
  useReducer,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import { View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { CitySelection } from "./components/CitySelection/CitySelection";
import { CurrentTemperature } from "./components/CurrentTemperature";
import { HourlyTemperaturesContainer } from "./components/HourlyTemperaturesContainer";
import { DailyTemperaturesContainer } from "./components/DailyTemperatureContainer";
import { AnimatedLoading } from "../../components/AnimatedLoading/AnimatedLoading";

import {
  weatherInitialValue,
  weatherReducer,
} from "../../components/statements/weatherStateReducer";
import { CurrentWeather } from "../../components/statements/types/CurrentWeather.types";
import { DayWeather } from "../../components/statements/types/DayWeather.types";
import { HourWeather } from "../../components/statements/types/HourWeather.types";
import { AppMsg } from "./types/AppMsg.interface";
import { useForegroundPermissions } from "expo-location";

async () => SplashScreen.preventAutoHideAsync();

export function Home() {
  const [status, requestPermission] = useForegroundPermissions();

  useEffect(() => {
    (async () => {
      const res = await requestPermission();
    })();
  }, []);

  const [weatherState, weatherDispatch] = useReducer(
    weatherReducer,
    weatherInitialValue
  );

  const setLocalization = useCallback((city: string, state: string) => {
    weatherDispatch({ type: "city", value: city });
    weatherDispatch({ type: "state", value: state });
  }, []);

  const setCurrentWeather = useCallback((currentWeather: CurrentWeather) => {
    weatherDispatch({ type: "currentWeather", value: currentWeather });
  }, []);

  const setHourlyWeather = useCallback((hourlyWeather: HourWeather[]) => {
    weatherDispatch({ type: "hourlyWeather", value: hourlyWeather });
  }, []);

  const setDailyWeather = useCallback((dailyWeather: DayWeather[]) => {
    weatherDispatch({ type: "dailyWeather", value: dailyWeather });
  }, []);

  const [temperatureVisibility, setTemperatureVisibility] = useState(false);
  const [msgValue, setMsgValue] = useState<AppMsg>({
    msg: "",
    duration: 0,
  });

  const [appLoaded, setAppLoaded] = useState(false);
  const [fontLoaded] = useFonts({
    Poppins: require("../../../assets/Poppins/Poppins-Regular.ttf"),
  });

  let loadingFont = setInterval(() => {
    if (!fontLoaded) setAppLoaded(false);
    else if (fontLoaded) {
      setAppLoaded(true);
    }
    console.log(appLoaded);
  }, 1000);

  useEffect(() => {
    if (appLoaded) clearInterval(loadingFont);
  }, [appLoaded]);

  const counterAppLoadedRenders = useRef(0);
  useEffect(() => {
    if (appLoaded && counterAppLoadedRenders.current === 0) {
      counterAppLoadedRenders.current = 1;
      SplashScreen.hideAsync();
    }
  }, [appLoaded, counterAppLoadedRenders]);

  if (!fontLoaded) return <AnimatedLoading />;
  else
    return (
      <View className="flex-1 items-center bg-black-main p-4">
        <StatusBar style="auto" />

        <View className="flex-1 pt-8">
          <CitySelection
            city={weatherState.city}
            state={weatherState.state}
            setMsgValue={setMsgValue}
            setTemperatureVisibility={setTemperatureVisibility}
            setLocalization={setLocalization}
            setCurrentWeather={setCurrentWeather}
            setHourlyWeather={setHourlyWeather}
            setDailyWeather={setDailyWeather}
          />

          <CurrentTemperature
            msg={msgValue}
            visibility={temperatureVisibility}
            city={weatherState.city}
            state={weatherState.state}
          >
            {weatherState.currentWeather}
          </CurrentTemperature>

          <HourlyTemperaturesContainer>
            {weatherState.hourlyWeather}
          </HourlyTemperaturesContainer>

          <DailyTemperaturesContainer>
            {weatherState.dailyWeather}
          </DailyTemperaturesContainer>
        </View>
      </View>
    );
}
