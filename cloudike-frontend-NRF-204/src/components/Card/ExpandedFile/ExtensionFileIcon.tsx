import { ExtFileIcon } from './ExpandedFile.constants';
import { ExtensionIcon as ExtensionIconType } from './ExpandedFile.types';

const ExtentionFileIcon: React.FC<ExtensionIconType> = ({ extension }) => {
  const ExtentionIcon = ExtFileIcon[extension];

  return <ExtentionIcon />;
};

export default ExtentionFileIcon;
