import React, { ChangeEvent, useState } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';

import { SelectTypes, SharePermissions, SimpleSelectProps } from './SimpleSelect.types';
import useSimpleSelectTranslation from './useSimpleSelectTranslation';

const SimpleSelect: React.FC<SimpleSelectProps> = ({ name, change }) => {
  const { readAndWrite, read } = useSimpleSelectTranslation();

  const handleChange = (e: ChangeEvent<SelectTypes>) => {
    change(e);
    setSelectValue(e.target.value as SharePermissions);
  };

  const [selectValue, setSelectValue] = useState<SharePermissions>(SharePermissions.read);

  return (
    <div>
      <FormControl>
        <Select value={selectValue} onChange={handleChange} name={name} id="demo-simple-select">
          <MenuItem value={SharePermissions.readAndWrite}>{readAndWrite}</MenuItem>
          <MenuItem value={SharePermissions.read}>{read}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default SimpleSelect;
