import axios from "axios";
import { URL_API } from "../../config";
import { CONTENT, CONTENT_DETAILS, LASTS_CONTENT } from "../../misc";

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

export function getLastsContent() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/get-content/lasts`);

      dispatch({ 
        type: LASTS_CONTENT,
        payload: response.data 
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

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