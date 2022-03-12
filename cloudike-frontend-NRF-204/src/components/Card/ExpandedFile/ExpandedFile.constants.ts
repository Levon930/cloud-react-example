import { ExtExempleIcon } from '@components/SvgComponents';

export enum Extension {
  jpg = 'jpg',
  jpeg = 'jpeg',
  png = 'png',
  doc = 'doc',
}

export const ExtFileIcon = {
  [Extension.jpg]: ExtExempleIcon,
  [Extension.jpeg]: ExtExempleIcon,
  [Extension.png]: ExtExempleIcon,
  [Extension.doc]: ExtExempleIcon,
};
