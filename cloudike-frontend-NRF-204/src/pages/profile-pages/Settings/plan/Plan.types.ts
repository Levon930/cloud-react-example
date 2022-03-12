export type PlansPageProps = {
  used: string;
  period: string;
  card: string;
  notification: string;
  price: string;
};

export interface plan {
  planName: string;
  planPrice: string;
  fill: string;
  icon: React.FC;
}

export interface ComponentTypes {
  expired?: boolean;
}
