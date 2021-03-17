import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16.5" cy="16.5" r="16.5" fill="#4094E1"/>
<path d="M19.1538 22.8489H11.6218C10.358 22.8489 9.3335 21.8244 9.3335 20.5606V12.5975C9.3335 11.3337 10.358 10.3092 11.6218 10.3092H22.3043C23.5681 10.3092 24.5927 11.3337 24.5927 12.5975V16.8057" stroke="#FDFDFD" stroke-width="1.14416" stroke-linecap="round"/>
<circle cx="16.736" cy="16.8057" r="2.87054" stroke="#FDFDFD" stroke-width="1.14416"/>
<path d="M22.9307 18.9208V23" stroke="#FDFDFD" stroke-width="1.14416" stroke-linecap="round"/>
<path d="M20.8908 20.9604H24.97" stroke="#FDFDFD" stroke-width="1.14416" stroke-linecap="round"/>
<circle cx="21.8728" cy="13.4818" r="0.755404" fill="#FDFDFD"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
