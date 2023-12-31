import {Svg, Path, G} from 'react-native-svg';
import React from 'react';
import {PRIMARY_COLOR, TERTIARY_COLOR} from '../../app/constants/theme';
export default ({isActive}) => {
  const fill = isActive ? PRIMARY_COLOR : TERTIARY_COLOR;
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.9333 17 13.6819 16.2176 14.9497 14.9497C16.2176 13.6819 17 11.9333 17 10C17 6.13401 13.866 3 10 3ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.1246 18.2628 14.0784 17.0319 15.6176L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L15.6176 17.0319C14.0784 18.2628 12.1246 19 10 19C5.02944 19 1 14.9706 1 10Z"
        fill={fill}
        stroke-width="0"
      />
    </Svg>
  );
};