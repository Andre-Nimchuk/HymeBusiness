import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#4094E1"/>
<path d="M11.2436 15.8647L14.7249 18.6L20.5436 12.0352" stroke="#FDFDFD" stroke-width="2.11765" stroke-linecap="round"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
