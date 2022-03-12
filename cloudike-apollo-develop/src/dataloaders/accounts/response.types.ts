import { LogType } from './request.types';

export type Login = {
  token: string;
  device_description: string;
  created: number;
  expires: number;
  remote_wipe: boolean;
  id: string;
  userid: number;
  user_eid: number;
  login: string;
  domain: string;
  name: string;
  offer_url?: string;
  need_agreement?: boolean;
  company_id: number;
};

export type CreateCompany = {
  company_id: number;
  company_name: string;
  created: number;
  expires: number;
  is_approved: boolean;
  login: string;
  userid: number;
};

export type CreateUser = {
  company_id: number;
  company_name: string;
  created: number;
  device_description: string;
  domain: string;
  expires: number;
  id: string;
  is_approved: boolean;
  login: string;
  name: string;
  remote_wipe: boolean;
  token: string;
  user_eid: number;
  userid: number;
  expired?: number;
  can_download?: boolean;
  can_print?: boolean;
  pc_can_download?: boolean;
  use_watermarks?: boolean;
  user_mobile_restriction?: boolean;
};

export type User = {
  features: any;
  allowed_ips: string;
  company_id: number;
  can_print: boolean;
  pc_can_download: boolean;
  timezone: string;
  extra_info: any;
  can_upload: boolean;
  is_trial: boolean;
  user_mobile_restriction: boolean;
  upload_photo_directory: string;
  can_download: boolean;
  disable_alert: boolean;
  last_login: number;
  need_password_change: boolean;
  role: string;
  need_tutorial: boolean;
  overhead_size: number;
  status: string;
  logins: Array<string>;
  ip_restriction: boolean;
  registration_date: number;
  is_active: boolean;
  storage_size: number;
  unapproved_logins: Array<string>;
  groups: any;
  hard_quota_size: number;
  deleted_date: number;
  expired: number;
  lang: string;
  balance: string;
  name: string;
  type: string;
  region: string;
  userid: number;
  quota_size: number;
  alert_email: string;
  use_watermarks: boolean;
};

export type Company = {
  status: string;
  phone_number: string;
  domain: string;
  sharing_outside_allow: boolean;
  folder_create_admin_only: boolean;
  public_links_allow: boolean;
  ldap_port: number;
  folder_limit_creation_allow: boolean;
  pay_by_bank: boolean;
  registration_date: number;
  employees_count: number;
  storage_size: number;
  ldap_user_attribute: string;
  restrict_mobile_using: boolean;
  wizard_state: string;
  custom_agreement_shown: string;
  plan: string;
  logo: string | null;
  password_lifetime: number;
  plan_expired: boolean;
  notification_email: string;
  ldap_address: string;
  traffic_size: number;
  lang: string;
  ldap_basedn: string;
  name: string;
  mobile_using_start_at: string;
  mobile_using_end_at: string;
  company_folder_creation_allow: boolean;
  logout_timeout_enable: boolean;
  quota_employees_count: number;
  company_id: number;
  quota_size: number;
  can_use_pc_client: boolean;
  password_reuse_allow: boolean;
  plan_remaining: number;
  can_use_mobile: boolean;
  use_custom_agreement: boolean;
  logout_timeout: number;
  auth_methods: {
    email: boolean;
    ldap: boolean;
  };
  owner_id: number;
};

export type Logout = {
  logout: boolean;
};

export type LoginName = {
  login: string;
};

export type PermanentTokens = Array<{
  remote_wipe: boolean;
  device_description: string;
  id: string;
  created: number;
}>;

export type OfferAccept = {
  accepted: boolean;
};

export type Feedback = {
  url_upload_logs: string;
};

export type FeedbackList = Array<{
  email?: string;
  comment: string;
}>;

export type Status = {
  code?: string;
  description?: string;
};

export type UserCheck = {
  status: string;
  companies: Array<{
    upload_method: string;
    domain: string;
    login: string;
  }>;
};

export type Value = {
  written?: string;
  updated?: string;
};

export type UserPermanentTokens = {
  content: Array<{
    remote_wipe: boolean;
    device_description: string;
    id: string;
    created: number;
  }>;
};

export type CompanyPublicInfo = {
  status: string;
  domain: string;
  name: string;
  company_id: string;
  logo: string;
  auth_method: {
    email: boolean;
    ldap?: boolean;
  };
};

export type CompanyPublicInformation = {
  status: string;
  phone_number: string;
  domain: string;
  sharing_outside_allow: boolean;
  folder_create_admin_only: boolean;
  public_links_allow: boolean;
  folder_limit_creation_allow: boolean;
  pay_by_bank: boolean;
  registration_date: number;
  employees_count: number;
  storage_size: number;
  restrict_mobile_using: boolean;
  wizard_state: string;
  custom_agreement_shown: string;
  plan: string;
  logo?: null | string;
  password_lifetime: number;
  plan_expired: boolean;
  notification_email: string;
  traffic_size: number;
  lang: string;
  name: string;
  mobile_using_start_at: string;
  company_folder_creation_allow: boolean;
  logout_timeout_enable: boolean;
  quota_employees_count: number;
  mobile_using_end_at: string;
  company_id: number;
  quota_size: number;
  can_use_pc_client: boolean;
  password_reuse_allow: boolean;
  can_use_mobile: boolean;
  use_custom_agreement: boolean;
  logout_timeout: number;
  auth_methods: {
    email: boolean;
    ldap: boolean;
  };
  owner_id: number;
};

export type LogoConfirmUrl = {
  url: string;
  headers: any;
  method: number;
  parameters: any;
  confirm_url: string;
};

export type CompanyUsersList = Array<{
  user_id: number;
  name: string;
  position: string;
  content: Array<
    | {
        status: string;
        name: string;
        is_trial: boolean;
        logins: Array<string>;
        is_active: boolean;
        expired: number;
        userid: number;
        need_tutorial: boolean;
        extra_info: any;
      }
    | {
        login: string;
        company_id: number;
        company_name: string;
        created: number;
        expires: number;
        userid: number;
        is_approved: false;
        status: string;
      }
  >;
}>;

export type CompanyPersonalInfo = {
  status: string;
  phone_number: 1234567890;
  domain: string;
  sharing_outside_allow: boolean;
  folder_create_admin_only: boolean;
  folder_limit_creation_allow: boolean;
  pay_by_bank: boolean;
  employees_count: number;
  storage_size: number;
  restrict_mobile_using: boolean;
  wizard_state: string;
  custom_agreement_shown: boolean;
  plan: string;
  logo: string;
  password_lifetime: number;
  plan_expired: false;
  notification_email: string;
  traffic_size: number;
  lang: string;
  name: string;
  mobile_using_start_at: string;
  company_folder_creation_allow: boolean;
  logout_timeout_enable: boolean;
  quota_employees_count: number;
  mobile_using_end_at: string;
  company_id: number;
  quota_size: number;
  registration_date: number;
  ldap_address?: string;
  ldap_port?: number;
  ldap_basedn?: string;
  ldap_user_attribute?: string;
  public_links_allow?: boolean;
  can_use_pc_client: boolean;
  password_reuse_allow: boolean;
  plan_remaining: number;
  can_use_mobile: boolean;
  use_custom_agreement: boolean;
  logout_timeout: number;
  auth_methods: {
    email: boolean;
    ldap: boolean;
  };
  owner_id: number;
};

export type GetValue = {
  [key: string]: string | number;
};

export type Group = {
  allowed_ips: string;
  can_download: boolean;
  can_print: boolean;
  company_id: number;
  group_id: number;
  ip_restriction: boolean;
  members_count: number;
  mobile_restriction: boolean;
  name: string;
  pc_can_download: boolean;
  use_watermarks: boolean;
};

export type GroupsUsers = {
  users: User[];
  count: number;
  group_id: number;
};

export type Groups = {
  count: number;
  group_users: GroupsUsers[];
  groups: Group[];
  limit: number;
  offset: number;
};

export type UserDisabled = {
  nodes: User[];
  failed: number;
  success: number;
};

export type GroupUsers = {
  count: number;
  users: User[];
  limit: number;
  offset: number;
};

type AddGroupUser = {
  status: string;
  userid: number;
};

export type ChangedQuota = {
  failed: number;
  nodes: User[];
  success: number;
};

export type AddGroupUsers = AddGroupUser[];
export type AddEmail = {
  login: string;
  company_id: number;
  company_name: string;
  created: number;
  expires: number;
  userid: number;
  is_approved: boolean;
};

export type Log = {
  userId: number;
  deleted: boolean;
  timestamp: number;
  initEventUserName: string;
  collabName?: string;
  ownerName?: string;
  publicHash?: string;
  collabId?: string;
  senderIp?: string;
  companyPublished?: boolean;
  shared?: boolean;
  content: {
    created: number;
    modified: number;
    size: number;
  };
  version: number;
  path: string;
  oldpath?: string;
  old?: {
    content: {
      created: number;
      modified: number;
      size: number;
    };
  };
  type: LogType;
  initEventUserId: number;
};

export type GetLogsTotal = {
  data: {
    total: number;
  };
};

export type GetLogFile = {
  taskId: string;
};
