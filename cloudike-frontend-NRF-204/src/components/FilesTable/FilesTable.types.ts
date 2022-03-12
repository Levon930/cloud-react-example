export type DataType = Readonly<{
  id?: any;
  name: string;
  size: number | string;
  date: Date;
}>;

export type FilesTableProps = Readonly<{
  header: {
    name: string;
    stared: boolean;
  };
  data: DataType[];
}>;

export type ExtensionLogoProps = Readonly<{
  fileName: string;
}>;
