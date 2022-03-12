export type PairRadioGroupsProps = Readonly<{
  pairRadios: {
    firstId: string;
    secondId: string;
    label: string;
    name: string;
  }[];

  firstLabel: string;
  secondLabel: string;
}>;
