import React from "react";

import withImages from "hoc/withImages";
import { SelectorContainer, Select } from "./DogBreedSelector.styled";

const DogBreedSelector = ({ breeds, setSelectedBreed }) => {
  const handleSelectBreed = ({ target }) => setSelectedBreed(target.value);

  return (
    <SelectorContainer>
      <Select name="breeds" id="breeds" onChange={handleSelectBreed}>
        <option value="">Selecciona una raza de perro</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </Select>
    </SelectorContainer>
  );
};

export default withImages(DogBreedSelector);
