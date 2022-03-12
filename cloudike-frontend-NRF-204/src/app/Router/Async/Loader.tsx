import { CircularProgress } from '@material-ui/core';

import styled from '@emotion/styled';

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
  margin: 2rem;
`;

/**
 * add global styles for CircularProgress
 * move to components
 */
const Loader = () => {
  return (
    <Wrapper>
      <CircularProgress color="primary" />
    </Wrapper>
  );
};

export default Loader;
