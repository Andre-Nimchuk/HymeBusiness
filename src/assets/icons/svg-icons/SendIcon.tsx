import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1.52902C0 0.807864 0.740131 0.323807 1.40082 0.612858L13.9059 6.08384C14.7048 6.43336 14.7048 7.56664 13.9059 7.91616L1.40082 13.3871C0.740131 13.6762 0 13.1921 0 12.471V8.75L6.10628 7L0 5.25V1.52902Z" fill="#2B7CE4"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
