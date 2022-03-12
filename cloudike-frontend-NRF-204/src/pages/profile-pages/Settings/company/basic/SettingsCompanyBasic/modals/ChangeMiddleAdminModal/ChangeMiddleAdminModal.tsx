import React from 'react';

import { useModal } from '@hooks';
import ChangeMiddleAdminModalBody from './ChangeMiddleAdminModalBody';

const ChangeMiddleAdminModal: React.FC = () => {
  const { RenderModal } = useModal();

  return (
    <RenderModal title="Change middle administrator">
      <ChangeMiddleAdminModalBody />
    </RenderModal>
  );
};

export default ChangeMiddleAdminModal;
