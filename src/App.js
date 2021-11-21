/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from "react-redux";
import { useEffect } from "react";

import GlobalStyle from "./GlobalStyle";
import {
  getBreeds as getBreedsAction,
  getImages as getImagesAction,
} from "./store/actions/breedActions";

import Gallery from "./components/Gallery";
import Layout from "./components/Layout";
import DogBreedSelector from "./components/DogBreedSelector";
import Spinner from "components/Spinner";

const App = ({ getBreedList, selectedBreed, getImages, loading, error }) => {
  useEffect(() => getBreedList(), []);

  useEffect(() => {
    if (selectedBreed) {
      getImages(selectedBreed);
    }
  }, [selectedBreed]);

  if (error) {
    return <div>Ops! Hemos encontrado un error.</div>;
  }

  return (
    <>
      <GlobalStyle />
      {loading && <Spinner />}
      <Layout>
        <DogBreedSelector />
        {selectedBreed && <Gallery />}
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  const { breeds } = state;
  const { data: breedList, selectedBreed, loading, error } = breeds;

  return {
    breeds: breedList,
    selectedBreed,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBreedList: () => dispatch(getBreedsAction()),
    getImages: (breed) => dispatch(getImagesAction(breed)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
