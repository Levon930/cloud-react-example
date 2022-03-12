import { Namespace } from 'react-i18next';
import { TFunction } from 'i18next';

import accountSettings from '../../../public/locales/en/accountSettings.json';
import auth from '../../../public/locales/en/auth.json';
import companySettings from '../../../public/locales/en/companySettings.json';
import deleteAccountModal from '../../../public/locales/en/deleteAccountModal.json';
import documents from '../../../public/locales/en/documents.json';
import filePreview from '../../../public/locales/en/filePreview.json';
import groupPage from '../../../public/locales/en/groupPage.json';
import mainLayout from '../../../public/locales/en/mainLayout.json';
import menuItems from '../../../public/locales/en/menuItems.json';
import notifications from '../../../public/locales/en/notifications.json';
import paymentMethodModal from '../../../public/locales/en/paymentMethodModal.json';
import plans from '../../../public/locales/en/plans.json';
import pnf404 from '../../../public/locales/en/pnf404.json';
import publicLink from '../../../public/locales/en/publicLink.json';
import registration from '../../../public/locales/en/registration.json';
import shareModal from '../../../public/locales/en/shareModal.json';
import table from '../../../public/locales/en/table.json';
import teamPage from '../../../public/locales/en/teamPage.json';

declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'mainLayout';
    // custom resources type
    resources: {
      auth: typeof auth;
      registration: typeof registration;
      accountSettings: typeof accountSettings;
      companySettings: typeof companySettings;
      deleteAccountModal: typeof deleteAccountModal;
      notifications: typeof notifications;
      teamPage: typeof teamPage;
      groupPage: typeof groupPage;
      plans: typeof plans;
      pnf404: typeof pnf404;
      documents: typeof documents;
      menuItems: typeof menuItems;
      shareModal: typeof shareModal;
      mainLayout: typeof mainLayout;
      paymentMethodModal: typeof paymentMethodModal;
      filePreview: typeof filePreview;
      publicLink: typeof publicLink;
      table: typeof table;
    };
  }
}
declare module 'i18next' {
  // and extend them!
  interface i18n<N extends Namespace> {
    // Expose parameterized t in the i18next interface hierarchy
    t: TFunction<string, N>;
  }
}
