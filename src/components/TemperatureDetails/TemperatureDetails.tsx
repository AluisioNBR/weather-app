import {
  AmountOfRain,
  AmountOfSnow,
} from "../statements/types/WeatherPreciptationState.types";
import { TemperatureDetailsProps } from "../types/details.types";
import { TemperatureDetailsOnClearWeather } from "./TemperatureDetailsOnClearWeather";
import { TemperatureDetailsOnPreciptation } from "./TemperatureDetailsOnPreciptation";

export function TemperatureDetails(props: TemperatureDetailsProps) {
  if (isRainy(props.rain.rainy)) {
    const amountOfRain = props.rain as AmountOfRain;
    return (
      <TemperatureDetailsOnPreciptation
        humidity={`${props.humidity}%`}
        uvi={`${props.uvi}%`}
        preciptation={`${amountOfRain.rain}mm`}
      >
        Chuva
      </TemperatureDetailsOnPreciptation>
    );
  } else if (isSnowing(props.snow.snowed)) {
    const amountOfSnow = props.snow as AmountOfSnow;
    return (
      <TemperatureDetailsOnPreciptation
        humidity={`${props.humidity}%`}
        uvi={`${props.uvi}%`}
        preciptation={`${amountOfSnow.snow}mm`}
      >
        Neve
      </TemperatureDetailsOnPreciptation>
    );
  } else
    return (
      <TemperatureDetailsOnClearWeather
        humidity={`${props.humidity}%`}
        uvi={`${props.uvi}%`}
      />
    );
}

function isRainy(rainy: string) {
  return rainy === "rain";
}

function isSnowing(snowing: string) {
  return snowing === "rain";
}
