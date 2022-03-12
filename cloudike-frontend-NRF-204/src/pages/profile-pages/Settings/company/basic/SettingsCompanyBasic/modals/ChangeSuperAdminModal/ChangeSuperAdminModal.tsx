import React from 'react';

import { useModal } from '@hooks';
import ChangeSuperAdminModalBody from './ChangeSuperAdminModalBody';

const ChangeSuperAdminModal: React.FC = () => {
  const { RenderModal } = useModal();

  return (
    <RenderModal title="Change super administrator">
      <ChangeSuperAdminModalBody />
    </RenderModal>
  );
};

export default ChangeSuperAdminModal;
