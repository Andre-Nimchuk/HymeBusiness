import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 16.3462L10.5 7.57692M1 3.92308H3.19231M20 3.92308H17.8077M14.1538 3.92308H6.84615M14.1538 3.92308V2.46154C14.1538 1.65435 13.4995 1 12.6923 1H8.30769C7.50051 1 6.84615 1.65435 6.84615 2.46154V3.92308M14.1538 3.92308H17.8077M6.84615 3.92308H3.19231M17.8077 3.92308V17.0769C17.8077 18.6913 16.499 20 14.8846 20H6.11538C4.50101 20 3.19231 18.6913 3.19231 17.0769V3.92308" stroke="#FDFDFD" stroke-width="1.46154" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
