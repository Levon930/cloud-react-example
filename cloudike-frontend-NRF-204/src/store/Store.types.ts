import { Maybe, Thumbnail } from '@api';

export type Extradata = {
  thumbnails?: Maybe<{
    middle?: Maybe<Pick<Thumbnail, 'link'>>;
    preview?: Maybe<Pick<Thumbnail, 'link'>>;
    small?: Maybe<Pick<Thumbnail, 'link'>>;
  }>;
};

export interface User {
  name?: Maybe<string>;
  userid: number;
  is_active?: Maybe<boolean>;
  ip_restriction?: Maybe<boolean>;
  allowed_ips?: Maybe<string>;
  user_mobile_restriction?: Maybe<boolean>;
  pc_can_download?: Maybe<boolean>;
  can_download?: Maybe<boolean>;
  can_print?: Maybe<boolean>;
  use_watermarks?: Maybe<boolean>;
  login?: Maybe<string>;
  status?: Maybe<string>;
}

export interface Document {
  path: string;
  type: string;
  name: string;
  bytes?: number;
  modified?: string;
  extradata?: Extradata;
}

export interface Group {
  name?: Maybe<string>;
  group_id?: Maybe<number>;
}
