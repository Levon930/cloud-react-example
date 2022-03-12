import React from 'react';
import { FieldArray } from 'formik';

import { FormCheckbox } from '@components/form-components/CheckboxLabel';
import { GroupCheckboxProps } from './GroupCheckbox.types';

const GroupCheckbox: React.FC<GroupCheckboxProps> = ({ groupName, values }) => {
  return (
    <FieldArray
      name={groupName}
      render={() => (
        <>
          {values.map((el) => (
            <FormCheckbox name={groupName} label={el} key={el} value={el} />
          ))}
        </>
      )}
    />
  );
};

export default GroupCheckbox;
