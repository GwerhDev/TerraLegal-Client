import axios from "axios";
import { URL_API } from "../../config";
import { CONTENT } from "../../misc";

export function getContent() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/get-content/`);

      dispatch({ 
        type: CONTENT,
        payload: response.data 
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}