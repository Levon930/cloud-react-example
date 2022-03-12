import { CloudikeBaseAPI } from '../base';
import * as Request from './request.types';
import * as Response from './response.types';

export class StorageAPI extends CloudikeBaseAPI {
  async createFolder(
    input: Request.CreateFolder
  ): Promise<Response.FolderMetadata> {
    return this.postEncoded<Response.FolderMetadata>(
      '/fileops/folder_create/',
      input
    );
  }

  async metadata({
    path,
    ...params
  }: Request.Metadata): Promise<
    Response.FileMetadata | Response.FolderMetadata
  > {
    return this.get<Response.FileMetadata | Response.FolderMetadata>(
      `/metadata/${path || ''}`,
      {
        params,
      }
    );
  }

  async downloadUrl(
    params: Request.DownloadUrl
  ): Promise<Response.DownloadUrl> {
    if (params.hash) {
      return this.get<Response.DownloadUrl>(
        `/files/get/${params.hash}${params.path}`
      );
    } else {
      return this.get<Response.DownloadUrl>(`/files/get${params.path}`);
    }
  }

  async downloadArchive(
    params: Request.DownloadUrl
  ): Promise<Response.DownloadUrl> {
    return this.postEncoded<Response.DownloadUrl>(
      `/files/create_link_of_archive/`,
      { ...params, is_win: true }
    );
  }

  async downloadAsArchiveStream(
    paths: Request.DownloadAsArchiveStream
  ): Promise<Response.DownloadAsArchiveStream> {
    return this.get<Response.DownloadAsArchiveStream>(
      `/files/download_as_archive_stream/${paths}/`
    );
  }

  async downloadAsArchive(
    paths: Request.DownloadAsArchive
  ): Promise<Response.DownloadAsArchive> {
    return this.postEncoded<Response.DownloadAsArchive>(
      `/files/download_as_archive/${paths}`
    );
  }

  async backgroundTask(
    id: Request.BackgroundTask
  ): Promise<Response.BackgroundTask> {
    return this.get<Response.BackgroundTask>(`/task/${id}/`);
  }

  async move(
    data: Request.Move
  ): Promise<Response.FileMetadata | Response.FolderMetadata> {
    return this.postEncoded<Response.FileMetadata | Response.FolderMetadata>(
      '/fileops/move/',
      data
    );
  }

  async copy(
    data: Request.Copy
  ): Promise<Response.FileMetadata | Response.FolderMetadata> {
    return this.postEncoded<Response.FileMetadata | Response.FolderMetadata>(
      '/fileops/copy/',
      data
    );
  }

  async createFile(input: Request.CreateFile): Promise<Response.CreateFile> {
    return this.postEncoded<Response.CreateFile>('/files/create/', input);
  }

  async uploadConfirm({
    path,
    ...params
  }: Request.UploadConfirm): Promise<Response.FileMetadata> {
    return this.postEncoded<Response.FileMetadata>(
      `/files/confirm${path}`,
      params
    );
  }

  async multiUploadConfirm(
    urls: Request.MultiUploadConfirm
  ): Promise<Response.MultiUploadConfirm> {
    return this.postEncoded<Response.MultiUploadConfirm>(
      `/files/multi_confirm`,
      urls
    );
  }

  async deleteItem(
    data: Request.DeleteItem
  ): Promise<Response.FileMetadata | Response.FolderMetadata> {
    return this.postEncoded('/fileops/delete/', data);
  }

  async restoreVersion(
    data: Request.RestoreVersion
  ): Promise<Response.FileMetadata> {
    return this.postEncoded<Response.FileMetadata>('/files/restore/', data);
  }

  async multiDelete(
    path: string
  ): Promise<Response.FileMetadata | Response.FolderMetadata> {
    return this.postEncoded<Response.FileMetadata | Response.FolderMetadata>(
      `/fileops/multi/delete/`,
      { path }
    );
  }

  async renameFileOrFolder(
    input: Request.RenameFileOrFolder
  ): Promise<Response.FileMetadata | Response.FolderMetadata> {
    return this.postEncoded<Response.FileMetadata | Response.FolderMetadata>(
      '/fileops/rename/',
      input
    );
  }

  // FAVORITE###############

  async favorites(data): Promise<Response.FileMetadata[]> {
    return this.get<Response.FileMetadata[]>('/files/favorites/', data);
  }

  async setFavorite(
    path: Request.SetFavorite
  ): Promise<Response.FileMetadata | Response.FolderMetadata> {
    return this.postEncoded<Response.FolderMetadata | Response.FolderMetadata>(
      '/fileops/set_favorite/',
      { path }
    );
  }

  // SHARES#################

  async shareFolder(input: Request.ShareFolder): Promise<Response.ShareFolder> {
    return this.postEncoded<Response.ShareFolder>('/shares/add/', input);
  }

  async removeUserFromShared(
    data: Request.RemoveUserFromShared
  ): Promise<Response.SharingActions> {
    return this.postEncoded<Response.SharingActions>('/shares/remove/', data);
  }

  async acceptSharing(
    hash: Request.AcceptSharing
  ): Promise<Response.SharingActions> {
    return this.postEncoded<Response.SharingActions>('/shares/accept/', hash);
  }

  async declineSharing(
    hash: Request.DeclineSharing
  ): Promise<Response.SharingActions> {
    return this.postEncoded<Response.SharingActions>('/shares/decline/', hash);
  }

  async uninviteFolder(
    data: Request.UninviteFolder
  ): Promise<Response.SharingActions> {
    return this.postEncoded<Response.SharingActions>('/shares/uninvite/', data);
  }

  async unshareFolder(
    path: Request.UnshareFolder
  ): Promise<Response.SharingActions> {
    return this.postEncoded<Response.SharingActions>('/shares/unshare/', path);
  }

  async collaborators(
    path: Request.Collaborators
  ): Promise<Response.Collaborators> {
    return this.postEncoded<Response.Collaborators>(
      '/shares/collaborators/',
      path
    );
  }

  async updateCollaboratorRights(
    data: Request.UpdateCollaborator
  ): Promise<Response.SharingActions> {
    return this.postEncoded<Response.SharingActions>(
      '/shares/update_collaborator/',
      data
    );
  }

  async getShares(user: Request.GetShares): Promise<Response.FolderMetadata> {
    return this.get<Response.FolderMetadata>('/shares/', {
      params: user,
    });
  }

  async folderSizeLimit(
    data: Request.FolderSizeLimit
  ): Promise<Response.SharingActions> {
    return this.postEncoded<Response.SharingActions>(
      '/shares/sizelimit/',
      data
    );
  }

  async addFolderToCompanyShared(
    data: Request.AddFolderToCompanyShared
  ): Promise<Response.AddFolderToCompanyShared> {
    return this.postEncoded<Response.AddFolderToCompanyShared>(
      '/shares/company/add/',
      data
    );
  }

  async removeFolderFromCompanyShared(
    data: Request.RemoveFolderFromCompanyShared
  ) {
    return this.postEncoded('/shares/company/hide/', data);
  }

  async companySharedList(
    data: Request.CompanySharedList
  ): Promise<Response.CompanySharedList> {
    return this.get<Response.CompanySharedList>(`/shares/company/get/`, {
      params: data,
    });
  }

  async companySharedFolderInfo(
    folder_hash: string
  ): Promise<Response.CompanySharedFolderInfo> {
    return this.get<Response.CompanySharedFolderInfo>(
      `/shares/company/get/one/${folder_hash}`
    );
  }

  async sharesCompanyShared(
    data: Request.SharesCompanyShared
  ): Promise<Response.SharesCompanyShared> {
    return this.postEncoded<Response.SharesCompanyShared>(
      '/shares/company/shared/',
      data
    );
  }

  async sendAccessRequest(data: Request.SendAccessRequest) {
    return this.postEncoded('/shares/company/request/', data);
  }

  async acceptSharingRequest(data: Request.AcceptSharingRequest) {
    return this.postEncoded('/shares/company/accept/', data);
  }

  async accessRequestsList(): Promise<Response.AccessRequestsList> {
    return this.get<Response.AccessRequestsList>('/shares/company/requests/');
  }

  async invitations(): Promise<Response.Invitations> {
    return this.get<Response.Invitations>('/shares/invites/');
  }

  async createPublicLink(
    data: Request.CreatePublicLink
  ): Promise<Response.FolderMetadata | Response.FileMetadata> {
    return this.postEncoded<Response.FileMetadata | Response.FolderMetadata>(
      '/links/create/',
      data
    );
  }

  async deletePublicLink(
    path: Request.DeletePublicLink
  ): Promise<Response.FileMetadata | Response.FolderMetadata> {
    return this.postEncoded<Response.FileMetadata | Response.FolderMetadata>(
      '/links/delete/',
      path
    );
  }

  async publicLinksList(
    hash: Request.PublicLinksList
  ): Promise<Response.PublicLinksList> {
    return this.get<Response.PublicLinksList>('/links/', { params: hash });
  }
  async publicLinkInfo(
    input: Request.PublicLinkInfo
  ): Promise<Response.PublicLinkInfo> {
    return this.get<Response.PublicLinkInfo>(`/links/info/${input.hash}/`);
  }

  async publicItemInfo(
    data: Request.PublicItemInfo
  ): Promise<Response.PublicItemInfo> {
    return this.get<Response.PublicItemInfo>(
      `/links/get/${data.hash}${data.path}`
    );
  }

  async publicFolderMetadata(
    data: Request.PublicFolderMetadata
  ): Promise<Response.FolderMetadata> {
    return this.get<Response.FolderMetadata>(
      data.path
        ? `/links/metadata/${data.hash}${data.path}/`
        : `/links/metadata/${data.hash}/`
    );
  }
  async secureFolderMetadata(
    input: Request.SecureFolderMetadata
  ): Promise<Response.FolderMetadata> {
    console.log(input);

    return this.get<Response.FolderMetadata>(
      input.path
        ? `/links/metadata/${input.hash}${input.path}/`
        : `/links/metadata/${input.hash}/`,
      input
    );
  }

  async handoverPublicFolder(data: Request.HandoverPublicFolder) {
    return this.postEncoded('/fileops/handover/', data);
  }

  // TRASH#########

  async trash(data: Request.Trash): Promise<Response.Trash> {
    return this.get<Response.Trash>('/trash/', data);
  }

  async restoreItem(data: Request.RestoreItem): Promise<Response.RestoreItem> {
    return this.post<Response.RestoreItem>('/trash/restore/', data);
  }

  async clearTrash(data: Request.ClearTrash): Promise<Response.ClearTrash> {
    return this.post<Response.ClearTrash>('/trash/clear/', data);
  }

  async trashSharedItem(
    data: Request.TrashSharedItem
  ): Promise<Response.Trash> {
    return this.get<Response.Trash>(`/trash/from_shared/${data}`);
  }

  async restoreSharedItem(
    data: Request.RestoreSharedItem
  ): Promise<Response.RestoreSharedItem> {
    return this.postEncoded<Response.RestoreSharedItem>(
      `/trash/restore/${data.name}/from_shared/${data.path}`
    );
  }

  async searchItem(data: Request.SearchItem): Promise<Response.SearchItem> {
    return this.postEncoded<Response.SearchItem>('/files/search/', data);
  }
}

export { Response as StorageResponseTypes };
