import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.14663 4.50762C1.14663 2.72926 2.58827 1.28762 4.36663 1.28762H11.4016L17.4505 6.95711V16.3384C17.4505 18.1167 16.0089 19.5584 14.2305 19.5584H4.36662C2.58827 19.5584 1.14663 18.1167 1.14663 16.3384V4.50762Z" stroke="#4094E1" stroke-width="1.96"/>
<path d="M10.7035 0.307617V5.65121C10.7035 6.42441 11.3303 7.05121 12.1035 7.05121H17.0256" stroke="#4094E1" stroke-width="1.96"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
