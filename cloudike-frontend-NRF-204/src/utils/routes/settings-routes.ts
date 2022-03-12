const settings = 'settings';

const settingsCompany = `${settings}/company`;

const settingsProfile = `${settings}/profile`;

const settingsPlan = `${settings}/plan`;

const settingsTeamMember = `${settings}/team-member`;

const settingsTeamGroup = `${settings}/team-group`;

export const paths = {
  companySettingsBasic: `${settingsCompany}/basic`,
  profileSettingsDetailed: `${settingsCompany}/detailed`,
  companySettingsBasicDeleteAccount: `${settingsCompany}/basic/delete-account`,
  changeMiddleAdminModal: `${settingsCompany}/basic/change-middle-admin`,
  changeSuperAdminModal: `${settingsCompany}/basic/change-super-admin`,
  confirmSuperAdminModal: `${settingsCompany}/basic/confirm-super-admin`,
  companySettingsCustom: `${settingsCompany}/Custom`,
  companySettingsSecurity: `${settingsCompany}/security`,
  profileSettingsBasic: `${settingsProfile}/basic`,
  planSettings: `${settingsPlan}`,
  planSettingsPaymentHistory: `${settingsPlan}/payment-history`,
  planSettingsPaymentMethod: `${settingsPlan}/payment-method`,
  planSettingsChange: `${settingsPlan}/change-plan`,
  activityLogSettings: `${settings}/activity-log`,

  teamMember: `${settingsTeamMember}`,
  teamMemberBlock: `${settingsTeamMember}/block`,
  teamMemberUnblock: `${settingsTeamMember}/unblock`,
  teamMemberDetailedAuthority: `${settingsTeamMember}/detailed_authority`,
  teamMemberChangePassword: `${settingsTeamMember}/change_password`,
  teamMemberCreate: `${settingsTeamMember}/create_team_member`,
  teamMemberInvite: `${settingsTeamMember}/invite_team_member`,
  teamMemberDelete: `${settingsTeamMember}/delete_member`,
  teamMemberSetStorage: `${settingsTeamMember}/set_storage`,
  teamMemberSetExpirationDate: `${settingsTeamMember}/set_expiration_date`,

  teamGroup: `${settingsTeamGroup}`,
  teamGroupCreate: `${settingsTeamGroup}/create_group`,
  teamGroupInviteMember: `${settingsTeamGroup}/invite_member`,
  teamGroupDeleteMember: `${settingsTeamGroup}/delete_member`,
  teamGroupChangeAuthority: `${settingsTeamGroup}/change_authority`,
  teamGroupDelete: `${settingsTeamGroup}/delete_group`,
  teamGroupRename: `${settingsTeamGroup}/change_name`,
};

export const modalQuerys = {
  teamMemberBlock: `block`,
  teamMemberUnblock: `unblock`,
  teamMemberDetailedAuthority: `detailed_authority`,
  teamMemberChangePassword: `change_password`,
  teamMemberCreate: `create_team_member`,
  teamMemberInvite: `invite_team_member`,
  teamMemberDelete: `delete_member`,
  teamMemberSetStorage: `set_storage`,
  teamMemberSetExpirationDate: `set_expiration_date`,
  teamMemberCancelDeletion: `cancel_deletion`,
  teamGroupCreate: 'create_group',
  teamGroupChangeAuthority: 'change_authority',
  teamGroupDelete: 'delete_group',
  teamGroupRename: 'change_name',
};
