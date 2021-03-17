import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="4" fill="#4094E1"/>
<path d="M12.5 18C12.4809 18 12.4619 17.9978 12.4434 17.9934C12.3989 17.9833 8 16.9119 8 11.8318V8.24982C8 8.13393 8.06829 8.02974 8.17153 7.98907L12.4068 6.3176C12.4666 6.2942 12.5328 6.2942 12.5932 6.3176L16.8285 7.98907C16.9317 8.02974 17 8.13393 17 8.24982V11.8318C17 16.9119 12.6011 17.9839 12.5566 17.9939C12.5381 17.9978 12.5191 18 12.5 18Z" fill="#FDFDFD"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
