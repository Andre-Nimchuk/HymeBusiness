import * as React from 'react';
import {SvgXml} from 'react-native-svg';

export default ({style}) => {
  const xml = `
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.15" cx="21" cy="21" r="21" fill="#4094E1"/>
    <path d="M0.98 4.70781C0.98 2.92945 2.42164 1.48781 4.2 1.48781H9.79435L15.02 6.3857V14.0309C15.02 15.8092 13.5784 17.2509 11.8 17.2509H4.2C2.42164 17.2509 0.98 15.8092 0.98 14.0309V4.70781Z" stroke="#4094E1" stroke-width="1.96"/>
    <path d="M9.23071 0.507812V5.0155C9.23071 5.7887 9.85751 6.4155 10.6307 6.4155H14.7692" stroke="#4094E1" stroke-width="1.96"/>
  </svg>
  `;
  return <SvgXml xml={xml} style={style} />;
};
