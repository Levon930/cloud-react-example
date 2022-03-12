import { useHistory } from 'react-router-dom';

import { ModalWindow } from '@components/ModalWindow';
import { useToggle } from '@hooks';
import { RenderModalType, UseModal } from './useModal.types';

const useModal: UseModal = (backPath, initialValue = true) => {
  const { push, location } = useHistory();
  const [isOpen, setIsOpen] = useToggle(initialValue);

  const closeModal = () => {
    if (backPath) {
      push(`/${backPath}`);
    } else {
      push(`/${location.pathname.split('/').slice(1, -1).join('/')}/`);
    }
  };

  const RenderModal = ({ children, title }: RenderModalType) => (
    <ModalWindow isOpen={isOpen} closeModal={closeModal} title={title}>
      {children}
    </ModalWindow>
  );

  return {
    setIsOpen,
    isOpen,
    RenderModal,
  };
};

export default useModal;
