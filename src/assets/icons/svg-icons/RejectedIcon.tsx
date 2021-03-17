import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13" cy="13" r="12" fill="#FE7A72" stroke="white" stroke-width="2"/>
<path d="M9.00024 17L17.0002 9" stroke="#FDFDFD" stroke-width="2.11765" stroke-linecap="round"/>
<path d="M16.9999 17L8.99988 9" stroke="#FDFDFD" stroke-width="2.11765" stroke-linecap="round"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
