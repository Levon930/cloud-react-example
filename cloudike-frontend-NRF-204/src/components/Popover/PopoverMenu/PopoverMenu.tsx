import React, { FC } from 'react';

import { PopoverLinksProps } from './PopoverMenu.types';

import { Styled } from './PopoverMenu.styled';

const PopoverMenu: FC<PopoverLinksProps> = ({ links, isOpen, onClose }) => {
  return (
    <Styled.MenuListWrapper autoFocusItem={isOpen}>
      {links.map(({ title, path, id }) => (
        <Styled.Link onClick={onClose} key={id} to={`/${path}`}>
          <Styled.MenuItemWrapper>{title}</Styled.MenuItemWrapper>
        </Styled.Link>
      ))}
    </Styled.MenuListWrapper>
  );
};

export default PopoverMenu;
