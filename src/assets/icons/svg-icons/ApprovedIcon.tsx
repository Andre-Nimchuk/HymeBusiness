import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13" cy="13" r="12" fill="#5CD170" stroke="white" stroke-width="2"/>
<path d="M8.99997 12.8295L12.4813 15.5648L18.3 9.00009" stroke="#FDFDFD" stroke-width="2.11765" stroke-linecap="round"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
