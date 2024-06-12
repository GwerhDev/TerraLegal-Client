import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";
import { ADMIN_CONTENT, SET_UPDATING_STATE } from "../../misc";
import { getLastsContent } from "./content.action";

export function getContent() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/admin/management-content/`, options());

      dispatch({
        type: ADMIN_CONTENT,
        payload: response.data
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export function createContent(formData, file, navigate) {
  return async function (dispatch) {
    try {
      dispatch(setUpdatingState(true));

      const fileData = {
        mimetype: file.type,
        originalname: file.name
      };

      const response = await axios.post(
        `${URL_API}/admin/management-content/create`,
        { title: formData.title, description: formData.description, published: formData.published, fileData },
        options()
      );

      await axios.put(response.data.presigned, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      dispatch(getLastsContent());
      
      navigate(`/admin/dashboard`);
      dispatch(setUpdatingState(false));

    } catch (error) {
      console.error(error);
    }
  }
}

export function setUpdatingState(payload) {
  return async function (dispatch) {
    dispatch({
      type: SET_UPDATING_STATE,
      payload
    });
  }
}