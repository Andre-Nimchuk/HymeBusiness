import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5.77747C1.5 5.22518 1.94772 4.77747 2.5 4.77747H19C19.5523 4.77747 20 5.22518 20 5.77747C20 6.32975 19.5523 6.77747 19 6.77747H2.5C1.94772 6.77747 1.5 6.32975 1.5 5.77747Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70726 1.07036C7.09778 1.46088 7.09778 2.09405 6.70726 2.48457L3.41436 5.77747L6.70726 9.07036C7.09778 9.46088 7.09778 10.094 6.70726 10.4846C6.31673 10.8751 5.68357 10.8751 5.29304 10.4846L0.585938 5.77747L5.29304 1.07036C5.68357 0.679835 6.31673 0.679835 6.70726 1.07036Z" fill="white"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} width="24" height="20" style={style} />;
