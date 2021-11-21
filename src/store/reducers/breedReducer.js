import * as types from "../types";

const initialState = {
  data: [],
  images: [],
  loading: true,
  selectedBreed: "",
};

const breedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BREEDS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...action.payload],
      };
    case types.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    case types.BREED_SELECTED:
      return {
        ...state,
        selectedBreed: action.payload,
      };
    default:
      return state;
  }
};

export default breedReducer;
