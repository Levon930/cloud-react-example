import React from 'react';

const CheckMarkIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13.375"
      height="10.125"
      viewBox="0 0 13.375 10.125"
    >
      <defs>
        <filter
          id="filter"
          x="477.281"
          y="392.375"
          width="13.375"
          height="10.125"
          filterUnits="userSpaceOnUse"
        >
          <feFlood result="flood" floodColor="#ffb41d" />
          <feComposite result="composite" operator="in" in2="SourceGraphic" />
          <feBlend result="blend" in2="SourceGraphic" />
        </filter>
      </defs>
      <path
        id="checkmark_복사_3"
        data-name="checkmark 복사 3"
        fillRule="evenodd"
        filter="url(#filter)"
        d="M482.506,402.5a1.151,1.151,0,0,1-.811-0.332l-4.085-4.028a1.13,1.13,0,0,1,0-1.608,1.156,1.156,0,0,1,1.623,0l3.274,3.226,6.171-7.058a1.156,1.156,0,0,1,1.623,0,1.13,1.13,0,0,1,0,1.608l-6.982,7.86A1.153,1.153,0,0,1,482.506,402.5Z"
        transform="translate(-477.281 -392.375)"
      />
    </svg>
  );
};
export default CheckMarkIcon;
