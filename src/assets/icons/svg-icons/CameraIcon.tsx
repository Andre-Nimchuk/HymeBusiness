import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 3.5L6.27208 1.18377C6.40819 0.77543 6.79033 0.5 7.22076 0.5H13.7792C14.2097 0.5 14.5918 0.77543 14.7279 1.18377L15.5 3.5" stroke="#4094E1"/>
<rect x="0.5" y="3.5" width="20" height="15" rx="3.5" stroke="#4094E1"/>
<circle cx="10.5" cy="11.5" r="4" stroke="#4094E1"/>
<path d="M3 7H5.5" stroke="#4094E1" stroke-linecap="round"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
