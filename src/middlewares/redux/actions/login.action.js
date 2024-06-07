import axios from "axios";
import { AUTH, LOGIN } from "../../misc";
import { URL_API } from "../../config";
import { setUserToken } from "../../helpers";

export function login(formData, navigate) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${URL_API}/login-inner`, formData);

      dispatch({
        type: LOGIN,
        payload: response.data,
      });

      setUserToken(response.data)

      navigate(`/auth/${response.data}`);
      
    } catch (error) {
      console.error(error);
    }
  }
}

export function auth(token, navigate) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/auth/${token}`);

      dispatch({
        type: AUTH,
        payload: response.data,
      });
      
      navigate ? navigate("/") : null

    } catch (error) {
/*       navigate("/auth/error");
 */      console.error(error);
    }
  }
}
