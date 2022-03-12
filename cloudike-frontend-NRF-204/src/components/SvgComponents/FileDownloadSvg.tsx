import React from 'react';

import { PreviewMenuItem } from '@components/SvgComponents';

const FileDownloadSvg: React.FC<PreviewMenuItem> = ({ isActive = false }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.322 17.618">
      <g id="벡터_고급_개체" data-name="벡터 고급 개체" transform="translate(-1878.678 -83.382)">
        <g id="벡터_고급_개체-2" data-name="벡터 고급 개체" transform="translate(1573.903 -99.38)">
          <g id="Group_3" data-name="Group 3">
            <path
              id="Path_11"
              data-name="Path 11"
              d="M323.725,189.479a6.789,6.789,0,0,0-13.578,0,5.451,5.451,0,0,0,.079,10.9h13.421a5.451,5.451,0,0,0,.078-10.9Zm-.078,8.948H310.226a3.5,3.5,0,1,1,.771-6.909.976.976,0,0,0,1.178-1.121,4.84,4.84,0,1,1,9.522,0,.977.977,0,0,0,1.178,1.122,3.5,3.5,0,1,1,.771,6.909Z"
              fill="#6078b6"
            />
            <path
              id="Path_12"
              data-name="Path 12"
              d="M318.617,192.214l-1.027.933v-3.573a.976.976,0,1,0-1.953,0v3.573l-1.026-.933a.977.977,0,1,0-1.314,1.445l2.66,2.419c.018.016.039.028.058.043s.047.038.072.054.058.032.088.048.05.027.076.037a1.022,1.022,0,0,0,.1.033c.024.006.047.015.072.02a.971.971,0,0,0,.182.018h.011a.988.988,0,0,0,.179-.018c.024,0,.047-.013.071-.02a.929.929,0,0,0,.106-.033c.026-.011.05-.024.076-.037a.836.836,0,0,0,.088-.048.905.905,0,0,0,.073-.055c.019-.015.04-.027.058-.043l2.66-2.418h0a.977.977,0,0,0-1.314-1.446Z"
              fill="#6078b6"
            />
          </g>
        </g>
        <path
          id="Color_Overlay"
          data-name="Color Overlay"
          d="M1884.128,101a5.451,5.451,0,0,1-.078-10.9,6.789,6.789,0,0,1,13.577,0,5.451,5.451,0,0,1-.078,10.9Zm-3.5-5.453a3.5,3.5,0,0,0,3.5,3.5h13.421a3.5,3.5,0,1,0-.771-6.909.977.977,0,0,1-1.178-1.121,4.791,4.791,0,0,0,.079-.838,4.84,4.84,0,1,0-9.6.838.977.977,0,0,1-1.178,1.121,3.486,3.486,0,0,0-4.269,3.41Zm9.885,1.4h0a1.018,1.018,0,0,1-.181-.018c-.025-.005-.048-.014-.072-.021a1.018,1.018,0,0,1-.105-.032.765.765,0,0,1-.077-.038.926.926,0,0,1-.087-.048c-.025-.016-.049-.035-.073-.054s-.04-.027-.058-.043L1887.2,94.28a.977.977,0,1,1,1.314-1.445l1.026.933V90.2a.977.977,0,1,1,1.953,0v3.573l1.027-.933a.977.977,0,0,1,1.314,1.445h0l-2.659,2.418c-.018.016-.039.028-.058.042a.621.621,0,0,1-.073.055.748.748,0,0,1-.087.048c-.026.013-.05.027-.076.038a.89.89,0,0,1-.105.032c-.024.007-.047.015-.071.021a1.1,1.1,0,0,1-.179.018Z"
          fill={isActive ? '#ffbd36' : '#999'}
        />
      </g>
    </svg>
  );
};

export default FileDownloadSvg;