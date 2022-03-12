import { URLSearchParamsInit } from 'apollo-server-env';

export type Login = {
  login: string;
  password: string;
  permanent_auth?: boolean;
};

export type CreateCompany = {
  lang: string;
  company_name: string;
  company_domain: string;
  email: string;
  password: string;
  name: string;
};

export type CreateUser = {
  name: string;
  email: string;
  password: string;
  company_id: number;
  lang: string;
  can_download?: boolean;
  pc_can_download?: boolean;
  can_print?: boolean;
  use_watermarks?: boolean;
  user_mobile_restriction?: boolean;
  permission?: boolean;
  expired?: number;
};

export type Feedback = {
  email?: string;
  comment: string;
};

export type FeedbackList = {
  limit?: number;
  offset?: number;
};

export type ChangeProfile = {
  name?: string;
  password?: string;
  lang?: string;
  timezone?: string;
  extra_info?: any;
};

export type SetValue = {
  key: string;
  value: string | number;
};

export type LogoConfirm = {
  company_id: number;
  size?: number;
  temp_name: string;
  checksum?: string;
};

export type LogoUpload = {
  size?: number;
  checksum?: string;
  path?: string;
  company_id?: number;
};

export type AdminChange = {
  company_id: number;
  user_id: number;
};

export type Enable = {
  company_id: number;
  user_id: number;
  reason: string;
};

export type Disable = {
  company_id: number;
  user_id: number;
  reason: string;
  remote_wipe: boolean;
};

export type UserCreate = {
  company_id: number;
  login: string;
  name: string;
  password: string;
};

export type TokenRemove = {
  token_id: number;
  remote_wipe: boolean;
};

export type UserRemove = {
  company_id: string;
  user_id: string;
  need_wipe?: boolean;
  transfer_file?: boolean;
  transfer_login?: string;
  auto_remove?: boolean;
};

export type UserInfo = {
  company_id: number;
  user_id: number;
};

export type UserQuota = {
  company_id: number;
  user_ids: number;
  quota_size: number;
};

export type UserAccess = {
  user_id: number;
  value: boolean;
};

export type GroupAccess = {
  group_id: number;
  value: boolean;
};

export type UserIpRestriction = {
  user_id: number;
  ip_restriction: boolean;
  allowed_ips: string;
};

export type GroupIpRestriction = {
  group_id: number;
  ip_restriction: boolean;
  allowed_ips: string;
};

export type UserAdmin = {
  user_id: number;
  value: boolean;
};

export type UserAgreement = {
  value: string;
  show?: string;
  agreement?: string;
  company_id: number;
};

export type UserExpired = {
  user_id: number;
  company_id: number;
  expired: number;
};

export type UserChange = {
  userid: number;
  name?: string;
  alert_email?: string;
  disable_alert?: boolean;
  lang?: string;
};

export type UpdateReference = {
  company_id: number;
  reference_email: string;
};

export type CompanyChange = {
  status?: string;
  phone_number?: string;
  domain?: string;
  sharing_outside_allow?: boolean;
  folder_create_admin_only?: boolean;
  public_links_allow?: boolean;
  ldap_port?: number;
  folder_limit_creation_allow?: boolean;
  pay_by_bank?: boolean;
  registration_date?: number;
  employees_count?: number;
  storage_size?: number;
  ldap_user_attribute?: string;
  restrict_mobile_using?: boolean;
  wizard_state?: string;
  custom_agreement_shown?: string;
  plan?: string;
  logo?: string | null;
  password_lifetime?: number;
  plan_expired?: boolean;
  notification_email?: string;
  ldap_address?: string;
  traffic_size?: number;
  lang?: string;
  ldap_basedn?: string;
  name?: string;
  mobile_using_start_at?: string;
  mobile_using_end_at?: string;
  company_folder_creation_allow?: boolean;
  logout_timeout_enable?: boolean;
  quota_employees_count?: number;
  companyId?: number;
  quota_size?: number;
  can_use_pc_client?: boolean;
  password_reuse_allow?: boolean;
  plan_remaining?: number;
  can_use_mobile?: boolean;
  use_custom_agreement?: boolean;
  logout_timeout?: number;
  auth_methods?: {
    email?: boolean;
    ldap?: boolean;
  };
  owner_id?: number;
};

export type CreateGroup = {
  name: string;
};

export type RenameGroup = {
  name: string;
  group_id: number;
};

export type ChangePassword = {
  user_id: number;
  new_password: string;
};

export type GroupUsers = {
  group_id: number;
};

export type AddGroupUsers = {
  groupId: number;
  userIds: number;
};

export type InvaitUser = {
  lang: string;
  company_id: number;
  email: string;
};

export enum LogType {
  FOLDER_CREATED = 'folder_created',
  FOLDER_DELETED = 'folder_deleted',
  FOLDER_RENAMED = 'folder_renamed',
  SHARE_INVITATION_SENT = 'share_invitation_sent',
  SHARE_INVITATION_ACCEPTED = 'share_invitation_accepted',
  SHARE_INVITATION_DECLINED = 'share_invitation_declined',
  SHARE_INVITATION_REVOKED = 'share_invitation_revoked',
  USE_WATERMARKS_CHANGED = 'use_watermarks_changed',
  FOLDER_COLLAB_REMOVED = 'folder_collab_removed',
  FOLDER_UNSHARED = 'folder_unshared',
  FOLDER_UNDELETED = 'folder_undeleted',
  FOLDER_MOVED = 'folder_moved',
  FILE_CREATED = 'file_created',
  FILE_DELETED = 'file_deleted',
  FILE_UNDELETED = 'filed_undeleted',
  FILE_NEW_CONTENT = 'file_new_content',
  FILE_VERSION_RESTORED = 'filed_version_restored',
  FILE_RENAMED = 'filed_renamed',
  FILE_MOVED = 'filed_moved',
  SEC_LOGS = 'sec_logs',
  CAN_PRINT_CHANGED = 'can_print_changed',
  PC_CAN_DOWNLOAD_CHANGED = 'pc_can_download_changed',
  IP_RESTRICTION_CHANGED = 'ip_restriction_changed',
  USER_MOBILE_RESTRICTION_CHANGED = 'user_mobile_restriction_changed',
  CAN_DOWNLOAD_CHANGED = 'can_download_changed',
  COMPANY_ADMIN_RIGHT = 'company_admin_right',
  FOLDER_DOWNLOAD = 'folder_download',
  USER_NAME_CHANGED = 'user_name_changed',
  USER_PASSWORD_CHANGED = 'user_password_changed',
  NUMEROUS_FAILED_LOGIN_ATTEMPTS = 'numerous_failed_login_attempts',
  FILE_DOWNLOAD = 'file_download',
}

export type GetLogs = {
  person: 'me' | 'other';
  not_include_storage_info: boolean;
  period: number;
  skip?: number;
  limit?: number;
  type?: LogType;
  from_timestamp: number;
  to_timestamp: number;
};

export type GetLogsTotal = {
  person: 'me' | 'other';
  not_include_storage_info: boolean;
  period: number;
  type?: string;
  from_timestamp: number;
  to_timestamp: number;
};
