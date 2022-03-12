import React from 'react';

import { PdfIcon } from '@components/SvgComponents';

interface Extensions {
  [key: string]: React.FC;
}
export const extensions: Extensions = {
  pdf: PdfIcon,
};
