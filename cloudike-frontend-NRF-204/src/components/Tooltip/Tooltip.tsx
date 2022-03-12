import { TooltipProps } from '@material-ui/core';

import { Styled } from './Tooltip.styled';

/**
 * TODO add styles to overrides theme
 */
const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <Styled.Tooltip arrow {...props}>
      {children}
    </Styled.Tooltip>
  );
};

export default Tooltip;
