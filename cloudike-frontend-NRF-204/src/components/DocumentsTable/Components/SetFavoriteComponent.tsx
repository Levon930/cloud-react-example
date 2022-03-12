import React from 'react';
import { Star, StarBorder } from '@material-ui/icons';

import { useSetFavoriteMutation } from '@api';
import { SetFavoriteProps } from './SetFavoriteComponent.types';

import { Styled } from '../DocumentsTable.styled';

export default ({ path, isFavorite }: SetFavoriteProps) => {
  const [setFavorite] = useSetFavoriteMutation({ refetchQueries: ['Documents'] });

  const handleSetFavorite = () => {
    setFavorite({
      variables: {
        input: { path },
      },
    });
  };

  return (
    <Styled.Favorite onClick={handleSetFavorite} isFavorite={isFavorite}>
      {isFavorite ? <Star /> : <StarBorder />}
    </Styled.Favorite>
  );
};
