import { CloudikeBaseAPI } from '../base';
import * as Request from './request.types';
import * as Response from './response.types';

export class NotificationAPI extends CloudikeBaseAPI {
  notifications = async (
    type: Request.NotificationsType
  ): Promise<Response.Notifications> => {
    if (type === Request.NotificationsType.NEW) {
      return this.get<Response.Notifications>('/notices/', {
        params: { scope: 'abstract', behavior: 'static', status: 'new' },
      });
    } else {
      return this.get<Response.Notifications>('/notices/');
    }
  };

  // FIXME: there's no API call anymore
  // viewNotifications = async (
  //   notice_hash: Request.ViewNotifications
  // ): Promise<Response.ViewNotifications> => {
  //   return this.get<Response.ViewNotifications>('/view_notice/', {
  //     params: { hash: notice_hash },
  //   });
  // };
}
