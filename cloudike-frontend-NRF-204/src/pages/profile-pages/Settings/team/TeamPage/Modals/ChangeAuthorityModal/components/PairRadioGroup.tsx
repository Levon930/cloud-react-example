import React from 'react';

import { RadioGroup } from '@components';
import { PairRadioGroupsProps } from './PairRadioGroup.types';

import { Styled } from './PairRadioGroup.styled';

const PairRadioGroup: React.FC<PairRadioGroupsProps> = ({
  pairRadios,
  firstLabel,
  secondLabel,
}) => {
  return (
    <>
      <Styled.RadioTopLabel>
        <Styled.RadioTopLabelItems>{firstLabel}</Styled.RadioTopLabelItems>
        <Styled.RadioTopLabelItems>{secondLabel}</Styled.RadioTopLabelItems>
      </Styled.RadioTopLabel>
      <Styled.RadioBody>
        {pairRadios.map((radio) => (
          <Styled.RadioBodyItems key={radio.label}>
            <Styled.RadioLabel>{radio.label}</Styled.RadioLabel>
            <Styled.RadioGroupWrapper>
              <RadioGroup
                name={radio.name}
                label=""
                items={[
                  { id: String(radio.firstId), name: '' },
                  { id: String(radio.secondId), name: '' },
                ]}
              />
            </Styled.RadioGroupWrapper>
          </Styled.RadioBodyItems>
        ))}
      </Styled.RadioBody>
    </>
  );
};

export default PairRadioGroup;
