import axios from 'axios';
import {
  HOUSING_LIST_REQUEST,
  HOUSING_LIST_SUCCESS,
  HOUSING_LIST_FAIL,
  HOUSING_DETAILS_REQUEST,
  HOUSING_DETAILS_SUCCESS,
  HOUSING_DETAILS_FAIL,
  HOUSING_CREATE_REVIEW_REQUEST,
  HOUSING_CREATE_REVIEW_SUCCESS,
  HOUSING_CREATE_REVIEW_FAIL,
} from '../constants/housingConstants';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const listHousings = () => async (dispatch) => {
  try {
    dispatch({ type: HOUSING_LIST_REQUEST });
    const { data } = await axios.get(`${API_BASE_URL}/api/housing`);
    dispatch({ type: HOUSING_LIST_SUCCESS, payload: data });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : 'An unknown error occurred';
    dispatch({ type: HOUSING_LIST_FAIL, payload: errorMessage });
  }
};

export const listHousingDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: HOUSING_DETAILS_REQUEST });
    const { data } = await axios.get(`${API_BASE_URL}/api/housing/${id}`);
    dispatch({ type: HOUSING_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: HOUSING_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createHousingReview = (housingId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: HOUSING_CREATE_REVIEW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`${API_BASE_URL}/api/housing/${housingId}/reviews`, review, config);

    dispatch({
      type: HOUSING_CREATE_REVIEW_SUCCESS,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : 'An unknown error occurred';
    dispatch({
      type: HOUSING_CREATE_REVIEW_FAIL,
      payload: errorMessage,
    });
  }
};
