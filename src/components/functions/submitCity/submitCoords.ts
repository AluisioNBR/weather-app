import axios from "axios";
import { FetchWeatherInformationReturn } from "./types/submitCity.types";
import { CitySelectionProps } from "../../../screens/Home/types/CitySelection.types";
import { verifyResponse } from "./verifyResponse";
// @ts-ignore
import { MY_API_SECRET } from "@env";

interface Coords {
  lat: number;
  lon: number;
}

export async function submitCoords(
  coords: Coords,
  citySelectionProps: CitySelectionProps
) {
  const { lat, lon } = coords;
  let fetchResponse: FetchWeatherInformationReturn;

  const endpoint = `https://weather-webapp-tau.vercel.app/api/coords`;
  const requestParams = {
    lat: lat,
    lon: lon,
    myApiSecret: MY_API_SECRET,
  };
  try {
    const data = await axios.get(endpoint, { params: requestParams });
    fetchResponse = await data.data;
  } catch (error) {
    fetchResponse = {
      cod: 502,
      msg: "Ocorreu um problema com a conexão com o servidor. Aguarde um pouco e tente novamente!",
    };
  }

  verifyResponse({
    information: fetchResponse,
    citySelectionProps: citySelectionProps,
  });
}
