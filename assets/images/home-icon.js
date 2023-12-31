import {Svg, Path, G, Polygon} from 'react-native-svg';
import React from 'react';
import {PRIMARY_COLOR, TERTIARY_COLOR} from '../../app/constants/theme'
export default ({isActive}) => {
  const fill = isActive ? PRIMARY_COLOR : TERTIARY_COLOR;
  return (
    <Svg
      width="24px"
      height="24px"
      viewBox="0 0 20 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <G id="Icons" stroke="none" stroke-width="1" fill-rule="evenodd">
        <G id="Rounded" transform="translate(-816.000000, -289.000000)">
          <G id="Action" transform="translate(100.000000, 100.000000)">
            <G
              id="-Round-/-Action-/-home"
              transform="translate(714.000000, 186.000000)">
              <G transform="translate(0.000000, 0.000000)">
                <Polygon id="Path" points="0 0 24 0 24 24 0 24" />
                <Path
                  d="M10,19 L10,14 L14,14 L14,19 C14,19.55 14.45,20 15,20 L18,20 C18.55,20 19,19.55 19,19 L19,12 L20.7,12 C21.16,12 21.38,11.43 21.03,11.13 L12.67,3.6 C12.29,3.26 11.71,3.26 11.33,3.6 L2.97,11.13 C2.63,11.43 2.84,12 3.3,12 L5,12 L5,19 C5,19.55 5.45,20 6,20 L9,20 C9.55,20 10,19.55 10,19 Z"
                  id="🔹Icon-Color"
                  fill={fill}
                />
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
};