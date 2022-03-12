import { CloudikeBaseAPI } from '../base';
import * as Request from './request.types';
import * as Response from './response.types';

export class AccountAPI extends CloudikeBaseAPI {
  async login(input: Request.Login): Promise<Response.Login> {
    return this.postEncoded<Response.Login>('/accounts/login/', input);
  }

  async logout(): Promise<Response.Logout> {
    return this.postEncoded<Response.Logout>('/accounts/logout/');
  }

  async approve(hash: string): Promise<Response.User> {
    return this.get<Response.User>('/accounts/approve/', { hash });
  }

  async getUser(): Promise<Response.User> {
    return this.get<Response.User>('/accounts/get/');
  }

  async check(login: string): Promise<Response.UserCheck> {
    return this.get<Response.UserCheck>('/accounts/check/', { login });
  }

  async removeLogin(login: string): Promise<Response.LoginName> {
    return this.postEncoded<Response.LoginName>('/accounts/remove_login/', {
      login,
    });
  }

  async addEmail(email: string): Promise<Response.AddEmail> {
    return this.postEncoded<Response.AddEmail>('/accounts/set_value/', {
      email,
    });
  }

  async setValue(input: Request.SetValue): Promise<Response.Status> {
    return this.postEncoded<Response.Status>('/accounts/set_value/', input);
  }

  async getValue(key: string): Promise<Response.GetValue> {
    return this.postEncoded<Response.Value>('/accounts/get_value/', { key });
  }

  async getInvited(hash: string): Promise<Response.LoginName> {
    return this.get<Response.LoginName>('/accounts/getinvited/', { hash });
  }

  async recoverLostPassword(login: string): Promise<Response.Status> {
    return this.postEncoded<Response.Status>(
      '/accounts/recover_lost_password/',
      { login }
    );
  }

  async resendMessageForApprove(login: string): Promise<Response.Status> {
    return this.postEncoded<Response.Status>(
      '/accounts/resend_message_for_approve/',
      { login }
    );
  }

  async changeProfile(input: Request.ChangeProfile): Promise<Response.Status> {
    return this.postEncoded<Response.Status>(
      '/accounts/change_profile/',
      input
    );
  }

  async permanentTokens(): Promise<Response.PermanentTokens> {
    return this.get<Response.PermanentTokens>('/accounts/permanent_tokens/');
  }

  async removePermanentToken(token_id: number): Promise<Response.Status> {
    return this.postEncoded<Response.Status>(
      '/accounts/remove_permanent_token/',
      { token_id }
    );
  }

  async cancelTokenRemoteWipe(token_id: number): Promise<Response.Status> {
    return this.postEncoded<Response.Status>(
      '/accounts/cancel_token_remote_wipe/',
      { token_id }
    );
  }

  async tokenWiped(): Promise<Response.Status> {
    return this.postEncoded<Response.Status>('/accounts/token_wiped/');
  }

  async acceptOffer(): Promise<Response.OfferAccept> {
    return this.postEncoded<Response.OfferAccept>('/accounts/accept_offer/');
  }

  async getOffer(company_id: number): Promise<HTMLElement> {
    return this.get<HTMLElement>('/accounts/get_offer/', { company_id });
  }

  async declineOffer(company_id: number): Promise<Response.Status> {
    return this.postEncoded<Response.Status>('/accounts/decline_offer/', {
      company_id,
    });
  }

  async feedback(input: Request.Feedback): Promise<Response.Feedback> {
    return this.postEncoded<Response.Feedback>('/accounts/feedback/', input);
  }

  async feedbackList(
    input: Request.FeedbackList
  ): Promise<Response.FeedbackList> {
    return this.get<Response.FeedbackList>('/accounts/feedback_list/', input);
  }

  async getCompany(companyId: number): Promise<Response.Company> {
    return this.get<Response.Company>(`/accounts/company/${companyId}/`);
  }

  async createCompany(
    input: Request.CreateCompany
  ): Promise<Response.CreateCompany> {
    return this.postEncoded<Response.CreateCompany>('/accounts/create/', {
      ...input,
      user_agreement: true,
      marketing_agreement: true,
    });
  }

  async createUser(input: Request.CreateUser): Promise<Response.CreateUser> {
    return this.postEncoded<Response.CreateUser>('/accounts/create/', {
      created_manually: true,
      ...input,
    });
  }

  async companyDomain(domain: string): Promise<Response.CompanyPublicInfo> {
    return this.postEncoded<Response.CompanyPublicInfo>(
      `/accounts/company/domain/${domain}/`
    );
  }

  async companyLogoConfirm(
    input: Request.LogoConfirm
  ): Promise<Response.Status> {
    return this.get<Response.Status>(
      `/accounts/company/${input.company_id}/logo_confirm/`
    );
  }

  async companyLogoClear(company_id: number): Promise<Response.Status> {
    return this.postEncoded<Response.Status>(
      `/accounts/company/${company_id}/logo_clear/`,
      {
        company_id,
      }
    );
  }

  async companyLogoUpload(
    input: Request.LogoUpload
  ): Promise<Response.LogoConfirmUrl> {
    return this.postEncoded<Response.LogoConfirmUrl>(
      `/accounts/company/${input.company_id}/logo_upload/`,
      input
    );
  }

  async companyAdminChange(
    input: Request.AdminChange
  ): Promise<Response.CompanyPublicInformation> {
    return this.postEncoded<Response.CompanyPublicInformation>(
      `/accounts/company/${input.company_id}/admin_change/`,
      {
        user_id: input.user_id,
      }
    );
  }

  async companyUsersEnable(input: Request.Enable): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/company/${input.company_id}/users_enable/`,
      input
    );
  }

  async companySettingsChange(
    input: Request.CompanyChange
  ): Promise<Response.Company> {
    return this.postEncoded<Response.Company>(
      `/accounts/company/${input.companyId}/change/`,
      input
    );
  }

  async companyUsersDisable(input: Request.Disable): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/company/${input.company_id}/users_disable/`,
      input
    );
  }

  async companyCreateUser(input: Request.UserCreate): Promise<Response.User> {
    return this.get<Response.User>(
      `/accounts/company/${input.company_id}/create_user/`
    );
  }

  async companyUsers(company_id: number): Promise<Response.CompanyUsersList> {
    return this.get<Response.CompanyUsersList>(
      `/accounts/company/${company_id}/users/`,
      {
        company_id,
      }
    );
  }

  async companyUserPermanentTokens(
    user_id: number
  ): Promise<Response.UserPermanentTokens> {
    return this.get<Response.UserPermanentTokens>(
      `/accounts/company/user_permanent_tokens/`,
      {
        user_id,
      }
    );
  }

  async companyUserPermanentTokenRemove(
    input: Request.TokenRemove
  ): Promise<Response.Status> {
    return this.postEncoded<Response.Status>(
      `/accounts/company/user_permanent_token/remove/`,
      input
    );
  }

  async companyUserPermanentTokenCancelRemove(
    token_id: number
  ): Promise<Response.Status> {
    return this.postEncoded<Response.Status>(
      `/accounts/company/user_permanent_token/cancel_remove/`,
      { token_id }
    );
  }

  async companyRemoveUser(input: Request.UserRemove): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/company/${input.company_id}/remove_user/`,
      input
    );
  }

  async companyCancelUserRemoving(
    input: Request.UserInfo
  ): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/company/${input.company_id}/cancel_user_removing/`,
      input
    );
  }

  async companyChangeUsersQuota(
    input: Request.UserQuota
  ): Promise<Response.ChangedQuota> {
    return this.postEncoded<Response.ChangedQuota>(
      `/accounts/company/${input.company_id}/change_users_quota/`,
      input
    );
  }

  async companyChangeUserCanPrint(
    input: Request.UserAccess
  ): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/company/change_user_can_print/`,
      input
    );
  }

  async groupChangeUserCanPrint(
    input: Request.GroupAccess
  ): Promise<Response.Groups> {
    return this.postEncoded<Response.Groups>(
      `/groups/${input.group_id}/change_can_print/`,
      input
    );
  }

  async getCompanyUser(input: Request.UserAccess): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/get/?user_id=${input.user_id}`
    );
  }

  async companyChangeUserCanDownload(
    input: Request.UserAccess
  ): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/company/change_user_can_download/`,
      input
    );
  }

  async groupChangeUserCanDownload(
    input: Request.GroupAccess
  ): Promise<Response.Groups> {
    return this.postEncoded<Response.Groups>(
      `/groups/${input.group_id}/change_can_download/`,
      input
    );
  }

  async companyChangeUserCanUpload(
    input: Request.UserAccess
  ): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/company/change_user_can_upload/`,
      input
    );
  }

  async groupChangeUserCanUpload(
    input: Request.GroupAccess
  ): Promise<Response.Groups> {
    return this.postEncoded<Response.Groups>(
      `/groups/${input.group_id}/change_can_upload/`,
      input
    );
  }

  async companyChangeUserUseWatermarks(
    input: Request.UserAccess
  ): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/company/change_user_use_watermarks/`,
      input
    );
  }

  async groupChangeUserUseWatermarks(
    input: Request.GroupAccess
  ): Promise<Response.Groups> {
    return this.postEncoded<Response.Groups>(
      `/groups/${input.group_id}/change_use_watermarks/`,
      input
    );
  }

  async companyChangeUserPcCanDownload(
    input: Request.UserAccess
  ): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/company/change_user_pc_can_download/`,
      input
    );
  }
  async groupChangeUserPcCanDownload(
    input: Request.GroupAccess
  ): Promise<Response.Groups> {
    return this.postEncoded<Response.Groups>(
      `/groups/${input.group_id}/change_pc_can_download/`,
      input
    );
  }

  async companyChangeMobileRestriction(
    input: Request.UserAccess
  ): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/company/change_mobile_restriction/`,
      input
    );
  }

  async groupChangeMobileRestriction(
    input: Request.GroupAccess
  ): Promise<Response.Groups> {
    return this.postEncoded<Response.Groups>(
      `/groups/${input.group_id}/change_mobile_restriction/`,
      input
    );
  }

  async companyChangeUserIpRestriction(
    input: Request.UserIpRestriction
  ): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/company/change_user_ip_restriction/`,
      input
    );
  }
  async groupChangeUserIpRestriction(
    input: Request.GroupIpRestriction
  ): Promise<Response.Groups> {
    return this.postEncoded<Response.Groups>(
      `/groups/${input.group_id}/change_group_ip_restriction/`,
      input
    );
  }

  async changeAdminRights(input: Request.UserAdmin): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/change_admin_rights/`,
      input
    );
  }

  async companyCustomUserAgreement(
    input: Request.UserAgreement
  ): Promise<Response.CompanyPublicInfo> {
    return this.postEncoded<Response.CompanyPublicInfo>(
      `/accounts/company/${input.company_id}/custom_user_agreement/`,
      input
    );
  }

  async companyChangeUserExpired(
    input: Request.UserExpired
  ): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      `/accounts/company/${input.company_id}/change_user_expired/`,
      input
    );
  }

  async companyConfirmUserRemoving(
    input: Request.UserInfo
  ): Promise<Response.User> {
    return this.get<Response.User>(
      `/accounts/company/${input.company_id}/confirm_user_removing/`,
      input
    );
  }

  async getGroups(): Promise<Response.Groups> {
    return this.get<Response.Groups>('/groups/list/?include_users=true');
  }

  async groupUsers(input: Request.GroupUsers): Promise<Response.GroupUsers> {
    return this.get<Response.GroupUsers>(`/groups/${input.group_id}/users/`);
  }

  async inviteGroupUsers({
    groupId,
    userIds,
  }: Request.AddGroupUsers): Promise<Response.AddGroupUsers> {
    return this.postEncoded<Response.AddGroupUsers>(
      `/groups/${groupId}/add_user/`,
      {
        user_ids: userIds,
      }
    );
  }

  async deleteGroupUsers({
    groupId,
    userIds,
  }: Request.AddGroupUsers): Promise<Response.AddGroupUsers> {
    return this.postEncoded<Response.AddGroupUsers>(
      `/groups/${groupId}/remove_user/`,
      {
        user_ids: userIds,
      }
    );
  }

  async createGroup(input: Request.CreateGroup): Promise<Response.Group> {
    return this.postEncoded<Response.Group>('/groups/create/', input);
  }

  async renameGroup(input: Request.RenameGroup): Promise<Response.Group> {
    return this.postEncoded<Response.Group>(
      `/groups/${input.group_id}/change/`,
      input
    );
  }

  async deleteGroup(input: Request.CreateGroup): Promise<Response.Group> {
    return this.postEncoded<Response.Group>('/groups/delete/', input);
  }

  async changePassword(input: Request.ChangePassword): Promise<Response.User> {
    return this.postEncoded<Response.User>(
      '/admin/accounts_set_password/',
      input
    );
  }

  async inviteUser(input: Request.InvaitUser) {
    return this.postEncoded(
      `/admin/company/${input.company_id}/invite_user/`,
      input
    );
  }

  async getLogs({ ...params }: Request.GetLogs): Promise<Response.Log[]> {
    return this.get<Response.Log[]>('/events/', {
      ...params,
    });
  }

  async getLogsTotal({
    ...params
  }: Request.GetLogs): Promise<Response.GetLogsTotal> {
    return this.get<Response.GetLogsTotal>('/events_len/', { ...params });
  }

  async getLogFile({
    ...params
  }: Request.GetLogs): Promise<Response.GetLogFile> {
    return this.get<Response.GetLogFile>('/get_log_file/', { ...params });
  }
}
