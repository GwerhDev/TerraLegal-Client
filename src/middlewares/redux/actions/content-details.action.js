import axios from "axios";
import { CONTENT_DETAILS } from "../../misc";
import { URL_API } from "../../config";

export function getContentDetails(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/get-content/${id}`);

      dispatch({ 
        type: CONTENT_DETAILS,
        payload: response.data 
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
