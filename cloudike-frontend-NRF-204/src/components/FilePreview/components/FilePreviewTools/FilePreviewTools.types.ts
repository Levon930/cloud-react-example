import { Maybe } from '@api';

export type FilePreviewToolsProps = {
  setActiveTool: (activeTool: Maybe<string>) => void;
  isInfoOpen: boolean;
  infoBoxType: string;
  setIsInfoOpen: (isInfoOpen: boolean) => void;
  activeTool: Maybe<string>;
  handleToolAction: (toolId: number) => void;
  checkIfIconDisabled: (iconAction: string) => boolean;
};
