import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="#4094E1"/>
<path d="M7.25389 10.2353L9.49988 12L13.2539 7.76471" stroke="#FDFDFD" stroke-width="2.11765" stroke-linecap="round"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
