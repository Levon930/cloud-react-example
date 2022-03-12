import React from 'react';

import { Styled } from './Documents.styled';

const Documents: React.FC = () => {
  return (
    <>
      <Styled.Container>
        <h1>Documents</h1>
      </Styled.Container>
      <Styled.EmptyContainer>
        <Styled.Emptyimage />
        <Styled.EmptyMsg>My document is empty.</Styled.EmptyMsg>
        <Styled.EmptySubMsg>
          When uploading a file, drag and drop it here or click the Upload button.
        </Styled.EmptySubMsg>
      </Styled.EmptyContainer>
    </>
  );
};

export default Documents;
