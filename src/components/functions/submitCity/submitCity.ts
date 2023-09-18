import axios from "axios";
import type {
  submitCityParams,
  FetchWeatherInformationReturn,
  FetchWeatherInformationParams,
} from "./types/submitCity.types";
import { verifyResponse } from "./verifyResponse";
// @ts-ignore
import { MY_API_SECRET } from "@env";

export async function submitCity(params: submitCityParams) {
  const information = await fetchWeatherInformation(params.cityValue);

  verifyResponse({
    information,
    citySelectionProps: params.citySelectionProps,
  });
  params.setCityValue("");
}

async function fetchWeatherInformation(
  cityValue: string
): Promise<FetchWeatherInformationReturn> {
  let fetchResponse: FetchWeatherInformationReturn;

  const endpoint = `https://weather-webapp-tau.vercel.app/api/${cityValue}`;
  const requestParams = {
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

  return fetchResponse;
}
