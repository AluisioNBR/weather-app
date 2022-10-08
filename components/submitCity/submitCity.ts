import axios from 'axios'

import { renderInformations, renderErr } from './render'

import type {
	FoundDataOfRequest,
	NotFoundDataOfRequest
} from '../../types/components/submitCity/data.types'

import type {
	submitCityParams,
  FetchWeatherInformationReturn,
  FetchWeatherInformationParams,
  VerifyResponseParams
} from '../../types/components/submitCity/submitCity.types'

async function submitCity(params: submitCityParams) {
	const information = await fetchWeatherInformation({
		cityValue: params.cityValue,
		setLoadingWeather: params.citySelectionProps.setLoadingWeather
	})

	verifyResponse({ information, citySelectionProps: params.citySelectionProps })
	params.setCityValue("")
}

async function fetchWeatherInformation(params: FetchWeatherInformationParams):
Promise<FetchWeatherInformationReturn> {
	let fetchResponse: FetchWeatherInformationReturn
	
	const	endpoint = `https://weather-webapp-tau.vercel.app/api/${params.cityValue}`
	const	requestParams = { myApiSecret: process.env.MY_API_SECRET }
	try {
		const data = await axios.get(endpoint, { params: requestParams })
		setTimeout(() => params.setLoadingWeather(false), 5000)
	  fetchResponse = await data.data
	}
	catch (error) {
		fetchResponse = {
			cod: 502,
			msg: "Ocorreu um problema com a conexão com o servidor. Aguarde um pouco e tente novamente!"
		}
	}

	return fetchResponse
}

function verifyResponse(params: VerifyResponseParams){
	if (params.information.cod === 200)
	  renderInformations(
			params.information as FoundDataOfRequest,
			params.citySelectionProps
		)
	else{
		const informationFailed = params.information as NotFoundDataOfRequest
	  renderErr(
			informationFailed.msg,
			params.citySelectionProps
		)
	}
}

export { submitCity }
