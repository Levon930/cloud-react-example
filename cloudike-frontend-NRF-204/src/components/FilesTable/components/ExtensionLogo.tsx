import React from 'react';

import { ExtensionLogoProps } from '@components/FilesTable';
import { FileIcon } from '@components/SvgComponents';
import { extensions } from '@constants/extensions';

const ExtensionLogo: React.FC<ExtensionLogoProps> = ({ fileName }) => {
  const splitFileName = fileName.split('.');
  const currentExtension = splitFileName[splitFileName.length - 1];
  const Logo = extensions[currentExtension];

  return Logo ? <Logo /> : <FileIcon />;
};

export default ExtensionLogo;
