import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13" cy="13" r="12" fill="#FFBA53" stroke="white" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 7.94116C13.5848 7.94116 14.0588 8.41521 14.0588 8.99999V13.5614L16.7487 16.2513C17.1622 16.6648 17.1622 17.3352 16.7487 17.7487C16.3352 18.1622 15.6648 18.1622 15.2513 17.7487L11.9412 14.4386V8.99999C11.9412 8.41521 12.4152 7.94116 13 7.94116Z" fill="#FDFDFD"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
