import { IResolvers } from 'graphql-tools';

export const resolvers: IResolvers = {
  Query: {
    companyUsers: async (_source, { search, group_id }, { dataSources }) => {
      const userData = await dataSources.accountApi.getUser();
      if (!search) {
        if (group_id) {
          const groupUsers = await dataSources.accountApi.groupUsers({
            group_id,
          });
          const data = await dataSources.accountApi.companyUsers(
            userData.company_id
          );
          const filteredData = {
            ...data,
            content: data.content.filter((companyUser) => {
              return !groupUsers.users.some(
                (groupUser) => groupUser.userid === companyUser.userid
              );
            }),
          };
          return filteredData;
        }
        return dataSources.accountApi.companyUsers(userData.company_id);
      } else {
        const data = await dataSources.accountApi.companyUsers(
          userData.company_id
        );
        const filteredDataBySearch = {
          ...data,
          content: (data.content = data.content.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )),
        };
        if (group_id) {
          const groupUsers = await dataSources.accountApi.groupUsers({
            group_id,
          });
          const filteredDataByGroup = {
            ...filteredDataBySearch,
            content: filteredDataBySearch.content.filter((item) => {
              return !groupUsers.users.some(
                (user) => user.userid === item.userid
              );
            }),
          };
          return filteredDataByGroup;
        }
        return filteredDataBySearch;
      }
    },
    groups: async (_source, _, { dataSources }) => {
      const data = await dataSources.accountApi.getGroups();

      data.groups.forEach((item, i) => {
        item.users = data.group_users[i].users;
      });

      return data;
    },
    groupUsers: async (_source, { search, group_id }, { dataSources }) => {
      const data = await dataSources.accountApi.groupUsers({ group_id });
      if (search) {
        const filteredDataBySearch = {
          ...data,
          users: (data.users = data.users.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )),
        };
        return filteredDataBySearch;
      }
      return data;
    },
  },
  Mutation: {
    createGroup: async (_source, { input }, { dataSources }) => {
      // TODO: Error handling
      return dataSources.accountApi.createGroup(input);
    },
    deleteGroup: async (_source, { input }, { dataSources }) => {
      try {
        return await dataSources.accountApi.deleteGroup(input);
      } catch (e) {
        // TODO: Error handling
        if (e.extensions.response.body.code) {
          throw new Error(e.extensions.response.body.code);
        }
        throw new Error('InternalServerError');
      }
    },
    renameGroup: async (_source, { input }, { dataSources }) => {
      try {
        return await dataSources.accountApi.renameGroup(input);
      } catch (e) {
        // TODO: Error handling
        if (e.extensions.response.body.code) {
          throw new Error(e.extensions.response.body.code);
        }
        throw new Error('InternalServerError');
      }
    },
    changeGroupPermission: async (_source, { input }, { dataSources }) => {
      try {
        for (const key in input) {
          const {
            group_id,
            can_print,
            can_download,
            pc_can_download,
            user_mobile_restriction,
            use_watermarks,
            ip_restriction,
            allowed_ips,
          } = input;
          switch (key) {
            case 'can_print':
              await dataSources.accountApi.groupChangeUserCanPrint({
                value: can_print,
                group_id,
              });
              break;
            case 'can_download':
              dataSources.accountApi.groupChangeUserCanDownload({
                value: can_download,
                group_id,
              });
              break;
            case 'pc_can_download':
              dataSources.accountApi.groupChangeUserPcCanDownload({
                value: pc_can_download,
                group_id,
              });
              break;
            case 'user_mobile_restriction':
              dataSources.accountApi.groupChangeMobileRestriction({
                value: user_mobile_restriction,
                group_id,
              });
              break;
            case 'use_watermarks':
              dataSources.accountApi.groupChangeUserUseWatermarks({
                value: use_watermarks,
                group_id,
              });
              break;
            case 'ip_restriction':
              dataSources.accountApi.groupChangeUserIpRestriction({
                ip_restriction,
                allowed_ips,
                group_id,
              });
          }
        }
        return await dataSources.accountApi.getGroups();
      } catch (e) {
        // TODO: Error handling
        if (e.extensions.response.body.code) {
          throw new Error(e.extensions.response.body.code);
        }
        throw new Error('InternalServerError');
      }
    },
    changeUserPassword: async (_source, { input }, { dataSources }) => {
      // TODO: Error handling
      return dataSources.accountApi.changePassword(input);
    },
    inviteUser: async (_source, { input }, { dataSources }) => {
      try {
        const { company_id } = await dataSources.accountApi.getUser();
        return await dataSources.accountApi.inviteUser({
          ...input,
          company_id,
        });
      } catch (e) {
        // TODO: Error handling
        if (e.extensions.response.body.code) {
          throw new Error(e.extensions.response.body.code);
        }
        throw new Error('InternalServerError');
      }
    },
    companyRemoveUser: async (_source, { input }, { dataSources }) => {
      try {
        const { company_id } = await dataSources.accountApi.getUser();
        return await dataSources.accountApi.companyRemoveUser({
          ...input,
          company_id,
        });
      } catch (e) {
        // TODO: Error handling
        if (e.extensions.response.body.code) {
          throw new Error(e.extensions.response.body.code);
        }
        throw new Error('InternalServerError');
      }
    },
    companyCancelUserRemoving: async (_source, { input }, { dataSources }) => {
      try {
        const { company_id } = await dataSources.accountApi.getUser();
        return await dataSources.accountApi.companyCancelUserRemoving({
          ...input,
          company_id,
        });
      } catch (e) {
        // TODO: Error handling
        if (e.extensions.response.body.code) {
          throw new Error(e.extensions.response.body.code);
        }
        throw new Error('InternalServerError');
      }
    },
    companyChangeUserExpired: async (_source, { input }, { dataSources }) => {
      const { company_id } = await dataSources.accountApi.getUser();
      // TODO: Error handling
      return dataSources.accountApi.companyChangeUserExpired({
        ...input,
        company_id,
      });
    },
    companyChangeUsersQuota: async (_source, { input }, { dataSources }) => {
      const { company_id } = await dataSources.accountApi.getUser();
      // TODO: Error handling
      return dataSources.accountApi.companyChangeUsersQuota({
        ...input,
        company_id,
      });
    },
    companyUsersDisable: async (_source, { input }, { dataSources }) => {
      // TODO: Error handling
      const { company_id } = await dataSources.accountApi.getUser();
      return dataSources.accountApi.companyUsersDisable({
        ...input,
        company_id,
      });
    },
    companyUsersEnable: async (_source, { input }, { dataSources }) => {
      // TODO: Error handling
      const { company_id } = await dataSources.accountApi.getUser();
      return dataSources.accountApi.companyUsersEnable({
        ...input,
        company_id,
      });
    },
    changeUserPermission: async (_source, { input }, { dataSources }) => {
      // TODO: Error handling
      for (const key in input) {
        const {
          user_id,
          can_print,
          can_download,
          pc_can_download,
          user_mobile_restriction,
          use_watermarks,
          ip_restriction,
          allowed_ips,
        } = input;
        switch (key) {
          case 'can_print':
            await dataSources.accountApi.companyChangeUserCanPrint({
              value: can_print,
              user_id,
            });
            break;
          case 'can_download':
            dataSources.accountApi.companyChangeUserCanDownload({
              value: can_download,
              user_id,
            });
            break;
          case 'pc_can_download':
            dataSources.accountApi.companyChangeUserPcCanDownload({
              value: pc_can_download,
              user_id,
            });
            break;
          case 'user_mobile_restriction':
            dataSources.accountApi.companyChangeMobileRestriction({
              value: user_mobile_restriction,
              user_id,
            });
            break;
          case 'use_watermarks':
            dataSources.accountApi.companyChangeUserUseWatermarks({
              value: use_watermarks,
              user_id,
            });
            break;
          case 'ip_restriction':
            dataSources.accountApi.companyChangeUserIpRestriction({
              ip_restriction,
              allowed_ips,
              user_id,
            });
        }
      }
      return dataSources.accountApi.getUser();
    },
    inviteGroupUsers: async (_source, { input }, { dataSources }) => {
      // TODO: Error handling
      const response = [];
      input.data.forEach(async (item, index) => {
        const responseInviteGroupUsers =
          await dataSources.accountApi.inviteGroupUsers({
            groupId: input.groupId,
            userIds: item,
          });
        response.push(responseInviteGroupUsers[0]);
        if (index === input.data.length - 1) {
          return response;
        }
      });
    },
    deleteGroupUsers: async (_source, { input }, { dataSources }) => {
      // TODO: Error handling
      const response = [];
      input.data.forEach(async (item, index) => {
        const responseInviteGroupUsers =
          await dataSources.accountApi.deleteGroupUsers({
            groupId: input.groupId,
            userIds: item,
          });
        response.push(responseInviteGroupUsers[0]);
        if (index === input.data.length - 1) {
          return response;
        }
      });
    },
  },
};

export default resolvers;
