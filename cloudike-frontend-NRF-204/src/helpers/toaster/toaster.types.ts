import { TypeOptions } from 'react-toastify';

export type ToasterType = (title: string, type: TypeOptions, autoClose?: number) => void;
