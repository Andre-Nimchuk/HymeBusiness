import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5H19" stroke="black" stroke-width="2" stroke-linecap="round"/>
<path d="M6 1L2 5L6 9" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

export default ({style}) => (
  <SvgXml xml={xml} width="24" height="20" style={style} />
);
