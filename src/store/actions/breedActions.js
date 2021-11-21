import * as types from "../types";

const getBreeds = () => (dispatch) => {
  fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(async (response) => {
      const data = await response.json();
      const breeds = Object.keys(data.message);
      dispatch({
        type: types.FETCH_BREEDS_SUCCESS,
        payload: breeds,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_BREEDS_FAILURE,
        payload: error,
      });
    });
};

const setSelectedBreed = (breedName) => (dispatch) => {
  dispatch({
    type: types.BREED_SELECTED,
    payload: breedName,
  });
};

const getImages = (breed) => (dispatch) => {
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(async (response) => {
      const { message: images } = await response.json();
      dispatch({
        type: types.FETCH_IMAGES_SUCCESS,
        payload: images,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_IMAGES_FAILURE,
        payload: error,
      });
    });
};

export { getBreeds, setSelectedBreed, getImages };
