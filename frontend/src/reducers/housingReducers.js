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
    HOUSING_CREATE_REVIEW_RESET,
  } from '../constants/housingConstants';
  
  export const housingListReducer = (state = { housings: [] }, action) => {
    switch (action.type) {
      case HOUSING_LIST_REQUEST:
        return { loading: true, housings: [] };
      case HOUSING_LIST_SUCCESS:
        return { loading: false, housings: action.payload };
      case HOUSING_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const housingDetailsReducer = (
    state = { housing: { reviews: [] } },
    action
  ) => {
    switch (action.type) {
      case HOUSING_DETAILS_REQUEST:
        return { loading: true, ...state };
      case HOUSING_DETAILS_SUCCESS:
        return { loading: false, housing: action.payload };
      case HOUSING_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const housingReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case HOUSING_CREATE_REVIEW_REQUEST:
        return { loading: true };
      case HOUSING_CREATE_REVIEW_SUCCESS:
        return { loading: false, success: true };
      case HOUSING_CREATE_REVIEW_FAIL:
        return { loading: false, error: action.payload };
      case HOUSING_CREATE_REVIEW_RESET:
        return {};
      default:
        return state;
    }
  };
  