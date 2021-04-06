import * as React from 'react';
import {SvgXml} from 'react-native-svg';

export default ({style}) => {
  const xml = `
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.15" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#4094E1"/>
<path d="M13.98 16.708C13.98 14.929 15.4216 13.488 17.2 13.488H22.7943L28.02 18.386V26.031C28.02 27.809 26.5784 29.251 24.8 29.251H17.2C15.4216 29.251 13.98 27.809 13.98 26.031V16.708Z" stroke="#4094E1" stroke-width="1.96"/>
<path d="M22.2307 12.508V17.016C22.2307 17.789 22.8575 18.416 23.6307 18.416H27.7692" stroke="#4094E1" stroke-width="1.96"/>
</svg>
  `;
  return <SvgXml xml={xml} style={style} />;
};
