import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.92978 16.9733H0.839112L0.839111 12.6645L9.31264 3.73903M4.92978 16.9733L16.033 16.9733M4.92978 16.9733L13.4033 8.04787M9.31264 3.73903L11.0658 1.89238C12.1954 0.70253 14.0268 0.702532 15.1565 1.89238C16.2861 3.08224 16.2861 5.01137 15.1565 6.20122L13.4033 8.04787M9.31264 3.73903L13.4033 8.04787" stroke="#FDFDFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
