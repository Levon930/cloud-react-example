import React from 'react';

import { ChipsProps } from './Chips.types';

import { Styled } from './Chips.styled';

/**
 * @deprecated don't use it
 */
const Chips: React.FC<ChipsProps> = ({ chips, handleDelete }) => {
  return (
    <Styled.ChipsContainer>
      {chips.map((chip) =>
        handleDelete ? (
          <Styled.Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
        ) : (
          <Styled.Chip key={chip} label={chip} />
        ),
      )}
    </Styled.ChipsContainer>
  );
};

export default Chips;
