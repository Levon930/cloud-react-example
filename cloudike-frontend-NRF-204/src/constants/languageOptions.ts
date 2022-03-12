export interface LanguageSelectOption {
  label: string;
  value: string;
}

const languageOptions: LanguageSelectOption[] = [
  {
    value: 'kr',
    label: '한국어',
  },
  {
    value: 'en',
    label: 'EN',
  },
];

export default languageOptions;
