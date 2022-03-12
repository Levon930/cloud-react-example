import {
  Block,
  Cancel,
  CheckCircle,
  Close,
  CloudDownload,
  CloudUpload,
  CreateNewFolder,
  DeleteOutline,
  Edit,
  Email,
  FileCopy,
  Lock,
  PeopleAltOutlined,
  PersonAddOutlined,
  PlaylistAdd,
  Share,
  Timer,
  Update,
  VpnKey,
} from '@material-ui/icons';

import { MenuItem } from '@components/RightSidebarMenu';
import { modalQuerys as profileQuerys } from '@utils/routes/profile-routes';
import { modalQuerys as settingsQuerys } from '@utils/routes/settings-routes';
import { Items } from './RightSideBar.types';

const teamIcons = [
  <PersonAddOutlined />,
  <Email />,
  <Block />,
  <CheckCircle />,
  <Close />,
  <Lock />,
  <PlaylistAdd />,
  <VpnKey />,
  <DeleteOutline />,
  <Update />,
  <Timer />,
  <Email />,
  <Cancel />,
];

const groupIcons = [<PeopleAltOutlined />, <Edit />, <DeleteOutline />, <Lock />];

const documentIcons = [
  <CreateNewFolder />,
  <CloudUpload />,
  <CloudDownload />,
  <Share />,
  <DeleteOutline />,
  <FileCopy />,
];

export const createTeamItems = ({
  names,
  push,
  parent,
  selected,
  handleUpload,
  handleDownload,
  currentPath,
}: Items): MenuItem[] => {
  if (parent === 'team') {
    return names.map((name, i) => {
      switch (i) {
        case 0:
          return {
            name,
            Icon: () => teamIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamMemberCreate}` }),
          };
        case 1:
          return {
            name,
            Icon: () => teamIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamMemberInvite}` }),
          };
        case 2:
          return {
            name,
            Icon: () => teamIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamMemberBlock}` }),
            disabled:
              !selected ||
              selected?.length === 0 ||
              selected.some((item) => !item.is_active || item.status !== 'common'),
          };
        case 3:
          return {
            name,
            Icon: () => teamIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamMemberUnblock}` }),
            disabled:
              !selected ||
              selected?.length === 0 ||
              selected.some((item) => item.is_active || item.status !== 'common'),
          };
        case 4:
          return {
            name,
            Icon: () => teamIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamMemberDelete}` }),
            disabled:
              !selected ||
              selected?.length === 0 ||
              selected.some((item) => item.status !== 'common'),
          };
        case 5:
          return {
            name,
            Icon: () => teamIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamMemberDetailedAuthority}` }),
            disabled:
              !selected ||
              selected?.length === 0 ||
              selected.some((item) => item.status !== 'common'),
          };
        case 6:
          return {
            name,
            Icon: () => teamIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamMemberSetStorage}` }),
            disabled:
              !selected ||
              selected?.length === 0 ||
              selected.some((item) => item.status !== 'common'),
          };
        case 7:
          return {
            name,
            Icon: () => teamIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamMemberChangePassword}` }),
            disabled:
              !selected ||
              selected?.length === 0 ||
              selected.some((item) => item.status !== 'common'),
          };
        case 9:
          return {
            name,
            Icon: () => teamIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamMemberCancelDeletion}` }),
            disabled:
              !selected ||
              selected?.length === 0 ||
              selected.some((item) => item.status !== 'waiting_for_deletion'),
          };
        case 10:
          return {
            name,
            Icon: () => teamIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamMemberSetExpirationDate}` }),
            disabled:
              !selected ||
              selected?.length === 0 ||
              selected.some((item) => item.status !== 'common'),
          };
        default:
          // eslint-disable-next-line no-console
          console.error('Icon is not found', 'error');
      }

      return {
        name,
        Icon: () => teamIcons[i],
      };
    });
  }
  if (parent === 'group') {
    return names.map((name, i) => {
      switch (i) {
        case 0:
          return {
            name,
            Icon: () => groupIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamGroupCreate}` }),
          };
        case 1:
          return {
            name,
            Icon: () => groupIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamGroupRename}` }),
            disabled: !selected || selected?.length !== 1,
          };
        case 2:
          return {
            name,
            Icon: () => groupIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamGroupDelete}` }),
            disabled: !selected || selected?.length === 0,
          };
        case 3:
          return {
            name,
            Icon: () => groupIcons[i],
            onClick: () => push({ search: `?modal=${settingsQuerys.teamGroupChangeAuthority}` }),
            disabled: !selected || selected?.length === 0,
          };
        default:
          // eslint-disable-next-line no-console
          console.error('Icon is not found', 'error');
      }

      return {
        name,
        Icon: () => groupIcons[i],
      };
    });
  }

  return names.map((name, i) => {
    switch (i) {
      case 0:
        return {
          name,
          Icon: () => documentIcons[i],
          onClick: () =>
            push({ search: `?folder=${currentPath}&modal=${profileQuerys.documentsCreate}` }),
        };
      case 1:
        return {
          name,
          Icon: () => documentIcons[i],
          dialog: (files) => handleUpload && handleUpload(files),
        };
      case 2:
        return {
          name,
          Icon: () => documentIcons[i],
          onClick: () => handleDownload && handleDownload(),
          disabled: !(selected?.length === 1),
        };
      case 3:
        return {
          name,
          Icon: () => documentIcons[i],
          onClick: () =>
            push({ search: `?folder=${currentPath}&modal=${profileQuerys.documentsShare}` }),
          disabled: !(selected?.length === 1),
        };
      case 4:
        return {
          name,
          Icon: () => documentIcons[i],
          onClick: () =>
            push({ search: `?folder=${currentPath}&modal=${profileQuerys.documentsDelete}` }),
          disabled: !selected?.length,
        };
      default:
        // eslint-disable-next-line no-console
        console.error('Icon is not found', 'error');
    }

    return {
      name,
      Icon: () => documentIcons[i],
    };
  });
};
