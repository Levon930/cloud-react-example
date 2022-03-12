import React from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select } from '@material-ui/core';

import { LanguageIcon } from '@components/SvgComponents';

import { Styled } from './LanguageSelect.styled';

/**
 * TODO: https://yt.cloudike.io/issue/NRF-208
 * move to layout, remove from components
 */
const LanguageSelect: React.FC = () => {
  const { i18n } = useTranslation();
  const startLanguage = i18n.language?.includes('-') ? i18n.language?.split('-')[0] : i18n.language;

  const [language, setLanguage] = React.useState<string>(startLanguage);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguage(event.target.value as string);
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <Styled.SelectContainer>
      <LanguageIcon />
      <Select disableUnderline value={language} onChange={handleChange}>
        {i18n.languages?.map((lang: string) => (
          <MenuItem key={lang} value={lang}>
            {lang}
          </MenuItem>
        ))}
      </Select>
    </Styled.SelectContainer>
  );
};

export default LanguageSelect;
