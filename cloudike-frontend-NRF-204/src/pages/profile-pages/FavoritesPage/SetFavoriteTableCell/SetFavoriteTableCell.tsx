import { Document, useSetFavoriteMutation } from '@api';
import { StarSmallIcon } from '@components/SvgComponents';

import { Styled } from './SetFavoriteTableCell.styled';

const SetFavoriteTableCell = (doc: Document) => {
  const [setFavorite] = useSetFavoriteMutation({ refetchQueries: ['Favorites'] });
  const handleOnClick = async () => {
    await setFavorite({
      variables: { input: { path: doc.path } },
    });
  };

  return (
    <Styled.WrapperBox>
      <div>{doc.path}</div>
      <Styled.FavoriteIconBox onClick={handleOnClick}>
        <StarSmallIcon />
      </Styled.FavoriteIconBox>
    </Styled.WrapperBox>
  );
};

export default SetFavoriteTableCell;
