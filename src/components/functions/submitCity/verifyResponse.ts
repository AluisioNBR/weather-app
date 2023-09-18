import { renderInformations, renderErr } from "./render";
import { FoundDataOfRequest, NotFoundDataOfRequest } from "./types/data.types";
import { VerifyResponseParams } from "./types/submitCity.types";

export function verifyResponse(params: VerifyResponseParams) {
  if (params.information.cod === 200)
    renderInformations(
      params.information as FoundDataOfRequest,
      params.citySelectionProps
    );
  else {
    const informationFailed = params.information as NotFoundDataOfRequest;
    renderErr(informationFailed.msg, params.citySelectionProps);
  }
}
