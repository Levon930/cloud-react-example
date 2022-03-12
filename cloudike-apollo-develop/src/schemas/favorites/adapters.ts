import { CommonListInput } from '../../generated';

const responseFavoriteAdapter = (input) => {
  const {
    is_favorite: isFavorite,
    is_in_trash: isTrashed,
    deleted: isDeleted,
    owner_name: ownerName,
    ...rest
  } = input;

  const type = rest.folder ? 'DocumentFolder' : 'DocumentFile';

  return {
    ...rest,
    isFavorite,
    type,
    isTrashed,
    isDeleted,
    ownerName,
  };
};

export const responseFavoritesAdapter = ({
  content,
  is_last_page,
}: {
  content: Array<Record<string, unknown>>;
  is_last_page: boolean;
}) => {
  return {
    content: content.map(responseFavoriteAdapter),
    isLastPage: is_last_page,
  };
};

export const requestFavoritesAdapter = (input: CommonListInput) => {
  const { pagination, sort } = input;
  const { itemsPerPage, page } = pagination;

  return {
    limit: itemsPerPage,
    offset: itemsPerPage * page,
    ...(sort && { order: sort.order, order_by: sort.orderBy }),
  };
};

export const responseSetFavoriteAdapter = (data) => {
  return responseFavoriteAdapter(data);
};
