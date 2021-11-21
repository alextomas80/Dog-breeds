import React from "react";
import { connect } from "react-redux";

import { setSelectedBreed as setSelectedBreedAction } from "store/actions/breedActions";

const withImagesHoc = (WrappedComponent) => {
  const withImages = (props) => {
    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = (state) => {
    const { breeds } = state;
    const { data: breedList, selectedBreed, images } = breeds;

    return {
      breeds: breedList,
      images,
      selectedBreed,
    };
  };

  const mapStateToDispatch = (dispatch) => {
    return {
      setSelectedBreed: (breed) => dispatch(setSelectedBreedAction(breed)),
    };
  };

  return connect(mapStateToProps, mapStateToDispatch)(withImages);
};

export default withImagesHoc;
