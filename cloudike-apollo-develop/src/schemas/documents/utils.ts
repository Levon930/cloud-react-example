import { toCamelCase } from '../../utils';

interface Document {
  type: string;
  path: string;
  bytes: number;
  modified: string;
}

export const documentsMapper = (data) => {
  const { content } = data;

  data.content = content.map((item) => {
    const newData = {};
    for (const key in item) {
      if (key === 'deleted') newData['isDeleted'] = item[key];
      if (key === 'is_in_trash') newData['isTrashed'] = item[key];
      else {
        const newKey = toCamelCase(key);
        newData[newKey] = item[key];
      }
    }
    newData['type'] = item.folder ? 'DocumentFolder' : 'DocumentFile';
    return newData;
  });

  // const result = {
  //   ...newData,
  //   //   type: DocumentType! # folder / folder: Boolean!
  //   //   created: String!
  //   //   modified: Int!
  //   //   bytes: Int!
  //   //   # Not sure that we need `icon`, we already can understand it's folder/file and extension
  //   //   # icon: String # replace with enum "folder" | "lnk" | "image"

  //   //   # FIXME: union to object and don't forget `owner_path`
  //   //   owner: String!
  //   //   owner_name: String!

  //   //   author: Author!

  //   //   isDeleted: Boolean! # deleted
  //   //   isTrashed: Boolean! # is_in_trash
  //   //   isFavorite: Boolean! # is_favorite
  //   //   version: Int!
  //   //   publicHash: String # public_hash
  //   //   # client_data: ???
  //   //   content: [DocumentContent]
  // };
  return data;
};

type DescendingComparators = {
  a: Document;
  b: Document;
  orderBy: 'path' | 'bytes' | 'modified';
};

export function descendingComparator({
  a,
  b,
  orderBy,
}: DescendingComparators): number {
  if (orderBy === 'modified') {
    const numberA = +a[orderBy];
    const numberB = +b[orderBy];
    if (numberB < numberA) {
      return -1;
    }
    if (numberB > numberA) {
      return 1;
    }
    return 0;
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(
  order: 'desc' | 'asc',
  orderBy: 'path' | 'bytes' | 'modified'
): (a: Document, b: Document) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator({ a, b, orderBy })
    : (a, b) => -descendingComparator({ a, b, orderBy });
}

export function stableSort<T>(
  array: T[],
  comparator: (a: T, b: T) => number
): T[] {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
