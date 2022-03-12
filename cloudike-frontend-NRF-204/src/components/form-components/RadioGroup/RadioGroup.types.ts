export interface RadioProps {
  readonly name: string;
  label?: string;
  items: Array<{ name: string; id: string }>;
}
