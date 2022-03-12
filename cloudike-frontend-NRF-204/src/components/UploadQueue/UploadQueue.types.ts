import { Extension } from '@components/Card/ExpandedFile';

export enum Status {
  loading = 'loading',
  okay = 'okay',
}

export type file = Readonly<{
  type: Extension.jpg | Extension.doc | Extension.jpeg | Extension.png;
  name: string;
  status: Status.okay | Status.loading;
}>;
