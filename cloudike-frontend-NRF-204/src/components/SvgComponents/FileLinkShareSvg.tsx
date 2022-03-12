import React from 'react';

import { PreviewMenuItem } from '@components/SvgComponents';

const FileLinkShareSvg: React.FC<PreviewMenuItem> = ({ isActive = false }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.521 20.07">
      <g id="벡터_고급_개체" data-name="벡터 고급 개체" transform="translate(-1882 -146.931)">
        <g id="벡터_고급_개체-2" data-name="벡터 고급 개체" transform="translate(1805.016 144.859)">
          <g id="Group_1" data-name="Group 1">
            <path
              id="Path_3"
              data-name="Path 3"
              d="M90.139,17.6,80.456,12.07l9.683-5.532V4.647L79.537,10.7v2.733l10.6,6.057Z"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M83.006,12.082A3.011,3.011,0,1,0,80,15.061,3,3,0,0,0,83.006,12.082Z"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M94.5,5.05a3.011,3.011,0,1,0-3.011,2.98A2.995,2.995,0,0,0,94.5,5.05Z"
            />
            <path
              id="Path_6"
              data-name="Path 6"
              d="M94.5,19.162a3.011,3.011,0,1,0-3.011,2.979A2.995,2.995,0,0,0,94.5,19.162Z"
            />
          </g>
        </g>
        <path
          id="Color_Overlay"
          data-name="Color Overlay"
          d="M1893.5,164.021a2.955,2.955,0,0,1,.058-.582l-6.952-3.971a2.979,2.979,0,1,1-.02-5.067l6.959-3.975a2.961,2.961,0,0,1-.045-.517,2.993,2.993,0,1,1,.772,1.993l-6.549,3.741a2.957,2.957,0,0,1,.009,2.576l6.584,3.762a2.973,2.973,0,1,1-.816,2.039Z"
          fill={isActive ? '#ffbd36' : '#999'}
        />
      </g>
    </svg>
  );
};

export default FileLinkShareSvg;
