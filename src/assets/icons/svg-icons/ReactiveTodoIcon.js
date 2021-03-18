import * as React from 'react';
import {SvgXml} from 'react-native-svg';

export default ({style, color}) => {
  const xml = `
  <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="6" width="12" height="12" rx="3" stroke=${color} stroke-width="1.5"/>
  <path d="M16.3077 13H17C18.6569 13 20 11.6569 20 10V4C20 2.34315 18.6569 1 17 1H10.7692C9.23983 1 8 2.23983 8 3.76923V3.76923" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  `;
  return <SvgXml xml={xml} style={style} />;
};
