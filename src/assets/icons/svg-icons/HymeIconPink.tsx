import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.31579 20.3422H17.9605V11.7764H18.5858C19.4767 11.7764 19.9229 10.6993 19.2929 10.0693L10.7763 1.55273L1.76139 10.3365C1.11881 10.9626 1.56208 12.0527 2.45926 12.0527H3.31579V20.3422Z" stroke="#FE7294" stroke-width="1.65789"/>
<path d="M8.5658 20.0657V16.1973C8.5658 15.5869 9.06064 15.092 9.67106 15.092H12.1579C12.7683 15.092 13.2632 15.5869 13.2632 16.1973V20.0657" stroke="#FE7294" stroke-width="1.65789"/>
<path d="M14.9211 5.42105V1.55263C14.9211 1.24742 15.168 1 15.4732 1C16.074 1 16.9816 1 17.6847 1C17.9899 1 18.2369 1.24742 18.2369 1.55263V9.01316" stroke="#FE7294" stroke-width="1.65789"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
