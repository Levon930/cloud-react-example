import { IResolvers } from 'graphql-tools';

export const resolvers: IResolvers = {
  Query: {
    getShares: async (_source, { user }, { dataSources }) => {
      console.log(dataSources, 'data sources');

      return dataSources.storageApi.getShares(user);
    },
    companySharedList: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.companySharedList(input);
    },
    companySharedFolderInfo: async (
      _source,
      { folder_hash },
      { dataSources }
    ) => {
      return dataSources.storageApi.companySharedFolderInfo(folder_hash);
    },
    accessRequestsList: async (_source, _, { dataSources }) => {
      return dataSources.storageApi.accessRequestsList();
    },
    invitations: async (_source, _, { dataSources }) => {
      return dataSources.storageApi.invitations();
    },
    publicLinksList: async (_source, { hash }, { dataSources }) => {
      return dataSources.storageApi.publicLinksList(hash);
    },
    publicItemInfo: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.publicItemInfo(input);
    },
    publicFolderMetadata: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.publicFolderMetadata(input);
    },
    collaborators: async (_source, { path }, { dataSources }) => {
      return dataSources.storageApi.collaborators(path);
    },
    publicLinkInfo: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.publicLinkInfo(input);
    },
  },
  Mutation: {
    shareFolder: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.shareFolder(input);
    },
    removeUserFromShared: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.removeUserFromShared(input);
    },
    acceptSharing: async (_source, { hash }, { dataSources }) => {
      return dataSources.storageApi.acceptSharing(hash);
    },
    declineSharing: async (_source, { hash }, { dataSources }) => {
      return dataSources.storageApi.declineSharing(hash);
    },
    uninviteFolder: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.uninviteFolder(input);
    },
    unshareFolder: async (_source, { path }, { dataSources }) => {
      return dataSources.storageApi.unshareFolder(path);
    },
    updateCollaboratorRights: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.updateCollaboratorRights(input);
    },
    folderSizeLimit: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.folderSizeLimit(input);
    },
    addFolderToCompanyShared: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.addFolderToCompanyShared(input);
    },
    removeFolderFromCompanyShared: async (
      _source,
      { input },
      { dataSources }
    ) => {
      return dataSources.storageApi.removeFolderFromCompanyShared(input);
    },
    sharesCompanyShared: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.sharesCompanyShared(input);
    },
    sendAccessRequest: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.sendAccessRequest(input);
    },
    acceptSharingRequest: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.acceptSharingRequest(input);
    },
    handoverPublicFolder: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.handoverPublicFolder(input);
    },
    secureFolderMetadata: async (_source, { input }, { dataSources }) => {
      return dataSources.storageApi.secureFolderMetadata(input);
    },
  },
};

export default resolvers;
