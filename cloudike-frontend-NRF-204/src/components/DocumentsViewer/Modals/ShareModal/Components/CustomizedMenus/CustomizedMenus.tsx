import React from 'react';
import { FormControl, FormGroup, Menu, MenuItem } from '@material-ui/core';

import { FormCheckbox } from '@components';
import { CustomizedMenusPropsType } from './CustomizedMenus.types';

import { Styled } from '../ShareModalComponents.styled';

const CustomizedMenus: React.FC<CustomizedMenusPropsType> = ({ groups, members, setMembers }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      event.target.disabled = true;
      const newGroup = [
        ...members,
        { value: event.target.name, type: 'group', groupId: event.target.id },
      ];
      setMembers(newGroup);
    }
  };

  return (
    <div>
      <Styled.InviteButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Invite group
      </Styled.InviteButton>
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <FormControl component="fieldset">
          <FormGroup>
            {groups.map(({ name, group_id }) => (
              <MenuItem key={group_id}>
                <FormCheckbox
                  label={name}
                  color="primary"
                  onChange={handleChange}
                  name={name}
                  id={`${group_id}`}
                />
              </MenuItem>
            ))}
          </FormGroup>
        </FormControl>
      </Menu>
    </div>
  );
};
export default CustomizedMenus;
