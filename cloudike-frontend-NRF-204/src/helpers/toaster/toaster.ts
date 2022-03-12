import { toast } from 'react-toastify';

import { ToasterType } from './toaster.types';

/**
 * @deprecated use snackbar from material-ui
 */
const toaster: ToasterType = (title, type, autoClose = 2000) => {
  toast(title, { autoClose, type });
};

export default toaster;
