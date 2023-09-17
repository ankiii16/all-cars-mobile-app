import {Svg, Path, G} from 'react-native-svg';
import React from 'react';
import {PRIMARY_COLOR, TERTIARY_COLOR} from '../../app/constants/theme'
export default ({isActive}) => {
  const fill = isActive ? PRIMARY_COLOR : TERTIARY_COLOR;
  return (
    <Svg width="24px" height="24px" viewBox="0 0 24 24" fill={fill}>
      <G id="Iconly/Curved/Profile">
        <G id="Profile">
          <Path
            id="Stroke 1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z"
            stroke={fill}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            id="Stroke 3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.8372 11.1735C14.26 11.1735 16.2236 9.2099 16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999 7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063 11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z"
            stroke={fill}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
      </G>
    </Svg>
  );
};